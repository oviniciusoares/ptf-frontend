import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer';

describe('FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the current year', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const copy = fixture.nativeElement.querySelector('.footer__copy') as HTMLElement;
    expect(copy.textContent).toContain(String(new Date().getFullYear()));
  });

  it('should render "Vinicius" in copyright', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const copy = fixture.nativeElement.querySelector('.footer__copy') as HTMLElement;
    expect(copy.textContent).toContain('Vinicius');
  });

  it('should highlight "Soares" in cyan', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const highlight = fixture.nativeElement.querySelector('.footer__highlight') as HTMLElement;
    expect(highlight.textContent?.trim()).toBe('Soares');
  });

  it('should render "Analista de Sistemas" role', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const role = fixture.nativeElement.querySelector('.footer__role') as HTMLElement;
    expect(role.textContent?.trim()).toBe('Analista de Sistemas');
  });

  it('should have footer role="contentinfo"', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const footer = fixture.nativeElement.querySelector('footer') as HTMLElement;
    expect(footer.getAttribute('role')).toBe('contentinfo');
  });
});
