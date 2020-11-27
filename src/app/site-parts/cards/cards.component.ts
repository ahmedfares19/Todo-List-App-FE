import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/Core/services/apis.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  data
  constructor(private api:ApisService) { 
    this.api.getTasks().subscribe(res => {
      this.data = res.data
      console.log(this.data);
    })
  }

  ngOnInit(): void {
  }

}
