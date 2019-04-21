import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService} from './../../shared/services/lang.service';
import { images } from './galleryJson';

@Component({
  selector: 'app-Gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent{

  Pictures:any = images.id;

  console.log(images.id)

  constructor(
        public translate: TranslateService,
        private lang:LangService
    ) {
         translate.setDefaultLang(this.lang.getLang());
      }

      showPicture(Picture){
        console.log(Picture)
      }
}
