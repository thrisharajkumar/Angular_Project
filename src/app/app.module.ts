import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCourseComponent } from './angular-course/angular-course.component';
import { CareerComponent } from './career/career.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ReactCourseComponent } from './react-course/react-course.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularCourseComponent,
    CareerComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    ReactCourseComponent,
    SearchComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
