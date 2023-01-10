import { Component } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})
export class UserProfileComponentComponent {
  user: User = new User("SANGO","DESIRE","https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png")

  getFullName(){
    return this.user.firstname+" "+this.user.lastname
  }
}
