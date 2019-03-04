import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService} from './../../shared/services/lang.service';

@Component({
  selector: 'app-Gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent{

  constructor(
        public translate: TranslateService,
        private lang:LangService
    ) {
         translate.setDefaultLang(this.lang.getLang());
      }
}
