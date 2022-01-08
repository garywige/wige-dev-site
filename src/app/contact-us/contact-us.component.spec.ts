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

    // Arrange
    component.form.patchValue({
      email: 'test',
      subject: 'test',
      message: 'test',
    })

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should clear form when onCancel() is called', () => {
    // Act
    component.onCancel()

    // Assert
    expect(component.form.get('email')?.value).toEqual('')
    expect(component.form.get('subject')?.value).toEqual('')
    expect(component.form.get('message')?.value).toEqual('')
  })
})
