import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pcard.component.html',
  styleUrl: './pcard.component.css'
})
export class PcardComponent {
  @Input() pImage = "";
  @Input() allPrices = new Array();
  pPrice = "";
  oldPrice = "";
  lowPval = 0;
  highPval = 0;
  pPercent = "";
  @Input() brand = "";
  @Input() pName = ""
  @Input() pDescription = ""
  @Input() pColors = new Array();
  pcClasses = new Array();
  ngOnChanges(): void {
    let isReduced = this.allPrices.length > 1;
    if (isReduced) {
      this.lowPval = Math.min(this.allPrices[0].value, this.allPrices[1].value);
      this.highPval = Math.max(this.allPrices[0].value, this.allPrices[1].value);
      this.pPercent = "- "+String(Math.floor( 100 - this.lowPval / this.highPval * 100))+"%";
    }

    this.pPrice = isReduced ? String(this.lowPval).replace('.',',') + ' €' : this.allPrices[0].formattedValue;
    this.oldPrice = isReduced ? String(this.highPval).replace('.',',') + ' €' : "";
    this.pDescription = this.pDescription.replace(/(<([^>]+)>)/gi, " ");

    /**
    this.pColors.map((item) => {
      return String(item.code).replace("filter-", ".product-color-");
    });
    **/

    for (var i = 0; i < this.pColors.length; i++) {
      this.pcClasses.push(String(this.pColors[i].code).replace("filter-", "product-color-"));
    }
  }
}
