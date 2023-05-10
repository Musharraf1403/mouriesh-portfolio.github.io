import { Component, ElementRef, HostListener, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { PortfolioDetailsService } from './services/portfolio-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mouriesh_portfolio';
  headerBannerDetails: any;
  socialMediaUrls: any[] = [];
  bodyDetails: any;
  screenWidth: any;
  isNavOpen: boolean = false;
  isFormOpen: boolean = false;
  workTitles:any[] = [];

  constructor(private portfolioService: PortfolioDetailsService) { }

  @ViewChildren('cards') private cards: QueryList<ViewContainerRef>;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    if (this.screenWidth > 425)
      this.isNavOpen = false;
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.portfolioService.getHeaderDetails().subscribe(
      (res: any) => {
        this.headerBannerDetails = res;
      }
    )
    this.portfolioService.getFooterDetails().subscribe(
      (res: any) => {
        this.socialMediaUrls = [...res];
        for (let i = 0; i < this.socialMediaUrls.length; i++) {
          switch (this.socialMediaUrls[i].url_name) {
            case 'Facebook':
              this.socialMediaUrls[i]['iconClass'] = 'fa-brands fa-facebook-f';
              break;
            case 'Instagram':
              this.socialMediaUrls[i]['iconClass'] = 'fa-brands fa-instagram';
              break;
            case 'Youtube':
              this.socialMediaUrls[i]['iconClass'] = 'fa-brands fa-youtube';
              break;
            case 'Twitter':
              this.socialMediaUrls[i]['iconClass'] = 'fa-brands fa-twitter';
              break;
            case 'LinkedIn':
              this.socialMediaUrls[i]['iconClass'] = 'fa-brands fa-linkedin-in';
              break;
          }
        }
      }
    )
    this.portfolioService.getBodyDetails().subscribe(
      (res: any) => {
        this.bodyDetails = [...res];
        if(this.bodyDetails.length > 3) {
          for(let i=0;i<3;i++) {
            this.workTitles.push({title: this.bodyDetails[i].title, id: this.bodyDetails[i].title.toLowerCase().replace(" ", "")});
          }
        } else {
          for(let i=0;i<this.bodyDetails.length;i++) {
            this.workTitles.push({title: this.bodyDetails[i].title, id: this.bodyDetails[i].title.toLowerCase().replace(" ", "")});
          }
        }
      }
    )
  }

  onClickNavIcon() {
    this.isNavOpen = !this.isNavOpen;
  }

  onClickNavLink() {
    this.isNavOpen = false;
  }

  onScrollLeft(index) {
    this.cards['_results'][index].nativeElement.scrollTo({ left: (this.cards['_results'][index].nativeElement.scrollLeft - 280), behavior: 'smooth' });
  }

  onScrollRight(index) {
    this.cards['_results'][index].nativeElement.scrollTo({ left: (this.cards['_results'][index].nativeElement.scrollLeft + 280), behavior: 'smooth' });
  }

  onToggleForm(){
    console.log(this.isFormOpen)
    this.isFormOpen = !this.isFormOpen;
  }

  onClickCard(card) {
    console.log(card);
    window.open(card.card_url)
  }
}
