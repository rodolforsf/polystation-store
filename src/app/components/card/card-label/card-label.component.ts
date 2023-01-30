import { Component, Input, OnInit } from '@angular/core';
// import { isConstructorDeclaration } from 'typescript';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css']
})
export class CardLabelComponent implements
  OnInit {

  @Input()
  gameLabel: string = ""

  Constructor() { }

  ngOnInit(): void {
  }
}


