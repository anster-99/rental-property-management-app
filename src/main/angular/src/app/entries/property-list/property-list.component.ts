import { Component, inject } from '@angular/core';
import { PropertyService } from '../../shared/property.service';
import { PropertyComponent } from '../property/property.component';

@Component({
  selector: 'app-property-list',
  standalone: true,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css',
  imports: [PropertyComponent],
})
export class PropertyListComponent {
  propertyService = inject(PropertyService);

  getProperties() {
    return this.propertyService.getAll();
  }
}
