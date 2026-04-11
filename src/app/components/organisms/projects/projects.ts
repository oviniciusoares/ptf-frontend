import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { SectionHeaderComponent } from '../../molecules/section-header/section-header';
import { ProjectItemComponent } from '../../molecules/project-item/project-item';
import { DividerComponent } from '../../atoms/divider/divider';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { ScrollTrackerService } from '../../../shared/services/scroll-tracker.service';
import { PortfolioDataService } from '../../../shared/services/portfolio-data.service';
import type { Project } from '../../../shared/models/portfolio.models';

@Component({
  selector: 'ptf-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeaderComponent, ProjectItemComponent, DividerComponent, AnimateOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private scrollTracker = inject(ScrollTrackerService);
  private portfolioData = inject(PortfolioDataService);

  protected readonly projects: Project[] = this.portfolioData.getProjects();

  ngAfterViewInit(): void {
    this.scrollTracker.track(this.el.nativeElement, 'projetos');
  }

  ngOnDestroy(): void {
    this.scrollTracker.untrack('projetos');
  }
}
