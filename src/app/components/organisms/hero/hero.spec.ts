import { TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero';

describe('HeroComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the availability badge', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const badge = fixture.nativeElement.querySelector('ptf-badge') as HTMLElement;
    expect(badge).not.toBeNull();
    expect(badge.textContent).toContain('Disponível');
  });

  it('should render heading with Vinicius and Soares', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const heading = fixture.nativeElement.querySelector('ptf-heading') as HTMLElement;
    expect(heading.textContent).toContain('Vinicius');
    expect(heading.textContent).toContain('Soares');
  });

  it('should render subtitle with specialties', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const subtitle = fixture.nativeElement.querySelector('.hero__subtitle') as HTMLElement;
    expect(subtitle.textContent).toContain('Analista de Sistemas');
    expect(subtitle.textContent).toContain('Arquitetura de Software');
  });

  it('should render two action buttons', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('ptf-button');
    expect(buttons.length).toBe(2);
  });

  it('should render the scroll indicator', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const scrollIndicator = fixture.nativeElement.querySelector('ptf-scroll-indicator');
    expect(scrollIndicator).not.toBeNull();
  });

  it('should have section id "inicio"', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const section = fixture.nativeElement.querySelector('#inicio');
    expect(section).not.toBeNull();
  });
});
