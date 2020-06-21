import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserLayoutPage } from './user-layout.page';

describe('UserLayoutPage', () => {
  let component: UserLayoutPage;
  let fixture: ComponentFixture<UserLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
