import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Dir } from '../enums/diraction';
import { Lang } from '../enums/languages';


@Injectable({
  providedIn: 'root'
})
export class LangaugeService {

  constructor(public translate:TranslateService){
    translate.setDefaultLang(this.translate.currentLang);
    translate.use(this.translate.currentLang);
  }
  currentDir:string=localStorage.getItem('Dir') || Dir.rtl;
  currentLang:string = localStorage.getItem('Lang') || Lang.ar;
  private setLang(lang:Lang){
    if(lang == Lang.ar) {
      this.currentDir = Dir.rtl;
      this.currentLang = Lang.ar
    } else {
      this.currentDir = Dir.ltr;
      this.currentLang = Lang.en;
    }
    localStorage.setItem('Lang',this.currentLang.toString());
    localStorage.setItem('Dir',this.currentDir.toString());
  }

  public changeLang(){
    if(this.currentLang == Lang.ar) {
      this.currentDir = Dir.ltr;
      this.currentLang = Lang.en
      this.translate.use(Lang.en)
      this.setLang(Lang.en)
    } else {
      this.currentDir = Dir.rtl;
      this.currentLang = Lang.ar;
      this.translate.use(Lang.ar)
      this.setLang(Lang.ar)
    }
  
  }
}
