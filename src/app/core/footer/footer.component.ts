import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService} from '../../shared/services/lang.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private lang:LangService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  public setLang(lang){
    this.lang.setLang(lang);
    this.translate.use(lang);
  }

}
