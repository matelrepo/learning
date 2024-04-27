import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-module',
  templateUrl: './multi-module.component.html',
  styleUrl: './multi-module.component.css'
})
export class MultiModuleComponent {

  create_module=`ng g m admin --module=app.module`

}
