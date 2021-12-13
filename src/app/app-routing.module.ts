import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DownloadsComponent } from './downloads/downloads.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'downloads', component: DownloadsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
