import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contactForm',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', Validators.required]
    })
  }

}
