import {Injectable} from '@angular/core';

@Injectable(){}

  export class LangService{
    lang:string = 'es';

    public getLang(){
      return this.lang;
    }
    public setLang(lang){
      this.lang = lang;
    }
  }
