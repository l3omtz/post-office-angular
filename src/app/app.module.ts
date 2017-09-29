import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { PassComponent } from './pass/pass.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: AppComponent // Add user component later
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'pass',
    component: AppComponent // Add all passes by user  later
  },
  {
  path: 'user/:name/pass/:id',
  component: PassComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    PassComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
