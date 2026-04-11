import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { SectionHeaderComponent } from '../../molecules/section-header/section-header';
import { TechCardComponent } from '../../molecules/tech-card/tech-card';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { ScrollTrackerService } from '../../../shared/services/scroll-tracker.service';
import { PortfolioDataService } from '../../../shared/services/portfolio-data.service';
import type { TechItem } from '../../../shared/models/portfolio.models';

@Component({
  selector: 'ptf-tech-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeaderComponent, TechCardComponent, AnimateOnScrollDirective],
  templateUrl: './tech-grid.html',
  styleUrl: './tech-grid.scss',
})
export class TechGridComponent implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private scrollTracker = inject(ScrollTrackerService);
  private portfolioData = inject(PortfolioDataService);

  protected readonly technologies: TechItem[] = this.portfolioData.getTechnologies();

  ngAfterViewInit(): void {
    this.scrollTracker.track(this.el.nativeElement, 'tecnologias');
  }

  ngOnDestroy(): void {
    this.scrollTracker.untrack('tecnologias');
  }
}
