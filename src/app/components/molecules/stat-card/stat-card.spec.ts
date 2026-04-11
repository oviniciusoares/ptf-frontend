import { TestBed } from '@angular/core/testing';
import { StatCardComponent } from './stat-card';

describe('StatCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCardComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(StatCardComponent);
    fixture.componentRef.setInput('value', '5+');
    fixture.componentRef.setInput('description', 'Anos de experiência');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the value', () => {
    const fixture = TestBed.createComponent(StatCardComponent);
    fixture.componentRef.setInput('value', '30+');
    fixture.componentRef.setInput('description', 'Projetos entregues');
    fixture.detectChanges();
    const valueEl = fixture.nativeElement.querySelector('.stat-card__value') as HTMLElement;
    expect(valueEl.textContent?.trim()).toBe('30+');
  });

  it('should render the description', () => {
    const fixture = TestBed.createComponent(StatCardComponent);
    fixture.componentRef.setInput('value', '12+');
    fixture.componentRef.setInput('description', 'Tecnologias dominadas');
    fixture.detectChanges();
    const descEl = fixture.nativeElement.querySelector('.stat-card__description') as HTMLElement;
    expect(descEl.textContent?.trim()).toBe('Tecnologias dominadas');
  });

  it('should not have animated class initially', () => {
    const fixture = TestBed.createComponent(StatCardComponent);
    fixture.componentRef.setInput('value', '5+');
    fixture.componentRef.setInput('description', 'Anos');
    fixture.detectChanges();
    const card = fixture.nativeElement.querySelector('.stat-card') as HTMLElement;
    expect(card.classList.contains('stat-card--animated')).toBe(false);
  });
});
