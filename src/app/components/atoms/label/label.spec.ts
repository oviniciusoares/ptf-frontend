import { TestBed } from '@angular/core/testing';
import { LabelComponent } from './label';

describe('LabelComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LabelComponent);
    fixture.componentRef.setInput('text', 'STACK');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render text inside span', () => {
    const fixture = TestBed.createComponent(LabelComponent);
    fixture.componentRef.setInput('text', 'QUEM SOU');
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('.label') as HTMLElement;
    expect(span.textContent?.trim()).toBe('QUEM SOU');
  });

  it('should apply the label class', () => {
    const fixture = TestBed.createComponent(LabelComponent);
    fixture.componentRef.setInput('text', 'STACK');
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('.label');
    expect(span).not.toBeNull();
  });
});
