import {Component, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {PcardComponent} from "./pcard.component";
import {SpinnerComponent} from "./spinner.component";
import {DataService} from "./DataService";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PcardComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  showSpinner= signal(true);
  remoteData: any[] | undefined;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getRemoteData().subscribe(data => {
      this.remoteData = data;
      this.showSpinner.set(false)
    });
  }
  protected readonly JSON = JSON;
  item: any;
  protected readonly Math = Math;
  protected readonly String = String;
}
