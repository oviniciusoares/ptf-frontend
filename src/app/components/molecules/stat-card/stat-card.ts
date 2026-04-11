import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ptf-stat-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCardComponent implements OnInit, OnDestroy {
  @Input({ required: true }) value!: string;
  @Input({ required: true }) description!: string;

  private observer: IntersectionObserver | null = null;
  private cdr = inject(ChangeDetectorRef);
  protected animated = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.animated) {
          this.animated = true;
          this.cdr.markForCheck();
          this.observer?.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.3 },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
