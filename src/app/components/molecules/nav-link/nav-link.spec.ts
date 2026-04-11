import { TestBed } from '@angular/core/testing';
import { NavLinkComponent } from './nav-link';

describe('NavLinkComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLinkComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavLinkComponent);
    fixture.componentRef.setInput('label', 'Sobre');
    fixture.componentRef.setInput('href', '#sobre');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render label text', () => {
    const fixture = TestBed.createComponent(NavLinkComponent);
    fixture.componentRef.setInput('label', 'Projetos');
    fixture.componentRef.setInput('href', '#projetos');
    fixture.detectChanges();
    const a = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(a.textContent?.trim()).toBe('Projetos');
  });

  it('should set the href attribute', () => {
    const fixture = TestBed.createComponent(NavLinkComponent);
    fixture.componentRef.setInput('label', 'Contato');
    fixture.componentRef.setInput('href', '#contato');
    fixture.detectChanges();
    const a = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(a.getAttribute('href')).toBe('#contato');
  });

  it('should not have active class by default', () => {
    const fixture = TestBed.createComponent(NavLinkComponent);
    fixture.componentRef.setInput('label', 'Sobre');
    fixture.componentRef.setInput('href', '#sobre');
    fixture.detectChanges();
    const a = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(a.classList.contains('nav-link--active')).toBe(false);
  });

  it('should have active class when active is true', () => {
    const fixture = TestBed.createComponent(NavLinkComponent);
    fixture.componentRef.setInput('label', 'Sobre');
    fixture.componentRef.setInput('href', '#sobre');
    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();
    const a = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(a.classList.contains('nav-link--active')).toBe(true);
  });

  it('should set aria-current="page" when active', () => {
    const fixture = TestBed.createComponent(NavLinkComponent);
    fixture.componentRef.setInput('label', 'Sobre');
    fixture.componentRef.setInput('href', '#sobre');
    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();
    const a = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(a.getAttribute('aria-current')).toBe('page');
  });

  it('should not set aria-current when not active', () => {
    const fixture = TestBed.createComponent(NavLinkComponent);
    fixture.componentRef.setInput('label', 'Sobre');
    fixture.componentRef.setInput('href', '#sobre');
    fixture.componentRef.setInput('active', false);
    fixture.detectChanges();
    const a = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(a.getAttribute('aria-current')).toBeNull();
  });
});
