import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LandingTemplateComponent } from './landing-template';

@Component({
  template: `
    <ptf-landing-template>
      <div slot="header">Header</div>
      <div slot="hero">Hero</div>
      <div slot="footer">Footer</div>
    </ptf-landing-template>
  `,
  imports: [LandingTemplateComponent],
})
class TestHostComponent {}

describe('LandingTemplateComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LandingTemplateComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should project content into named slots', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Header');
    expect(el.textContent).toContain('Hero');
    expect(el.textContent).toContain('Footer');
  });

  it('should render a main element', () => {
    const fixture = TestBed.createComponent(LandingTemplateComponent);
    fixture.detectChanges();
    const main = fixture.nativeElement.querySelector('main');
    expect(main).not.toBeNull();
  });
});
