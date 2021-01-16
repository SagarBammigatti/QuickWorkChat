import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IosScriptPage } from './ios-script.page';

describe('IosScriptPage', () => {
  let component: IosScriptPage;
  let fixture: ComponentFixture<IosScriptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosScriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IosScriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
