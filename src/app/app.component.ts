import { Component, OnInit } from "@angular/core";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  user: any;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
      .fetchUser()
      .subscribe(
        data => (this.user = this.mapToUser(data.results[0])),
        err => console.error(err)
      );
  }

  mapToUser(user: any): User {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      dob: this.formatDate(new Date(user.dob.date)),
      cell: user.cell,
      address: `${user.location.postcode} - ${user.location.street}`,
      password: user.login.password,
      picture: user.picture.large
    };
  }

  formatDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}
