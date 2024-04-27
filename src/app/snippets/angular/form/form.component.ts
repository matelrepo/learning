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

  formRadio=`
  <div class="donut-form-radios">
    <p class="donut-form-radios-label">Promo:</p>
    <label>
      <input type="radio" name="promo" [value]="undefined" ngModel/>
      <span>None</span>
    </label>
    <label>
      <input type="radio" name="promo" value="new" ngModel/>
      <span>New</span>
    </label>
    <label>
      <input type="radio" name="promo" value="limited" ngModel/>
      <span>Limited</span>
    </label>
  </div>`

  formSelect=`    <label>
      <span>Icon</span>
      <select
        name="icon"
        class="input input--select" ngModel>
        <option *ngFor="let icon of icons" [ngValue]="icon"></option>
      </select>
    </label>`

  formTextArea =`    <label>
      <span>Description</span>
      <textarea
        name="description"
        class="input input--textarea"
        ngModel>
      </textarea>
    </label>`



}
