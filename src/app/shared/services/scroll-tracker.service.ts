import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollTrackerService {
  readonly activeSection = signal<string>('inicio');

  private observers = new Map<string, IntersectionObserver>();

  track(element: HTMLElement, sectionId: string): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.activeSection.set(sectionId);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    this.observers.set(sectionId, observer);
  }

  untrack(sectionId: string): void {
    this.observers.get(sectionId)?.disconnect();
    this.observers.delete(sectionId);
  }
}
