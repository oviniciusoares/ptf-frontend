import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the logo with first and last name', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const logo = fixture.nativeElement.querySelector('.header__logo') as HTMLElement;
    expect(logo.textContent).toContain('Vinicius');
    expect(logo.textContent).toContain('Soares');
  });

  it('should highlight the last name in the logo', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const highlight = fixture.nativeElement.querySelector('.header__logo-highlight') as HTMLElement;
    expect(highlight.textContent?.trim()).toBe('Soares');
  });

  it('should render all nav items', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const navLinks = fixture.nativeElement.querySelectorAll('ptf-nav-link');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  it('should not show mobile menu by default', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const mobileNav = fixture.nativeElement.querySelector('.header__mobile-nav');
    expect(mobileNav).toBeNull();
  });

  it('should show mobile menu after hamburger click', async () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const hamburger = fixture.nativeElement.querySelector('.header__hamburger') as HTMLButtonElement;
    hamburger.click();
    fixture.detectChanges();
    await fixture.whenStable();
    const mobileNav = fixture.nativeElement.querySelector('.header__mobile-nav');
    expect(mobileNav).not.toBeNull();
  });

  it('should close mobile menu on second hamburger click', async () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const hamburger = fixture.nativeElement.querySelector('.header__hamburger') as HTMLButtonElement;
    hamburger.click();
    fixture.detectChanges();
    hamburger.click();
    fixture.detectChanges();
    await fixture.whenStable();
    const mobileNav = fixture.nativeElement.querySelector('.header__mobile-nav');
    expect(mobileNav).toBeNull();
  });

  it('should not have scrolled class initially', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const header = fixture.nativeElement.querySelector('.header') as HTMLElement;
    expect(header.classList.contains('header--scrolled')).toBe(false);
  });
});
