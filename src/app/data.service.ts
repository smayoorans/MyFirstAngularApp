import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('https://api.github.com/users');
  }

  getAds() {
    return [
      new AdItem(
        HeroProfileComponent,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new AdItem(
        HeroProfileComponent,
        { name: 'Dr. IQ', bio: 'Smart as they come' }
      ),
      new AdItem(
        HeroJobAdComponent,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new AdItem(
        HeroJobAdComponent,
        { headline: 'Openings in all departments', body: 'Apply today' }
      )
    ];
  }

}

export class AdItem {
  constructor(public component: Type<any>, public data: any) {}
}
