import {
  AfterViewInit,
  Component,
  DestroyRef,
  ViewChild,
  inject,
} from '@angular/core';
import { Transaction, TransactionDelta } from '../../shared/data.model';
import {
  TransactionService,
  convertToCSV,
  downloadCSV,
} from '../../shared/transactions.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { PropertyService } from '../../shared/property.service';
import { Store, select } from '@ngrx/store';
import { Observable, map, of } from 'rxjs';
import {
  modifyAmount,
  modifyComment,
  saveTransaction,
} from './store/transaction.actions';
import { selectDeltaById } from './store/transaction.selectors';

@Component({
  selector: 'app-transactions-list',
  standalone: true,
  imports: [
    FilterComponent,
    MatTableModule,
    MatPaginatorModule,
    CurrencyPipe,
    AsyncPipe,
  ],
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.css',
})
export class TransactionsListComponent implements AfterViewInit {
  transactionService = inject(TransactionService);
  propertyService = inject(PropertyService);
  store = inject(Store);

  private destroyRef = inject(DestroyRef);

  dataSource = new MatTableDataSource<Transaction>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'date',
    'property',
    'category',
    'subcategory',
    'amount',
    'payment_form',
    'comment',
    'actions',
  ];

  constructor() {
    const subscription = this.transactionService.transactions$.subscribe({
      next: (t) => {
        this.dataSource.data = t;
      },
      error: (err) => {
        console.error('Failed to load transactions:', err);
      },
    });
    this.destroyRef.onDestroy(() => subscription?.unsubscribe());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  downloadTransactions() {
    const csv = convertToCSV(this.dataSource.data);
    downloadCSV(csv, 'filtered_transactions.csv');
  }

  delete(transactionId: number) {
    if (transactionId !== undefined) {
      this.transactionService.deleteTransaction(transactionId).subscribe({
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

  onCommentChange(transactionId: number, event: any) {
    this.store.dispatch(
      modifyComment({
        transactionId: transactionId,
        comment: event.target.innerText,
      })
    );
  }

  onAmountChange(transactionId: number, event: any) {
    this.store.dispatch(
      modifyAmount({
        transactionId: transactionId,
        amount: parseFloat(event.target.innerText.replace(/[^\d.-]/g, '')),
      })
    );
  }

  onSave(transaction: Transaction) {
    this.store
      .select(selectDeltaById(transaction.transactionId!))
      .subscribe((delta: TransactionDelta | undefined) => {
        if (delta) {
          this.store.dispatch(saveTransaction({ transaction, delta }));
        }
      });
  }

  hasChanges(transactionId: number): Observable<boolean> {
    return this.store.pipe(
      select(selectDeltaById(transactionId)),
      map((delta) => !!delta)
    );
  }
}
