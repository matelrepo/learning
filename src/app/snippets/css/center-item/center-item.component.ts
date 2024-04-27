import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-center-item',
  templateUrl: './center-item.component.html',
  styleUrl: './center-item.component.css'
})
export class CenterItemComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  parent= `.parent {
  position: relative;
}`;

  child =`.child {
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`;

  parent_flex= `.parent{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width:100px;
  height:100px;
}`;

  child_flex =`.child{
  background-color: red;
  width:10px;
  height:10px;
}`;


}
