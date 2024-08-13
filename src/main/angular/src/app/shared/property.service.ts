import { Injectable } from '@angular/core';
import { PROPERTIES } from './properties';
import { Property } from './data.model';

@Injectable({ providedIn: 'root' })
export class PropertyService {
  private properties: Property[] = PROPERTIES;

  getPropertyById(propertyId: string) {
    return this.properties.find((r) => r.id === propertyId);
  }

  getInOptions(propertyId: string) {
    return this.properties.find((r) => r.id === propertyId)?.in;
  }

  getOutOptions(propertyId: string) {
    return this.properties.find((r) => r.id === propertyId)?.out;
  }

  getOption(propertyId: string, optionId: string) {
    var optionName = this.properties
      .find((r) => r.id === propertyId)
      ?.in.find((o) => o.id === optionId);
    if (!optionName) {
      optionName = this.properties
        .find((r) => r.id === propertyId)
        ?.out.find((o) => o.id === optionId);
    }
    return optionName;
  }

  getAll() {
    return this.properties;
  }
}
