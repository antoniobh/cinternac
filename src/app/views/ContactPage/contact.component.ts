import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService} from './../../shared/services/lang.service';
// var email 	= require("/emailjs/email");

import * as email from 'emailjs/email'

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

    sendMail(){
      // var server 	= email.server.connect({
      //    user:    "webform@cargainternacional.cr",
      //    password:"&ng21GlK9wua",
      //    host:    "wo30.wiroos.host",
      //    ssl:     true
      // });
      //
      // // send the message and get a callback with an error or details of the message that was sent
      // server.send({
      //    text:    "i hope this works",
      //    from:    "you <username@your-email.com>",
      //    to:      "someone <someone@your-email.com>, another <another@your-email.com>",
      //    cc:      "else <else@your-email.com>",
      //    subject: "testing emailjs"
      // }, function(err, message) { console.log(err || message); });
    }
}
