import { TestBed } from '@angular/core/testing';
import { BadgeComponent } from './badge';

describe('BadgeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BadgeComponent);
    fixture.componentRef.setInput('text', 'Test');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the text', () => {
    const fixture = TestBed.createComponent(BadgeComponent);
    fixture.componentRef.setInput('text', 'Produção');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent?.trim()).toBe('Produção');
  });

  it('should apply the primary variant class by default', () => {
    const fixture = TestBed.createComponent(BadgeComponent);
    fixture.componentRef.setInput('text', 'Brasil');
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('.badge') as HTMLElement;
    expect(span.classList.contains('badge--primary')).toBe(true);
  });

  it('should apply the outline variant class', () => {
    const fixture = TestBed.createComponent(BadgeComponent);
    fixture.componentRef.setInput('text', 'React');
    fixture.componentRef.setInput('variant', 'outline');
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('.badge') as HTMLElement;
    expect(span.classList.contains('badge--outline')).toBe(true);
  });

  it('should render the pulsing dot for availability variant', () => {
    const fixture = TestBed.createComponent(BadgeComponent);
    fixture.componentRef.setInput('text', 'Disponível para novos projetos');
    fixture.componentRef.setInput('variant', 'availability');
    fixture.detectChanges();
    const dot = fixture.nativeElement.querySelector('.badge__dot');
    expect(dot).not.toBeNull();
  });

  it('should not render dot for non-availability variants', () => {
    const fixture = TestBed.createComponent(BadgeComponent);
    fixture.componentRef.setInput('text', 'Test');
    fixture.componentRef.setInput('variant', 'primary');
    fixture.detectChanges();
    const dot = fixture.nativeElement.querySelector('.badge__dot');
    expect(dot).toBeNull();
  });

  it('should apply production variant class', () => {
    const fixture = TestBed.createComponent(BadgeComponent);
    fixture.componentRef.setInput('text', 'Produção');
    fixture.componentRef.setInput('variant', 'production');
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('.badge') as HTMLElement;
    expect(span.classList.contains('badge--production')).toBe(true);
  });
});
