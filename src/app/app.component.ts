import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { AdItem, DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild("myContainer", { read: ViewContainerRef }) container!: ViewContainerRef;

  ads: AdItem[] = [];

  constructor(private resolver: ComponentFactoryResolver, private dataService: DataService){
    
  }
  ngOnInit(): void {
    this.ads = this.dataService.getAds();

    setTimeout(() => {
      this.loadComponents();
    }, 1000);
   
    
  }
  

  loadComponents() {
 
    let x = 0;
    setInterval(() => {
      this.container.clear();
      let ad = this.ads[x];
      const factory = this.resolver.resolveComponentFactory(ad.component)
      const component1Ref =  this.container.createComponent(factory);
      component1Ref.instance.data = ad.data;
      x = (x + 1) % this.ads.length;
    }, 1000);
  }

  createComponent() {

    // this.container.clear();
    
    const factory = this.resolver.resolveComponentFactory(HeroProfileComponent)
    const component1Ref =  this.container.createComponent(factory);
    component1Ref.instance.data = { name: 'Mayooran', bio: 'Something'  };

    const factory1 = this.resolver.resolveComponentFactory(HeroJobAdComponent)
    const component2Ref = this.container.createComponent(factory1);
    component2Ref.instance.data = { headline: 'Head Line', body: 'Body'  };

  }
}