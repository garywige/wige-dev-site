import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.pattern(/^(.)+@(.)+\.(.)+$/)),
      subject: new FormControl('', Validators.minLength(2)),
      message: new FormControl('', Validators.minLength(10)),
    })
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
    // this appears to require a backend web API
    throw Error('not implemented')
  }
}
