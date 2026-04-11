import { TestBed } from '@angular/core/testing';
import { SectionHeaderComponent } from './section-header';

describe('SectionHeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeaderComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SectionHeaderComponent);
    fixture.componentRef.setInput('label', 'STACK');
    fixture.componentRef.setInput('title', 'Tecnologias');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the ptf-label and ptf-heading components', () => {
    const fixture = TestBed.createComponent(SectionHeaderComponent);
    fixture.componentRef.setInput('label', 'STACK');
    fixture.componentRef.setInput('title', 'Tecnologias');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('ptf-label')).not.toBeNull();
    expect(el.querySelector('ptf-heading')).not.toBeNull();
  });

  it('should pass label text to ptf-label', () => {
    const fixture = TestBed.createComponent(SectionHeaderComponent);
    fixture.componentRef.setInput('label', 'PORTFÓLIO');
    fixture.componentRef.setInput('title', 'Projetos');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.label')?.textContent?.trim()).toBe('PORTFÓLIO');
  });

  it('should pass title to ptf-heading', () => {
    const fixture = TestBed.createComponent(SectionHeaderComponent);
    fixture.componentRef.setInput('label', 'STACK');
    fixture.componentRef.setInput('title', 'Tecnologias');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.heading')?.textContent).toContain('Tecnologias');
  });
});
