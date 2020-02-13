import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesOffresPage } from './mes-offres.page';

describe('MesOffresPage', () => {
  let component: MesOffresPage;
  let fixture: ComponentFixture<MesOffresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesOffresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesOffresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
