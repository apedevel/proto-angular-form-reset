import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proto-angular-form-reset';

  data = {
    firstName: 'first',
    lastName: 'last',
    etc: null,
  };

  innerData = {
    address: 'address',
    postCode: 'postCode',
  };

  @ViewChild('form') private form: NgForm;
  @ViewChild('firstName') private firstName: NgModel;

  @ViewChild('form2') private form2: NgForm;
  @ViewChild('innerForm') private innerForm: NgForm;

  onSubmit(evt: Event) {
    if (this.form.valid) {
      evt.preventDefault();
    } else {
      console.log('submit');
      console.log(this.form);
      console.log(this.form.valid);
    }

    return false;
  }

  onReset(evt: Event) {
    console.log('reset');
    this.form.resetForm(this.data);
  }
}
