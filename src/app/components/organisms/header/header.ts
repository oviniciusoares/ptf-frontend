import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { NavLinkComponent } from '../../molecules/nav-link/nav-link';
import { ButtonComponent } from '../../atoms/button/button';
import { ScrollTrackerService } from '../../../shared/services/scroll-tracker.service';
import { PortfolioDataService } from '../../../shared/services/portfolio-data.service';
import type { NavItem } from '../../../shared/models/portfolio.models';

@Component({
  selector: 'ptf-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavLinkComponent, ButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  private scrollTracker = inject(ScrollTrackerService);
  private portfolioData = inject(PortfolioDataService);

  protected readonly navItems: NavItem[] = this.portfolioData.getNavItems();
  protected readonly activeSection = this.scrollTracker.activeSection;
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected scrollToContact(): void {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    this.closeMenu();
  }

  protected isActive(href: string): boolean {
    const sectionId = href.replace('#', '');
    return this.activeSection() === sectionId;
  }
}
