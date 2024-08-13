import { Component, DestroyRef, inject } from '@angular/core';
import { Transaction } from '../../shared/data.model';
import {
  TransactionService,
  convertToCSV,
  downloadCSV,
} from '../../shared/transactions.service';
import { TransactionsItemComponent } from '../transactions-item/transactions-item.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-transactions-list',
  standalone: true,
  imports: [
    TransactionsItemComponent,
    CommonModule,
    RouterLink,
    FilterComponent,
  ],
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.css',
})
export class TransactionsListComponent {
  transactionService = inject(TransactionService);
  private destroyRef = inject(DestroyRef);
  transactions: Transaction[] = [];

  constructor() {
    const subscription = this.transactionService
      .getTransactionsObservable()
      .subscribe({
        next: (t) => (this.transactions = t),
        error: (err) => {
          console.error('Failed to load transactions:', err);
        },
      });
    this.destroyRef.onDestroy(() => subscription?.unsubscribe());
  }

  downloadTransactions() {
    const csv = convertToCSV(this.transactions);
    downloadCSV(csv, 'filtered_transactions.csv');
  }
}
