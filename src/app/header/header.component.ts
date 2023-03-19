import { Component, OnInit } from '@angular/core';
import { PortfolioDetailsService } from '../services/portfolio-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private portfolioService: PortfolioDetailsService) { }
  headerBannerDetails: any;
  ngOnInit(): void {
    this.portfolioService.getHeaderDetails().subscribe(
      (res: any) => {
        this.headerBannerDetails = res;
      }
    )
  }

}
