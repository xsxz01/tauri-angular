import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsTitleComponent } from './windows-title.component';

describe('WindowsTitleComponent', () => {
  let component: WindowsTitleComponent;
  let fixture: ComponentFixture<WindowsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowsTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
