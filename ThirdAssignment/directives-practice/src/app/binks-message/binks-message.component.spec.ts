import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinksMessageComponent } from './binks-message.component';

describe('BinksMessageComponent', () => {
  let component: BinksMessageComponent;
  let fixture: ComponentFixture<BinksMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinksMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinksMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
