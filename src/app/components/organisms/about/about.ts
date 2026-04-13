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
    'Analista Full Stack com sólida experiência no mercado financeiro, atuando com Angular e .NET. No Banco Safra desde 2022, desenvolvo jornadas de investimento e sistemas de alta criticidade — do refinamento de requisitos com as áreas de negócio ao deploy em produção. Referência técnica em funcionalidades críticas, com atuação ativa em decisões de arquitetura, padronização de código e disseminação de boas práticas.';

  ngAfterViewInit(): void {
    this.scrollTracker.track(this.el.nativeElement, 'sobre');
  }

  ngOnDestroy(): void {
    this.scrollTracker.untrack('sobre');
  }
}
