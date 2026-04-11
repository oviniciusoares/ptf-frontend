import { TestBed } from '@angular/core/testing';
import { ExperienceItemComponent } from './experience-item';

describe('ExperienceItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceItemComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ExperienceItemComponent);
    fixture.componentRef.setInput('period', '2023 — atual');
    fixture.componentRef.setInput('role', 'Analista Sênior');
    fixture.componentRef.setInput('company', 'Tech Solutions');
    fixture.componentRef.setInput('description', 'Liderança técnica');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the period', () => {
    const fixture = TestBed.createComponent(ExperienceItemComponent);
    fixture.componentRef.setInput('period', '2023 — atual');
    fixture.componentRef.setInput('role', 'Role');
    fixture.componentRef.setInput('company', 'Company');
    fixture.componentRef.setInput('description', 'Desc');
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.experience-item__period') as HTMLElement;
    expect(el.textContent?.trim()).toBe('2023 — atual');
  });

  it('should render the role', () => {
    const fixture = TestBed.createComponent(ExperienceItemComponent);
    fixture.componentRef.setInput('period', '2023');
    fixture.componentRef.setInput('role', 'Analista de Sistemas Sênior');
    fixture.componentRef.setInput('company', 'Tech');
    fixture.componentRef.setInput('description', 'Desc');
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.experience-item__role') as HTMLElement;
    expect(el.textContent?.trim()).toBe('Analista de Sistemas Sênior');
  });

  it('should render company inside ptf-badge', () => {
    const fixture = TestBed.createComponent(ExperienceItemComponent);
    fixture.componentRef.setInput('period', '2023');
    fixture.componentRef.setInput('role', 'Role');
    fixture.componentRef.setInput('company', 'Tech Solutions');
    fixture.componentRef.setInput('description', 'Desc');
    fixture.detectChanges();
    const badge = fixture.nativeElement.querySelector('ptf-badge');
    expect(badge).not.toBeNull();
    expect(badge.textContent?.trim()).toBe('Tech Solutions');
  });

  it('should render the description', () => {
    const fixture = TestBed.createComponent(ExperienceItemComponent);
    fixture.componentRef.setInput('period', '2023');
    fixture.componentRef.setInput('role', 'Role');
    fixture.componentRef.setInput('company', 'Company');
    fixture.componentRef.setInput('description', 'Liderança técnica e arquitetura.');
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.experience-item__description') as HTMLElement;
    expect(el.textContent?.trim()).toBe('Liderança técnica e arquitetura.');
  });
});
