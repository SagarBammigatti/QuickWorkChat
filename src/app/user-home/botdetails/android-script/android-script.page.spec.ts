import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AndroidScriptPage } from './android-script.page';

describe('AndroidScriptPage', () => {
  let component: AndroidScriptPage;
  let fixture: ComponentFixture<AndroidScriptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidScriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AndroidScriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
