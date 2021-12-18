import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      email: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl(''),
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
}
