import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndingSoon } from './ending-soon';

describe('EndingSoon', () => {
  let component: EndingSoon;
  let fixture: ComponentFixture<EndingSoon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndingSoon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndingSoon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
