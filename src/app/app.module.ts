import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { WineListingComponent } from './wine-listing/wine-listing.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { HeroOneComponent } from './hero-one/hero-one.component';
import { HeroTwoComponent } from './hero-two/hero-two.component';
import { ConsumedWineComponent } from './consumed-wine/consumed-wine.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FullHeaderComponent } from './full-header/full-header.component';
import { MainSectionComponent } from './main-section/main-section.component';

@NgModule({
  declarations: [
    AppComponent,
    WineListingComponent,
    LogoComponent,
    NavComponent,
    UserAvatarComponent,
    HeroContentComponent,
    HeroOneComponent,
    HeroTwoComponent,
    ConsumedWineComponent,
    HeroImageComponent,
    HeaderNavComponent,
    FullHeaderComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
