import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerComponent } from '../../atoms/divider/divider';

@Component({
  selector: 'ptf-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DividerComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
}
