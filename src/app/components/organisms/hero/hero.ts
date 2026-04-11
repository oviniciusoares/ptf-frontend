import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { BadgeComponent } from '../../atoms/badge/badge';
import { HeadingComponent } from '../../atoms/heading/heading';
import { ButtonComponent } from '../../atoms/button/button';
import { ScrollIndicatorComponent } from '../../molecules/scroll-indicator/scroll-indicator';
import { ScrollTrackerService } from '../../../shared/services/scroll-tracker.service';

@Component({
  selector: 'ptf-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BadgeComponent, HeadingComponent, ButtonComponent, ScrollIndicatorComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private scrollTracker = inject(ScrollTrackerService);

  ngAfterViewInit(): void {
    this.scrollTracker.track(this.el.nativeElement, 'inicio');
  }

  ngOnDestroy(): void {
    this.scrollTracker.untrack('inicio');
  }

  protected scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
