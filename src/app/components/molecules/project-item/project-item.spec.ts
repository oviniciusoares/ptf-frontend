import { TestBed } from '@angular/core/testing';
import { ProjectItemComponent } from './project-item';

const mockProject = {
  number: '01',
  name: 'Sistema de Gestão Empresarial',
  status: 'Produção',
  year: 2025,
  description: 'Desenvolvimento de ERP completo.',
  tags: ['React', 'Node.js', 'PostgreSQL'],
};

describe('ProjectItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectItemComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProjectItemComponent);
    Object.entries(mockProject).forEach(([key, value]) =>
      fixture.componentRef.setInput(key, value),
    );
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the project number', () => {
    const fixture = TestBed.createComponent(ProjectItemComponent);
    Object.entries(mockProject).forEach(([k, v]) => fixture.componentRef.setInput(k, v));
    fixture.detectChanges();
    const num = fixture.nativeElement.querySelector('.project-item__number') as HTMLElement;
    expect(num.textContent?.trim()).toBe('01');
  });

  it('should render the project name', () => {
    const fixture = TestBed.createComponent(ProjectItemComponent);
    Object.entries(mockProject).forEach(([k, v]) => fixture.componentRef.setInput(k, v));
    fixture.detectChanges();
    const name = fixture.nativeElement.querySelector('.project-item__name') as HTMLElement;
    expect(name.textContent?.trim()).toBe('Sistema de Gestão Empresarial');
  });

  it('should render status badge', () => {
    const fixture = TestBed.createComponent(ProjectItemComponent);
    Object.entries(mockProject).forEach(([k, v]) => fixture.componentRef.setInput(k, v));
    fixture.detectChanges();
    const badges = fixture.nativeElement.querySelectorAll('ptf-badge');
    expect(badges.length).toBeGreaterThan(0);
  });

  it('should render the correct number of technology tags', () => {
    const fixture = TestBed.createComponent(ProjectItemComponent);
    Object.entries(mockProject).forEach(([k, v]) => fixture.componentRef.setInput(k, v));
    fixture.detectChanges();
    const tagContainer = fixture.nativeElement.querySelector('.project-item__tags') as HTMLElement;
    const tags = tagContainer.querySelectorAll('ptf-badge');
    expect(tags.length).toBe(3);
  });

  it('should render empty tags list without errors', () => {
    const fixture = TestBed.createComponent(ProjectItemComponent);
    fixture.componentRef.setInput('number', '01');
    fixture.componentRef.setInput('name', 'Test');
    fixture.componentRef.setInput('status', 'Produção');
    fixture.componentRef.setInput('year', 2025);
    fixture.componentRef.setInput('description', 'Desc');
    fixture.componentRef.setInput('tags', []);
    fixture.detectChanges();
    const tagContainer = fixture.nativeElement.querySelector('.project-item__tags') as HTMLElement;
    expect(tagContainer.querySelectorAll('ptf-badge').length).toBe(0);
  });

  it('should render the year', () => {
    const fixture = TestBed.createComponent(ProjectItemComponent);
    Object.entries(mockProject).forEach(([k, v]) => fixture.componentRef.setInput(k, v));
    fixture.detectChanges();
    const year = fixture.nativeElement.querySelector('.project-item__year') as HTMLElement;
    expect(year.textContent?.trim()).toBe('2025');
  });
});
