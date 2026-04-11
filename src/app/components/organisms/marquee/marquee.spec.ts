import { TestBed } from '@angular/core/testing';
import { MarqueeComponent } from './marquee';

describe('MarqueeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueeComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MarqueeComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render tech items', () => {
    const fixture = TestBed.createComponent(MarqueeComponent);
    fixture.detectChanges();
    const items = fixture.nativeElement.querySelectorAll('.marquee__item');
    expect(items.length).toBeGreaterThan(0);
  });

  it('should duplicate items for seamless loop', () => {
    const fixture = TestBed.createComponent(MarqueeComponent);
    fixture.detectChanges();
    const items = fixture.nativeElement.querySelectorAll('.marquee__item');
    const component = fixture.componentInstance as any;
    expect(items.length).toBe(component.techs.length * 2);
  });

  it('should render diamond separators', () => {
    const fixture = TestBed.createComponent(MarqueeComponent);
    fixture.detectChanges();
    const diamonds = fixture.nativeElement.querySelectorAll('.marquee__diamond');
    expect(diamonds.length).toBeGreaterThan(0);
  });

  it('should render CLOUD in the marquee', () => {
    const fixture = TestBed.createComponent(MarqueeComponent);
    fixture.detectChanges();
    const track = fixture.nativeElement.querySelector('.marquee__track') as HTMLElement;
    expect(track.textContent).toContain('CLOUD');
  });
});
