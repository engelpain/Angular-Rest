import { Component, OnInit } from '@angular/core';

// import Users Query Service
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Rest';

  // add an array to fill with data from query
  users: any[] = [];

  constructor(protected userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
