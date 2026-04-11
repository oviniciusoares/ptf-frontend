import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AnimateOnScrollDirective } from './animate-on-scroll.directive';

@Component({
  template: `<div ptfAnimateOnScroll></div>`,
  imports: [AnimateOnScrollDirective],
})
class TestHostComponent {}

describe('AnimateOnScrollDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
  });

  it('should add the animation class on init', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('div') as HTMLElement;
    expect(el.classList.contains('animate-on-scroll')).toBe(true);
  });

  it('should not have is-visible class before intersection', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('div') as HTMLElement;
    expect(el.classList.contains('is-visible')).toBe(false);
  });

  it('should use custom animationClass when provided', () => {
    @Component({
      template: `<div ptfAnimateOnScroll animationClass="animate-fade-in"></div>`,
      imports: [AnimateOnScrollDirective],
    })
    class CustomClassHostComponent {}

    TestBed.overrideComponent(CustomClassHostComponent, {});
    const fixture = TestBed.createComponent(CustomClassHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('div') as HTMLElement;
    expect(el.classList.contains('animate-fade-in')).toBe(true);
  });
});
