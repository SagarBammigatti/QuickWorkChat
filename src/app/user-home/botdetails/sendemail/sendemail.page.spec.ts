import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendemailPage } from './sendemail.page';

describe('SendemailPage', () => {
  let component: SendemailPage;
  let fixture: ComponentFixture<SendemailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendemailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendemailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
