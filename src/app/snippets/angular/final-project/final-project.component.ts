import { Component } from '@angular/core';

@Component({
  selector: 'app-final-project',
  templateUrl: './final-project.component.html',
  styleUrl: './final-project.component.css'
})
export class FinalProjectComponent {

  task = "The task is to be create a donut management application";
  title = "Final project application"
  subTitle = "1. Setup instructions"

  data_model =`data model

  {
  id: '3u98k1',
  name: 'Glazed Fudge',
  icon: 'glazed-fudge',
  price: 10,
  description: 'sticky perfection'
  }`

}
