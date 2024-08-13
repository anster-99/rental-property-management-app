import {
  Component,
  DestroyRef,
  ViewChild,
  computed,
  inject,
  input,
} from '@angular/core';
import { TransactionService } from '../shared/transactions.service';
import { FormsModule, NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import { PropertyService } from '../shared/property.service';
import { CanDeactivateFn, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-input-form',
  standalone: true,
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
  imports: [FormsModule, RouterLink],
})
export class InputFormComponent {
  private propertyService = inject(PropertyService);
  private transactionService = inject(TransactionService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  propertyId = input.required<string>();
  category = input.required<'in' | 'out'>();
  optionId = input.required<string>();

  optionName = computed(
    () =>
      this.propertyService.getOption(this.propertyId(), this.optionId())?.name
  );
  propertyName = computed(
    () => this.propertyService.getPropertyById(this.propertyId())?.name
  );

  @ViewChild('form') form?: NgForm;
  submitted = false;
  enteredAmount = '0';
  enteredDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  paymentForm = '';

  onSubmit(commentInput: string) {
    const subscription = this.transactionService
      .addTransaction({
        amount: +this.enteredAmount,
        date: this.enteredDate,
        propertyId: this.propertyId(),
        category: this.category()!,
        optionId: this.optionId()!,
        comment: commentInput,
        paymentForm: this.paymentForm,
      })
      .subscribe({
        next: () => {
          this.submitted = true;
          this.form?.reset();
          this.router.navigate(['/properties', this.propertyId()], {
            replaceUrl: true,
          });
        },
        error: (err) => {
          console.error('Failed to submit form:', err);
        },
      });
    this.destroyRef.onDestroy(() => subscription?.unsubscribe());
  }
}

export const canCancel: CanDeactivateFn<InputFormComponent> = (component) => {
  if (component.submitted) {
    return true;
  } else if (component.enteredAmount && component.enteredAmount != '0') {
    return window.confirm('Are you sure?');
  } else {
    return true;
  }
};
