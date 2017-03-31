import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
        
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUsertoken'));
        
    }    

    ngOnInit() {
        
    }

}
