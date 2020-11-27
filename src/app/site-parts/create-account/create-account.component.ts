import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/Core/services/apis.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private api:ApisService){
    // console.log(this.api.text);
   }

  ngOnInit(): void {
  }

}
