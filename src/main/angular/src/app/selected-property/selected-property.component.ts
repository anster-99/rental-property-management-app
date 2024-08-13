import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-selected-property',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './selected-property.component.html',
  styleUrl: './selected-property.component.css',
})
export class SelectedPropertyComponent {
  propertyId = input.required<string>();
}
