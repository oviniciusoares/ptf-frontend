import { TestBed } from '@angular/core/testing';
import { HeadingComponent } from './heading';

describe('HeadingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeadingComponent);
    fixture.componentRef.setInput('text', 'Test');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render h2 by default', () => {
    const fixture = TestBed.createComponent(HeadingComponent);
    fixture.componentRef.setInput('text', 'Sobre');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h2')).not.toBeNull();
    expect(el.querySelector('h1')).toBeNull();
  });

  it('should render h1 when level is 1', () => {
    const fixture = TestBed.createComponent(HeadingComponent);
    fixture.componentRef.setInput('text', 'Vinicius');
    fixture.componentRef.setInput('level', 1);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')).not.toBeNull();
  });

  it('should render h3 when level is 3', () => {
    const fixture = TestBed.createComponent(HeadingComponent);
    fixture.componentRef.setInput('text', 'Subtitle');
    fixture.componentRef.setInput('level', 3);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h3')).not.toBeNull();
  });

  it('should render the main text', () => {
    const fixture = TestBed.createComponent(HeadingComponent);
    fixture.componentRef.setInput('text', 'Vinicius');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Vinicius');
  });

  it('should render highlight text in a span with correct class', () => {
    const fixture = TestBed.createComponent(HeadingComponent);
    fixture.componentRef.setInput('text', 'Vinicius');
    fixture.componentRef.setInput('highlight', 'Soares');
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('.heading__highlight') as HTMLElement;
    expect(span).not.toBeNull();
    expect(span.textContent?.trim()).toBe('Soares');
  });

  it('should not render highlight span when highlight is empty', () => {
    const fixture = TestBed.createComponent(HeadingComponent);
    fixture.componentRef.setInput('text', 'Sobre');
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('.heading__highlight');
    expect(span).toBeNull();
  });

  it('should apply the lg size class by default', () => {
    const fixture = TestBed.createComponent(HeadingComponent);
    fixture.componentRef.setInput('text', 'Test');
    fixture.detectChanges();
    const heading = fixture.nativeElement.querySelector('.heading') as HTMLElement;
    expect(heading.classList.contains('heading--lg')).toBe(true);
  });

  it('should apply the hero size class when specified', () => {
    const fixture = TestBed.createComponent(HeadingComponent);
    fixture.componentRef.setInput('text', 'Vinicius');
    fixture.componentRef.setInput('size', 'hero');
    fixture.detectChanges();
    const heading = fixture.nativeElement.querySelector('.heading') as HTMLElement;
    expect(heading.classList.contains('heading--hero')).toBe(true);
  });
});
