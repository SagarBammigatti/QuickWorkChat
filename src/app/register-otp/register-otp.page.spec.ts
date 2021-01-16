import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterOtpPage } from './register-otp.page';

describe('RegisterOtpPage', () => {
  let component: RegisterOtpPage;
  let fixture: ComponentFixture<RegisterOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
