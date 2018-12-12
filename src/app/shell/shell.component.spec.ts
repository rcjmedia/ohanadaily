import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import {
  AuthenticationService,
  CoreModule,
  MockAuthenticationService
} from '@app/core';

import { ShellComponent } from './shell.component';
import { AboutComponent } from '@app/about/about.component';
import { SettingsComponent } from '@app/settings/settings.component';
import { HomeComponent } from '@app/home/home.component';
import { HomeModule } from '@app/home/home.module';
import { AboutModule } from '@app/about/about.module';
import { AddcontentModule } from '@app/addcontent/addcontent.module';
import { CategoriesModule } from '@app/categories/categories.module';
import { ContentsModule } from '@app/contents/contents.module';
import { DashboardsModule } from '@app/dashboards/dashboards.module';
import { PreferredModule } from '@app/preferred/preferred.module';
import { RegisterModule } from '@app/register/register.module';
import { TransactionsModule } from '@app/transactions/transactions.module';
import { SettingsModule } from '@app/settings/settings.module';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        IonicModule.forRoot(ShellComponent),
        HomeModule,
        AboutModule,
        AddcontentModule,
        CategoriesModule,
        ContentsModule,
        DashboardsModule,
        PreferredModule,
        RegisterModule,
        TransactionsModule,
        SettingsModule,
        CoreModule
      ],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService }
      ],
      declarations: [ShellComponent]
    })
      .overrideComponent(ShellComponent, {
        set: {
          entryComponents: [HomeComponent, AboutComponent, SettingsComponent]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
