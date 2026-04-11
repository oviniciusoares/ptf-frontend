import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingTemplateComponent } from '../../components/templates/landing-template/landing-template';
import { HeaderComponent } from '../../components/organisms/header/header';
import { HeroComponent } from '../../components/organisms/hero/hero';
import { MarqueeComponent } from '../../components/organisms/marquee/marquee';
import { AboutComponent } from '../../components/organisms/about/about';
import { TechGridComponent } from '../../components/organisms/tech-grid/tech-grid';
import { ProjectsComponent } from '../../components/organisms/projects/projects';
import { ContactComponent } from '../../components/organisms/contact/contact';
import { FooterComponent } from '../../components/organisms/footer/footer';

@Component({
  selector: 'ptf-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LandingTemplateComponent,
    HeaderComponent,
    HeroComponent,
    MarqueeComponent,
    AboutComponent,
    TechGridComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePageComponent {}
