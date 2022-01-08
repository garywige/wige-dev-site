import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { tap } from 'rxjs'
import { environment } from 'src/environments/environment'

import { IContactUsForm } from './contact-us-form'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  form: FormGroup
  output: string
  isSubmitted: boolean

  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      email: new FormControl('', Validators.pattern(/^(.)+@(.)+\.(.)+$/)),
      subject: new FormControl('', Validators.minLength(2)),
      message: new FormControl('', Validators.minLength(10)),
    })

    this.output = ''

    this.isSubmitted = false
  }

  ngOnInit(): void {}

  onCancel() {
    // clear form
    this.form.patchValue({
      email: '',
      subject: '',
      message: '',
    })
  }

  onSubmit() {
    const data = {
      email: this.form.get('email')?.value,
      subject: this.form.get('subject')?.value,
      message: this.form.get('message')?.value,
    } as IContactUsForm

    const url = environment.api_url + '/v1/contactus'
    this.http
      .post<IContactUsForm>(url, data)
      .pipe(
        tap((result) => {
          if (result.email) {
            // email was sent successfully
            this.output = `
          Message with subject '${result.message}' was sent. Have a nice day!
        `
          } else {
            // there was an error
            this.output = `
          Error:
          ${result.message}
        `
          }
        })
      )
      .subscribe()

    this.isSubmitted = true
  }
}
