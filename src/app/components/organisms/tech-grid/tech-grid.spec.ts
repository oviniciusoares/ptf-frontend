import { TestBed } from '@angular/core/testing';
import { TechGridComponent } from './tech-grid';

describe('TechGridComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechGridComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TechGridComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have section id "tecnologias"', () => {
    const fixture = TestBed.createComponent(TechGridComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#tecnologias')).not.toBeNull();
  });

  it('should render the STACK label', () => {
    const fixture = TestBed.createComponent(TechGridComponent);
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.label') as HTMLElement;
    expect(label.textContent?.trim()).toBe('STACK');
  });

  it('should render 12 tech cards', () => {
    const fixture = TestBed.createComponent(TechGridComponent);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('ptf-tech-card');
    expect(cards.length).toBe(12);
  });

  it('should render the description text', () => {
    const fixture = TestBed.createComponent(TechGridComponent);
    fixture.detectChanges();
    const desc = fixture.nativeElement.querySelector('.tech-grid__description') as HTMLElement;
    expect(desc.textContent).toContain('soluções de alta qualidade');
  });
});
