import { TestBed } from '@angular/core/testing';
import { IconComponent } from './icon';

describe('IconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(IconComponent);
    fixture.componentRef.setInput('name', 'mail');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render SVG for a known icon name', () => {
    const fixture = TestBed.createComponent(IconComponent);
    fixture.componentRef.setInput('name', 'mail');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('svg')).not.toBeNull();
  });

  it('should render empty content for unknown icon name', () => {
    const fixture = TestBed.createComponent(IconComponent);
    fixture.componentRef.setInput('name', 'unknown-icon');
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('.icon') as HTMLElement;
    expect(span.innerHTML.trim()).toBe('');
  });

  it('should update SVG when name input changes', () => {
    const fixture = TestBed.createComponent(IconComponent);
    fixture.componentRef.setInput('name', 'mail');
    fixture.detectChanges();
    expect(fixture.componentInstance['svgContent']).toContain('svg');

    fixture.componentRef.setInput('name', 'github');
    fixture.detectChanges();
    expect(fixture.componentInstance['svgContent']).toContain('svg');
  });
});
