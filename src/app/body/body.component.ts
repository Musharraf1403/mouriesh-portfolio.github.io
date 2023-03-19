import { Component, OnInit } from '@angular/core';
import { PortfolioDetailsService } from '../services/portfolio-details.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private portfolioService: PortfolioDetailsService) { }
  bodyDetails:any[] = [];
  ngOnInit(): void {
    this.portfolioService.getBodyDetails().subscribe(
      (res:any)=>{
        this.bodyDetails = [...res];
      }
    )
  }

}
