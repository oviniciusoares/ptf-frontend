import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ptf-landing-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landing-template.html',
  styleUrl: './landing-template.scss',
})
export class LandingTemplateComponent {}
