import { TestBed } from '@angular/core/testing';
import { ScrollIndicatorComponent } from './scroll-indicator';

describe('ScrollIndicatorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollIndicatorComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ScrollIndicatorComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render SCROLL text', () => {
    const fixture = TestBed.createComponent(ScrollIndicatorComponent);
    fixture.detectChanges();
    const text = fixture.nativeElement.querySelector('.scroll-indicator__text') as HTMLElement;
    expect(text.textContent?.trim()).toBe('SCROLL');
  });

  it('should render the animated line bar', () => {
    const fixture = TestBed.createComponent(ScrollIndicatorComponent);
    fixture.detectChanges();
    const bar = fixture.nativeElement.querySelector('.scroll-indicator__bar');
    expect(bar).not.toBeNull();
  });

  it('should have accessible aria-label', () => {
    const fixture = TestBed.createComponent(ScrollIndicatorComponent);
    fixture.detectChanges();
    const container = fixture.nativeElement.querySelector('.scroll-indicator') as HTMLElement;
    expect(container.getAttribute('aria-label')).toBeTruthy();
  });
});
