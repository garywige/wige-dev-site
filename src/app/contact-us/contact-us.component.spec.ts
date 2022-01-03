import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material/material.module'
import { ContactUsComponent } from './contact-us.component'

describe('ContactUsComponent', () => {
  let component: ContactUsComponent
  let fixture: ComponentFixture<ContactUsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactUsComponent],
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
