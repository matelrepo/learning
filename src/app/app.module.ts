import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CssNavigationBarComponent } from './snippets/css/css-navigation-bar/css-navigation-bar.component';

import {HIGHLIGHT_OPTIONS, HighlightModule, provideHighlightOptions} from 'ngx-highlightjs';
import {provideRouter, RouterModule, Routes} from "@angular/router";
import { SummaryComponent } from './summary/summary.component';
import { JavaComponent } from './java/java.component';
import { AngularComponent } from './angular/angular.component';
import { CssComponent } from './css/css.component';
import { CenterItemComponent } from './snippets/css/center-item/center-item.component';
import { RouterComponent } from './snippets/angular/router/router.component';
import { FormComponent } from './snippets/angular/form/form.component';
import { MultiModuleComponent } from './snippets/angular/multi-module/multi-module.component';
import { FinalProjectComponent } from './snippets/angular/final-project/final-project.component';
import { ViewEncapsulationComponent } from './snippets/angular/view-encapsulation/view-encapsulation.component';
import { AngularStylingComponent } from './snippets/angular/angular-styling/angular-styling.component';


export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SummaryComponent },
  { path: 'java',
    children: [
      { path: '', component: JavaComponent },
      ]},
  { path: 'angular',
    children: [
      { path: '', component: AngularComponent },
      { path: 'router', component: RouterComponent },
      { path: 'form', component: FormComponent },
      { path: 'multi-module', component: MultiModuleComponent },
      { path: 'view-encapsulation', component: ViewEncapsulationComponent },
      { path: 'angular-styling', component: AngularStylingComponent },
      { path: 'final-project', component: FinalProjectComponent },

    ]},
  { path: 'css',
    children: [
      { path: '', component: CssComponent },
      { path: 'nav-bar', component: CssNavigationBarComponent },
      { path: 'center-item', component: CenterItemComponent },
  ]},
  {path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CssNavigationBarComponent,
    SummaryComponent,
    JavaComponent,
    AngularComponent,
    CssComponent,
    CenterItemComponent,
    RouterComponent,
    FormComponent,
    MultiModuleComponent,
    FinalProjectComponent,
    ViewEncapsulationComponent,
    AngularStylingComponent
  ],
  imports: [
    BrowserModule,
    HighlightModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})
  ],
  providers: [provideRouter(routes),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js')
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}
