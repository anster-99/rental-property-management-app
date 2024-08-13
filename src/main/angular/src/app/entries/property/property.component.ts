import { Component, Input } from '@angular/core';
import { Property } from '../../shared/data.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-property',
  standalone: true,
  templateUrl: './property.component.html',
  styleUrl: './property.component.css',
  imports: [RouterLink, RouterLinkActive],
})
export class PropertyComponent {
  @Input({ required: true }) property!: Property;
}
