import {
  AfterViewInit,
  Component,
  DestroyRef,
  ViewChild,
  inject,
} from '@angular/core';
import { Transaction } from '../../shared/data.model';
import {
  TransactionService,
  convertToCSV,
  downloadCSV,
} from '../../shared/transactions.service';
import { CurrencyPipe } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { PropertyService } from '../../shared/property.service';

@Component({
  selector: 'app-transactions-list',
  standalone: true,
  imports: [FilterComponent, MatTableModule, MatPaginatorModule, CurrencyPipe],
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.css',
})
export class TransactionsListComponent implements AfterViewInit {
  transactionService = inject(TransactionService);
  propertyService = inject(PropertyService);
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
}
