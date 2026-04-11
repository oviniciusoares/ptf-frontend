import { TestBed } from '@angular/core/testing';
import { TextComponent } from './text';

describe('TextComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TextComponent);
    fixture.componentRef.setInput('content', 'Hello');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the content inside a p tag', () => {
    const fixture = TestBed.createComponent(TextComponent);
    fixture.componentRef.setInput('content', 'Analista de Sistemas');
    fixture.detectChanges();
    const p = fixture.nativeElement.querySelector('p') as HTMLElement;
    expect(p.textContent?.trim()).toBe('Analista de Sistemas');
  });

  it('should apply secondary variant class by default', () => {
    const fixture = TestBed.createComponent(TextComponent);
    fixture.componentRef.setInput('content', 'Test');
    fixture.detectChanges();
    const p = fixture.nativeElement.querySelector('p') as HTMLElement;
    expect(p.classList.contains('text--secondary')).toBe(true);
  });

  it('should apply primary variant class when specified', () => {
    const fixture = TestBed.createComponent(TextComponent);
    fixture.componentRef.setInput('content', 'Test');
    fixture.componentRef.setInput('variant', 'primary');
    fixture.detectChanges();
    const p = fixture.nativeElement.querySelector('p') as HTMLElement;
    expect(p.classList.contains('text--primary')).toBe(true);
  });

  it('should apply base size class by default', () => {
    const fixture = TestBed.createComponent(TextComponent);
    fixture.componentRef.setInput('content', 'Test');
    fixture.detectChanges();
    const p = fixture.nativeElement.querySelector('p') as HTMLElement;
    expect(p.classList.contains('text--base')).toBe(true);
  });

  it('should apply sm size class when specified', () => {
    const fixture = TestBed.createComponent(TextComponent);
    fixture.componentRef.setInput('content', 'Test');
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();
    const p = fixture.nativeElement.querySelector('p') as HTMLElement;
    expect(p.classList.contains('text--sm')).toBe(true);
  });
});
