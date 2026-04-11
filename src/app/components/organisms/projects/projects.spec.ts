import { TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects';

describe('ProjectsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have section id "projetos"', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#projetos')).not.toBeNull();
  });

  it('should render the PORTFÓLIO label', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.label') as HTMLElement;
    expect(label.textContent?.trim()).toBe('PORTFÓLIO');
  });

  it('should render 3 project items', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const items = fixture.nativeElement.querySelectorAll('ptf-project-item');
    expect(items.length).toBe(3);
  });

  it('should render the project count text', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const count = fixture.nativeElement.querySelector('.projects__count') as HTMLElement;
    expect(count.textContent).toContain('3 projetos selecionados');
  });
});
