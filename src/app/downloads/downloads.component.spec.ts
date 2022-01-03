import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material/material.module'
import { DownloadsComponent } from './downloads.component'

describe('DownloadsComponent', () => {
  let component: DownloadsComponent
  let fixture: ComponentFixture<DownloadsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadsComponent],
      imports: [MaterialModule, NoopAnimationsModule, FormsModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
