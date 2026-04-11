import { TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have section id "contato"', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#contato')).not.toBeNull();
  });

  it('should render CONTATO label', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.label') as HTMLElement;
    expect(label.textContent?.trim()).toBe('CONTATO');
  });

  it('should render heading with "juntos" highlight', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const highlight = fixture.nativeElement.querySelector('.heading__highlight') as HTMLElement;
    expect(highlight.textContent?.trim()).toBe('juntos');
  });

  it('should render 3 contact cards', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('ptf-contact-card');
    expect(cards.length).toBe(3);
  });

  it('should render contact info badges', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const badges = fixture.nativeElement.querySelectorAll('ptf-badge');
    expect(badges.length).toBeGreaterThanOrEqual(3);
  });

  it('should render the Brasil badge', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Brasil');
  });
});
