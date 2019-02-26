import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService} from './../../shared/services/lang.service';

@Component({
  selector: 'app-Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor(
        public translate: TranslateService,
        private lang:LangService
    ) {
         translate.setDefaultLang(this.lang.getLang());
      }

      changeLang(lang){
        this.lang.setLang(lang);
        this.translate.use(this.lang.getLang());
      }
}
