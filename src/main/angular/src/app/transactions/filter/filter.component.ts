import {
  Component,
  OnInit,
  inject,
  signal,
  computed,
  DestroyRef,
} from '@angular/core';
import { TransactionService } from '../../shared/transactions.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PropertyService } from '../../shared/property.service';
import { Option, Property, TransactionFilter } from '../../shared/data.model';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit {
  private propertyService = inject(PropertyService);
  private transactionService = inject(TransactionService);
  private destroyRef = inject(DestroyRef);

  form = new FormGroup({
    property: new FormControl(''),
    category: new FormControl(''),
    option: new FormControl(''),
    dateStart: new FormControl(''),
    dateEnd: new FormControl(''),
    paymentForm: new FormControl(''),
  });

  properties: Property[] = [];
  categories = ['in', 'out'];

  selectedProperty = signal<string | undefined>(undefined);
  selectedCategory = signal<string | undefined>(undefined);
  options = computed<Option[] | undefined>(() => {
    if (this.selectedCategory() === 'in') {
      return this.propertyService.getInOptions(this.selectedProperty()!);
    } else if (this.selectedCategory() === 'out') {
      return this.propertyService.getOutOptions(this.selectedProperty()!);
    } else {
      return undefined;
    }
  });

  ngOnInit(): void {
    this.properties = this.propertyService.getAll();
  }

  onPropertyChange() {
    this.selectedProperty.set(this.form.controls.property.value!);
    this.selectedCategory.set(undefined);
  }

  onCategoryChange() {
    this.selectedCategory.set(this.form.controls.category.value!);
  }

  onSubmit() {
    const filter: TransactionFilter = {
      propertyId: this.form.controls.property.value!,
      category: this.form.controls.category.value!,
      optionId: this.form.controls.option.value!,
      dateStart: this.form.controls.dateStart.value!,
      dateEnd: this.form.controls.dateEnd.value!,
      paymentForm: this.form.controls.paymentForm.value!,
    };

    const subscription = this.transactionService
      .filterTransactions(filter)
      .subscribe({
        error: (err) => {
          console.error('Failed to apply filter:', err);
        },
      });
    this.destroyRef.onDestroy(() => subscription?.unsubscribe());
  }

  resetFilter() {
    this.form.controls.property.setValue('');
    this.form.controls.category.setValue('');
    this.form.controls.option.setValue('');
    this.form.controls.dateStart.setValue('');
    this.form.controls.dateEnd.setValue('');
    this.selectedProperty.set(undefined);
    this.selectedCategory.set(undefined);
    this.form.controls.paymentForm.setValue('');
    this.transactionService.loadAllTransactions();
  }
}
