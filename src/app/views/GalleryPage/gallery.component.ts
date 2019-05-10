import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService} from './../../shared/services/lang.service';
import { images } from './galleryJson';
import $ from "jquery";
import * as jq from "jquery";


@Component({
  selector: 'app-Gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent{

  Pictures:any = images.Selected;
  currentPicture:string;


  constructor(
        public translate: TranslateService,
        private lang:LangService
    ) {
         translate.setDefaultLang(this.lang.getLang());
      }

      showPicture(Picture){
        this.currentPicture = Picture;
      }
}
