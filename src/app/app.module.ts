import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DownloadsComponent } from './downloads/downloads.component'
import { HomeComponent } from './home/home.component'
import { MaterialModule } from './material/material.module';
import { ContactUsComponent } from './contact-us/contact-us.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, DownloadsComponent, ContactUsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
