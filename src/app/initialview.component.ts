import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'initialview',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './initialview.component.html',
  styleUrl: './initialview.component.css'
})
export class InitialviewComponent {
  title = 'fe-case (initialview component)';
}
