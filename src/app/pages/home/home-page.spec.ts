import { TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page';

describe('HomePageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the landing template', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('ptf-landing-template')).not.toBeNull();
  });

  it('should render the header', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('ptf-header')).not.toBeNull();
  });

  it('should render the hero section', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('ptf-hero')).not.toBeNull();
  });

  it('should render all main sections', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('ptf-marquee')).not.toBeNull();
    expect(el.querySelector('ptf-about')).not.toBeNull();
    expect(el.querySelector('ptf-tech-grid')).not.toBeNull();
    expect(el.querySelector('ptf-projects')).not.toBeNull();
    expect(el.querySelector('ptf-contact')).not.toBeNull();
    expect(el.querySelector('ptf-footer')).not.toBeNull();
  });
});
