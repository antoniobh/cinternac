import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-FullScreen',
  templateUrl: './fullScreen.component.html',
  styleUrls: ['./fullScreen.component.css']
})
export class FullScreenComponent implements OnInit{

    @Input() Picture: string;

    constructor() { }

    ngOnInit() {

    }
}
