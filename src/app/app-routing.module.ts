import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ContactUsComponent } from './contact-us/contact-us.component'
import { DownloadsComponent } from './downloads/downloads.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'contact-us', component: ContactUsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
