import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { SectionHeaderComponent } from '../../molecules/section-header/section-header';
import { StatCardComponent } from '../../molecules/stat-card/stat-card';
import { ExperienceItemComponent } from '../../molecules/experience-item/experience-item';
import { DividerComponent } from '../../atoms/divider/divider';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { ScrollTrackerService } from '../../../shared/services/scroll-tracker.service';
import { PortfolioDataService } from '../../../shared/services/portfolio-data.service';
import type { StatItem, ExperienceItem } from '../../../shared/models/portfolio.models';

@Component({
  selector: 'ptf-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SectionHeaderComponent,
    StatCardComponent,
    ExperienceItemComponent,
    DividerComponent,
    AnimateOnScrollDirective,
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private scrollTracker = inject(ScrollTrackerService);
  private portfolioData = inject(PortfolioDataService);

  protected readonly stats: StatItem[] = this.portfolioData.getStats();
  protected readonly experiences: ExperienceItem[] = this.portfolioData.getExperiences();

  protected readonly bio =
    'Analista de Sistemas com mais de 5 anos de experiência no desenvolvimento de soluções robustas e escaláveis. Especializado em integração de software, arquitetura de sistemas e otimização de processos. Trabalho com as principais tecnologias do mercado, desde o backend até o frontend, sempre focado em entregar valor real e qualidade técnica — do levantamento de requisitos ao deploy em produção.';

  ngAfterViewInit(): void {
    this.scrollTracker.track(this.el.nativeElement, 'sobre');
  }

  ngOnDestroy(): void {
    this.scrollTracker.untrack('sobre');
  }
}
