import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService} from './../../../shared/services/lang.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent{

  constructor(
        public translate: TranslateService,
        private lang:LangService
    ) {
         translate.setDefaultLang(this.lang.getLang());
      }
}
