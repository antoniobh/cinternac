import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService} from './../../shared/services/lang.service';

@Component({
  selector: 'app-Contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  constructor(
        public translate: TranslateService,
        private lang:LangService
    ) {
         translate.setDefaultLang(this.lang.getLang());
      }
}
