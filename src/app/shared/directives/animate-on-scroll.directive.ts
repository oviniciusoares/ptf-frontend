import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ptfAnimateOnScroll]',
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() animationClass = 'animate-on-scroll';
  @Input() threshold = 0.15;

  private observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.animationClass);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'is-visible');
          this.observer?.unobserve(this.el.nativeElement);
        }
      },
      { threshold: this.threshold },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
