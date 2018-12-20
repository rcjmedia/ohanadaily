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
import { AddcontentComponent } from '@app/addcontent/addcontent.component';
import { CategoriesComponent } from '@app/categories/categories.component';
import { ContentsComponent } from '@app/contents/contents.component';
import { DashboardsComponent } from '@app/dashboards/dashboards.component';
import { PreferredComponent } from '@app/preferred/preferred.component';
import { RegisterComponent } from '@app/register/register.component';
import { TransactionsComponent } from '@app/transactions/transactions.component';
import { BidsComponent } from '@app/bids/bids.component';
import { DetailsComponent } from '@app/details/details.component';

import { HomeModule } from '@app/home/home.module';
import { AboutModule } from '@app/about/about.module';
import { AddcontentModule } from '@app/addcontent/addcontent.module';
import { CategoriesModule } from '@app/categories/categories.module';
import { ContentsModule } from '@app/contents/contents.module';
import { DashboardsModule } from '@app/dashboards/dashboards.module';
import { PreferredModule } from '@app/preferred/preferred.module';
import { RegisterModule } from '@app/register/register.module';
import { TransactionsModule } from '@app/transactions/transactions.module';
import { BidsModule } from '@app/bids/bids.module';
import { DetailsModule } from '@app/details/details.module';
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
        BidsModule,
        DetailsModule,
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
          entryComponents: [
            HomeComponent,
            AboutComponent,
            SettingsComponent,
            AddcontentComponent,
            CategoriesComponent,
            ContentsComponent,
            DashboardsComponent,
            PreferredComponent,
            RegisterComponent,
            TransactionsComponent,
            BidsComponent,
            DetailsModule
          ]
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
