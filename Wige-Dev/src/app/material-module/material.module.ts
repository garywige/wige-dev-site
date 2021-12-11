import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { NgModule } from '@angular/core'

let modules = [MatToolbarModule, MatIconModule]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
