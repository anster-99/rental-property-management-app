import { Component, computed, inject, input } from '@angular/core';
import { PropertyService } from '../shared/property.service';
import { OptionComponent } from '../entries/option/option.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [OptionComponent, RouterOutlet],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  propertyService = inject(PropertyService);
  category = input.required<'in' | 'out'>();
  propertyId = input.required<string>();
  options = computed(() => {
    if (this.category() === 'in') {
      return this.propertyService.getInOptions(this.propertyId());
    } else {
      return this.propertyService.getOutOptions(this.propertyId());
    }
  });
}
