import { TestBed } from '@angular/core/testing';
import { TechCardComponent } from './tech-card';

describe('TechCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechCardComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TechCardComponent);
    fixture.componentRef.setInput('name', 'Python');
    fixture.componentRef.setInput('category', 'BACKEND');
    fixture.componentRef.setInput('icon', 'code');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the technology name', () => {
    const fixture = TestBed.createComponent(TechCardComponent);
    fixture.componentRef.setInput('name', 'PostgreSQL');
    fixture.componentRef.setInput('category', 'DATABASE');
    fixture.componentRef.setInput('icon', 'database');
    fixture.detectChanges();
    const nameEl = fixture.nativeElement.querySelector('.tech-card__name') as HTMLElement;
    expect(nameEl.textContent?.trim()).toBe('PostgreSQL');
  });

  it('should render the category', () => {
    const fixture = TestBed.createComponent(TechCardComponent);
    fixture.componentRef.setInput('name', 'Docker');
    fixture.componentRef.setInput('category', 'DEVOPS');
    fixture.componentRef.setInput('icon', 'box');
    fixture.detectChanges();
    const categoryEl = fixture.nativeElement.querySelector('.tech-card__category') as HTMLElement;
    expect(categoryEl.textContent?.trim()).toBe('DEVOPS');
  });

  it('should render ptf-icon component', () => {
    const fixture = TestBed.createComponent(TechCardComponent);
    fixture.componentRef.setInput('name', 'Git');
    fixture.componentRef.setInput('category', 'TOOLS');
    fixture.componentRef.setInput('icon', 'git-branch');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('ptf-icon')).not.toBeNull();
  });
});
