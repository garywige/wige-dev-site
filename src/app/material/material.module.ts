import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'

let modules = [MatToolbarModule, MatIconModule, MatMenuModule, MatCardModule]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
