import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateProdouctPage } from './create-prodouct.page';

describe('CreateProdouctPage', () => {
  let component: CreateProdouctPage;
  let fixture: ComponentFixture<CreateProdouctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProdouctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProdouctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
