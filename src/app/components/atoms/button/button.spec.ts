import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button';

describe('ButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.componentRef.setInput('label', 'Click me');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the label text', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.componentRef.setInput('label', 'Entre em contato');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(btn.textContent?.trim()).toBe('Entre em contato');
  });

  it('should apply filled variant class by default', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.componentRef.setInput('label', 'Test');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(btn.classList.contains('btn--filled')).toBe(true);
  });

  it('should apply outline variant class when specified', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.componentRef.setInput('label', 'Test');
    fixture.componentRef.setInput('variant', 'outline');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(btn.classList.contains('btn--outline')).toBe(true);
  });

  it('should apply outline-primary variant class when specified', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.componentRef.setInput('label', 'Contato');
    fixture.componentRef.setInput('variant', 'outline-primary');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(btn.classList.contains('btn--outline-primary')).toBe(true);
  });

  it('should emit clicked event on button click', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.componentRef.setInput('label', 'Test');
    fixture.detectChanges();

    let emitted = false;
    fixture.componentInstance.clicked.subscribe(() => (emitted = true));

    const btn = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    btn.click();
    expect(emitted).toBe(true);
  });

  it('should set the correct button type', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.componentRef.setInput('label', 'Submit');
    fixture.componentRef.setInput('type', 'submit');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(btn.type).toBe('submit');
  });

  it('should apply md size class by default', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.componentRef.setInput('label', 'Test');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(btn.classList.contains('btn--md')).toBe(true);
  });

  it('should set aria-label from ariaLabel input when provided', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.componentRef.setInput('label', 'Test');
    fixture.componentRef.setInput('ariaLabel', 'Custom label');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(btn.getAttribute('aria-label')).toBe('Custom label');
  });
});
