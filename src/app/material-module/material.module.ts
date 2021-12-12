import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'
import { NgModule } from '@angular/core'

let modules = [MatToolbarModule, MatIconModule, MatMenuModule]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
