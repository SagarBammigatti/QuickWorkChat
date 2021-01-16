import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupportAgentsPage } from './support-agents.page';

describe('SupportAgentsPage', () => {
  let component: SupportAgentsPage;
  let fixture: ComponentFixture<SupportAgentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportAgentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupportAgentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
