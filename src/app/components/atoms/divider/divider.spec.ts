import { TestBed } from '@angular/core/testing';
import { DividerComponent } from './divider';

describe('DividerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DividerComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render an hr element', () => {
    const fixture = TestBed.createComponent(DividerComponent);
    fixture.detectChanges();
    const hr = fixture.nativeElement.querySelector('hr');
    expect(hr).not.toBeNull();
  });

  it('should have the divider class', () => {
    const fixture = TestBed.createComponent(DividerComponent);
    fixture.detectChanges();
    const hr = fixture.nativeElement.querySelector('hr') as HTMLElement;
    expect(hr.classList.contains('divider')).toBe(true);
  });

  it('should have aria-hidden true', () => {
    const fixture = TestBed.createComponent(DividerComponent);
    fixture.detectChanges();
    const hr = fixture.nativeElement.querySelector('hr') as HTMLElement;
    expect(hr.getAttribute('aria-hidden')).toBe('true');
  });
});
