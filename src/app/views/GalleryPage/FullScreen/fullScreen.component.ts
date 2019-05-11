import { Component, OnInit, Input } from '@angular/core';
import { images } from './../galleryJson';

@Component({
  selector: 'app-FullScreen',
  templateUrl: './fullScreen.component.html',
  styleUrls: ['./fullScreen.component.css']
})
export class FullScreenComponent implements OnInit{

    @Input() Picture: string;
    Pictures:any = images.Selected;

    constructor() { }

    ngOnInit() {

    }
}
