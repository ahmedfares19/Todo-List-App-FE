import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Dir } from 'src/Core/enums/diraction';

import { Lang } from 'src/Core/enums/languages';
import { LangaugeService } from 'src/Core/services/langauge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // private langa
  constructor(public langaugeService:LangaugeService,public translate:TranslateService,private render:Renderer2){
    
  }
isLogin=true
 changeLang(){
   this.langaugeService.changeLang()   
 }
}
