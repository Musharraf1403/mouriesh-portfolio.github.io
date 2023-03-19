import { Component } from '@angular/core';
import { PortfolioDetailsService } from './services/portfolio-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mouriesh_portfolio';
  constructor(private portfolioService: PortfolioDetailsService){}
  ngOnInit(){
    this.portfolioService.getFooterDetails().subscribe(
      (res:any)=>{
        console.log(res);
      }
    );
    this.portfolioService.getBodyDetails().subscribe(
      (res:any)=>{
        console.log(res);
      }
    )
  }
}
