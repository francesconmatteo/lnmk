import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonPanierPage } from './mon-panier.page';

describe('MonPanierPage', () => {
  let component: MonPanierPage;
  let fixture: ComponentFixture<MonPanierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonPanierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonPanierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
