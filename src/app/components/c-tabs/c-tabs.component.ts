import { Component, OnInit } from "@angular/core";
import { CTabComponent } from "../c-tab/c-tab.component";
import { toBase64String } from "@angular/compiler/src/output/source_map";

@Component({
  selector: "c-tabs",
  templateUrl: "./c-tabs.component.html",
  styleUrls: ["./c-tabs.component.css"]
})
export class CTabsComponent {
  tabs: CTabComponent[] = [];
  constructor() {}

  add(tab: CTabComponent) {
    if (this.tabs.length === 0) tab.active = true;
    this.tabs.push(tab);
  }

  selectTab(tab: CTabComponent) {
    this.tabs.forEach(t => {
      t.active = false;
    });

    tab.active = true;
  }
}
