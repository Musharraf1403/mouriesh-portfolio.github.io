import { Component, OnInit } from '@angular/core';
import { PortfolioDetailsService } from '../services/portfolio-details.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private portfolioService: PortfolioDetailsService) { }
  socialMediaUrls:any[] = [];
  ngOnInit(): void {
    this.portfolioService.getFooterDetails().subscribe(
      (res:any)=>{
        this.socialMediaUrls = [...res];
        for(let i=0;i<this.socialMediaUrls.length;i++){
          switch(this.socialMediaUrls[i].url_name){
            case 'Facebook':
              this.socialMediaUrls[i]['iconClass']='fa-brands fa-facebook-f';
              break;
            case 'Instagram':
              this.socialMediaUrls[i]['iconClass']='fa-brands fa-instagram';
              break;
            case 'Youtube':
              this.socialMediaUrls[i]['iconClass']='fa-brands fa-youtube';
              break;
            case 'Twitter':
              this.socialMediaUrls[i]['iconClass']='fa-brands fa-twitter';
              break;
            case 'LinkedIn':
              this.socialMediaUrls[i]['iconClass']='fa-brands fa-linkedin-in';
              break;
          }
        }
      }
    )
  }

}
