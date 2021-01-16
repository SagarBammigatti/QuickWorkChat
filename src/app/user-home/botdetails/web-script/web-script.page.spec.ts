import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebScriptPage } from './web-script.page';

describe('WebScriptPage', () => {
  let component: WebScriptPage;
  let fixture: ComponentFixture<WebScriptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebScriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebScriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
