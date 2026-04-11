import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../../shared/services/portfolio-data.service';

@Component({
  selector: 'ptf-marquee',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './marquee.html',
  styleUrl: './marquee.scss',
})
export class MarqueeComponent {
  private portfolioData = inject(PortfolioDataService);

  protected readonly techs = this.portfolioData.getMarqueeTechs();
}
