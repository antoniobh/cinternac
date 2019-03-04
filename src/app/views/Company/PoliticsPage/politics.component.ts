import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService} from './../../../shared/services/lang.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.scss']
})
export class PoliticsComponent{

  constructor(
        public translate: TranslateService,
        private lang:LangService
    ) {
         translate.setDefaultLang(this.lang.getLang());
      }
}
