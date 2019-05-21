import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CCardComponent } from "./components/c-card/c-card.component";
import { CTabsComponent } from "./components/c-tabs/c-tabs.component";
import { CTabComponent } from "./components/c-tab/c-tab.component";
import { UserService } from "./services/user.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, CCardComponent, CTabsComponent, CTabComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
