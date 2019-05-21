import { Component, OnInit, Input } from "@angular/core";
import { CTabsComponent } from "../c-tabs/c-tabs.component";

@Component({
  selector: "c-tab",
  templateUrl: "./c-tab.component.html",
  styleUrls: ["./c-tab.component.css"]
})
export class CTabComponent {
  @Input()
  src: string;
  @Input()
  description: string;
  @Input()
  value: string;
  active: boolean;

  constructor(tabs: CTabsComponent) {
    tabs.add(this);
  }
}
