import {
  Component,
  Input,
  inject,
  DestroyRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Transaction } from '../../shared/data.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { TransactionService } from '../../shared/transactions.service';
import { FormsModule } from '@angular/forms';
import { PropertyService } from '../../shared/property.service';

@Component({
  selector: 'tr[app-transactions-item]',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, FormsModule],
  templateUrl: './transactions-item.component.html',
  styleUrl: './transactions-item.component.css',
})
export class TransactionsItemComponent {
  @Output() deletedTransactionEvent = new EventEmitter<number>();
  @Input({ required: true }) transaction!: Transaction;
  private transactionService = inject(TransactionService);
  propertyService = inject(PropertyService);
  destroyRef = inject(DestroyRef);
  transactionModified = false;
  enteredAmount = 0;
  enteredComment = '';

  modify() {
    this.transaction.amount = this.enteredAmount;
    this.transaction.comment = this.enteredComment;
    const subscription = this.transactionService
      .updateTransaction(this.transaction.transactionId!, this.transaction)
      .subscribe({
        error: (err) => {
          console.error('Failed to update transaction:', err);
        },
      });
    this.transactionModified = false;
    this.destroyRef.onDestroy(() => subscription?.unsubscribe());
  }

  onCommentChange(event: any) {
    this.enteredComment = event.target.innerText;
    this.transactionModified = true;
  }

  onAmountChange(event: any) {
    const value = event.target.innerText;
    const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
    this.enteredAmount = numericValue;
    this.transactionModified = true;
  }

  delete() {
    if (this.transaction.transactionId !== undefined) {
      this.transactionService
        .deleteTransaction(this.transaction.transactionId)
        .subscribe({
          next: () => {
            console.log('Transaction deleted successfully');
          },
          error: (err) => {
            console.error('Failed to delete transaction:', err);
          },
        });
    } else {
      console.error(
        'Transaction ID is missing for the transaction to be deleted.'
      );
    }
  }
}
