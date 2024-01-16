import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pcard.component.html',
  styleUrl: './pcard.component.css'
})
export class PcardComponent {
  /** TODO: Spoof Data - remove in production **/
  pImage = "/assets/demo-image.webp";
  pPrice = "37,50";
  oldPrice ="45,50";
  brand = "bench";
  pName = "Streetwalker Pro"
  pDescription = "slip on and tie - Dieser Satz kein Verb. Das Pferd ist vorne hinten als höher. Je höher desto Platsch."
}
