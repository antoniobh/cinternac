import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector      : 'app-originsModal',
    templateUrl   : './originsModal.component.html',
    styleUrls    : ['./originsModal.component.css']
  })

export class OriginsModalComponent implements OnInit{
  @Input() Title: string;
  @Input() Identificator: string;
  @Input() Countries:object;

  constructor() { }

  ngOnInit() {
  }
}
