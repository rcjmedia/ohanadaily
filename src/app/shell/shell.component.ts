import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Tab } from 'ionic-angular';
import { filter } from 'rxjs/operators';
import { findIndex } from 'lodash';
import { SettingsComponent } from '@app/settings/settings.component';
import { AboutComponent } from '@app/about/about.component';
import { HomeComponent } from '@app/home/home.component';
import { DashboardsComponent } from '@app/dashboards/dashboards.component';
import { RegisterComponent } from '@app/register/register.component';
import { PreferredComponent } from '@app/preferred/preferred.component';
import { CategoriesComponent } from '@app/categories/categories.component';
import { AddcontentComponent } from '@app/addcontent/addcontent.component';
import { ContentsComponent } from '@app/contents/contents.component';
import { TransactionsComponent } from '@app/transactions/transactions.component';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  tabs = [
    {
      component: HomeComponent,
      route: 'home',
      title: 'Home',
      icon: 'home'
    },
    {
      component: ContentsComponent,
      route: 'contents',
      title: 'Contents',
      icon: 'photos'
    },
    {
      component: AddcontentComponent,
      route: 'addcontent',
      title: 'Add Content',
      icon: 'aperture'
    },
    {
      component: CategoriesComponent,
      route: 'categories',
      title: 'Categories',
      icon: 'list-box'
    },
    {
      component: DashboardsComponent,
      route: 'dashboard',
      title: 'Dashboard',
      icon: 'options'
    },
    {
      component: PreferredComponent,
      route: 'preferred',
      title: 'Preferred Seller',
      icon: 'people'
    },
    {
      component: TransactionsComponent,
      route: 'transactions',
      title: 'Transactions',
      icon: 'cart'
    },
    {
      component: AboutComponent,
      route: 'about',
      title: 'About',
      icon: 'logo-angular'
    },
    {
      component: RegisterComponent,
      route: 'register',
      title: 'Register',
      icon: 'contact'
    },
    {
      component: SettingsComponent,
      route: 'settings',
      title: 'Settings',
      icon: 'cog'
    }
  ];
  selectedTabIndex: number;
  subscription: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.updateTab(this.activatedRoute);
    // Bind Ionic navigation to Angular router events
    this.subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.updateTab(this.activatedRoute));
  }
  onTabChange(selectedTab: Tab) {
    this.router.navigate([this.tabs[selectedTab.index].route]);
  }
  private updateTab(route: ActivatedRoute) {
    if (!route || !route.firstChild) {
      return;
    }
    // First component should always be IonicApp
    route = route.firstChild;
    if (route && route.component === ShellComponent && route.firstChild) {
      route = route.firstChild;
      // Fixed the bug#19420 : route.component is undefined if module is lazy
      // See: https://github.com/angular/angular/issues/19420
      while (route.firstChild) {
        route = route.firstChild;
      }
      // Fixed #19420 end
      this.selectedTabIndex = findIndex(this.tabs, {
        route: route.routeConfig.path
      });
    }
  }
}
