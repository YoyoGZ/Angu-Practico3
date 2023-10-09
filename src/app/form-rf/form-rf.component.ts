import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-rf',
  templateUrl: './form-rf.component.html',
  styleUrls: ['./form-rf.component.css']
})

export class FormRFComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      name: [''],
      address: [''],
      city: [''],
    });
}
get emailControl() {
  return (this.userForm.controls['email'])
}
get emailControlIsInvalid () {
  return (this.emailControl.invalid && this.emailControl.touched)
}

get passwordControl() {
  return (this.userForm.controls['password'])
}
get passwordControlIsInvalid () {
  return (this.passwordControl.touched)
}

onSubmit(): void {
      console.log(this.userForm.value)
  }
}