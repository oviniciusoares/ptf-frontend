import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { SectionHeaderComponent } from '../../molecules/section-header/section-header';
import { BadgeComponent } from '../../atoms/badge/badge';
import { ContactCardComponent } from '../../molecules/contact-card/contact-card';
import { IconComponent } from '../../atoms/icon/icon';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { ScrollTrackerService } from '../../../shared/services/scroll-tracker.service';
import { PortfolioDataService } from '../../../shared/services/portfolio-data.service';
import type { ContactItem, ContactInfo } from '../../../shared/models/portfolio.models';

@Component({
  selector: 'ptf-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeaderComponent, BadgeComponent, ContactCardComponent, IconComponent, AnimateOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private scrollTracker = inject(ScrollTrackerService);
  private portfolioData = inject(PortfolioDataService);

  protected readonly contactItems: ContactItem[] = this.portfolioData.getContactItems();
  protected readonly contactInfo: ContactInfo = this.portfolioData.getContactInfo();

  ngAfterViewInit(): void {
    this.scrollTracker.track(this.el.nativeElement, 'contato');
  }

  ngOnDestroy(): void {
    this.scrollTracker.untrack('contato');
  }
}
