import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  title ="Create a form"
  task ="The task is to be able to create a form with validation"

  donutSingle = `ng g c admin/containers/donut-single`;
  donutForm = `ng g c admin/components/donut-form`;
  formContent =`<form class="donut-form" #form="ngForm">
</form>`
  formInput =`<form class="donut-form" #form="ngForm">
    <label>
      <span>Name</span>
      <input
        type="text"
        name="name"
        class="input"
        ngModel
      />
    </label>
  </form>`



}
