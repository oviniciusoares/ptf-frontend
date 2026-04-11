import { TestBed } from '@angular/core/testing';
import { AboutComponent } from './about';

describe('AboutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have section id "sobre"', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#sobre')).not.toBeNull();
  });

  it('should render ptf-section-header with correct label', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.label') as HTMLElement;
    expect(label.textContent?.trim()).toBe('QUEM SOU');
  });

  it('should render 4 stat cards', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const statCards = fixture.nativeElement.querySelectorAll('ptf-stat-card');
    expect(statCards.length).toBe(4);
  });

  it('should render 3 experience items', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const expItems = fixture.nativeElement.querySelectorAll('ptf-experience-item');
    expect(expItems.length).toBe(3);
  });

  it('should render dividers between experience items', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const dividers = fixture.nativeElement.querySelectorAll('ptf-divider');
    expect(dividers.length).toBe(2);
  });

  it('should render the bio text', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const bio = fixture.nativeElement.querySelector('.about__bio') as HTMLElement;
    expect(bio.textContent).toContain('Analista de Sistemas');
  });

  it('should render EXPERIÊNCIA PROFISSIONAL heading', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.about__experience-title') as HTMLElement;
    expect(title.textContent).toContain('EXPERIÊNCIA PROFISSIONAL');
  });
});
