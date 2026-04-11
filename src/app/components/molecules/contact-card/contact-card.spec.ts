import { TestBed } from '@angular/core/testing';
import { ContactCardComponent } from './contact-card';

describe('ContactCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCardComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ContactCardComponent);
    fixture.componentRef.setInput('icon', 'mail');
    fixture.componentRef.setInput('main', 'vinicius@email.com');
    fixture.componentRef.setInput('subtitle', 'E-mail profissional');
    fixture.componentRef.setInput('href', 'mailto:vinicius@email.com');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render main text', () => {
    const fixture = TestBed.createComponent(ContactCardComponent);
    fixture.componentRef.setInput('icon', 'mail');
    fixture.componentRef.setInput('main', 'vinicius@email.com');
    fixture.componentRef.setInput('subtitle', 'E-mail');
    fixture.componentRef.setInput('href', '#');
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.contact-card__main') as HTMLElement;
    expect(el.textContent?.trim()).toBe('vinicius@email.com');
  });

  it('should render subtitle', () => {
    const fixture = TestBed.createComponent(ContactCardComponent);
    fixture.componentRef.setInput('icon', 'linkedin');
    fixture.componentRef.setInput('main', 'linkedin.com/in/vinicius');
    fixture.componentRef.setInput('subtitle', 'Perfil LinkedIn');
    fixture.componentRef.setInput('href', '#');
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.contact-card__subtitle') as HTMLElement;
    expect(el.textContent?.trim()).toBe('Perfil LinkedIn');
  });

  it('should have a link with the correct href', () => {
    const fixture = TestBed.createComponent(ContactCardComponent);
    fixture.componentRef.setInput('icon', 'github');
    fixture.componentRef.setInput('main', 'github.com/user');
    fixture.componentRef.setInput('subtitle', 'GitHub');
    fixture.componentRef.setInput('href', 'https://github.com/user');
    fixture.detectChanges();
    const a = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(a.getAttribute('href')).toBe('https://github.com/user');
  });

  it('should open in new tab with rel noopener', () => {
    const fixture = TestBed.createComponent(ContactCardComponent);
    fixture.componentRef.setInput('icon', 'github');
    fixture.componentRef.setInput('main', 'github.com/user');
    fixture.componentRef.setInput('subtitle', 'GitHub');
    fixture.componentRef.setInput('href', 'https://github.com/user');
    fixture.detectChanges();
    const a = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(a.getAttribute('target')).toBe('_blank');
    expect(a.getAttribute('rel')).toContain('noopener');
  });

  it('should have accessible aria-label', () => {
    const fixture = TestBed.createComponent(ContactCardComponent);
    fixture.componentRef.setInput('icon', 'mail');
    fixture.componentRef.setInput('main', 'vinicius@email.com');
    fixture.componentRef.setInput('subtitle', 'E-mail profissional');
    fixture.componentRef.setInput('href', 'mailto:test');
    fixture.detectChanges();
    const a = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(a.getAttribute('aria-label')).toContain('E-mail profissional');
    expect(a.getAttribute('aria-label')).toContain('vinicius@email.com');
  });
});
