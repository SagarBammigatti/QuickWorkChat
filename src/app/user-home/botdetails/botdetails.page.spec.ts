import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BotdetailsPage } from './botdetails.page';

describe('BotdetailsPage', () => {
  let component: BotdetailsPage;
  let fixture: ComponentFixture<BotdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BotdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
