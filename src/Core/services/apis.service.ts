import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  
  private getTasksUrl = "https://run.mocky.io/v3/20835196-efcc-4978-a5fd-adeecb45ec40"
  constructor(private http: HttpClient) { }

  getTasks():Observable<any>{
    return this.http.get(this.getTasksUrl)
  }
}
