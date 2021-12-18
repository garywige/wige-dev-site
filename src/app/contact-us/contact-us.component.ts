import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  form: FormGroup
  output: string

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.pattern(/^(.)+@(.)+\.(.)+$/)),
      subject: new FormControl('', Validators.minLength(2)),
      message: new FormControl('', Validators.minLength(10)),
    })

    this.output = ''
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
    throw Error('not implemented')
    /*
    this.mailService.setApiKey(SendGrid.apiKey)

    const message = {
      to: 'gary@wige-dev.com',
      from: 'gary@wige-dev.com',
      subject: this.form.get('subject')?.value,
      text: `${this.form.get('email')?.value}: ${this.form.get('message')?.value}`,
    }

    this.mailService.send(message).then(() => {
      // need to redirect user to thank you page
      // OR i can just display a message at the bottom and reset the form?
      this.form.reset()
      this.output = 'Thank you! Your message has been sent!'
    })
    */
  }
}
