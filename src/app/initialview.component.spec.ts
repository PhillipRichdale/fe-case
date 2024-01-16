import { TestBed } from '@angular/core/testing';
import { InitialviewComponent } from './initialview.component';

describe('InitialviewComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialviewComponent],
    }).compileComponents();
  });

  it('should create the initialview', () => {
    const fixture = TestBed.createComponent(InitialviewComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'fe-case' title`, () => {
    const fixture = TestBed.createComponent(InitialviewComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fe-case');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(InitialviewComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, fe-case');
  });
});
