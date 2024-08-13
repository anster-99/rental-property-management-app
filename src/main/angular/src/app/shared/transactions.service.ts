import { DestroyRef, Injectable, inject } from '@angular/core';
import { Transaction, TransactionFilter } from './data.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { PropertyService } from './property.service';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private apiUrl = 'http://localhost:8080/api';
  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);

  private destroyRef = inject(DestroyRef);
  private propertyService = inject(PropertyService);

  constructor(private http: HttpClient) {
    this.loadAllTransactions();
  }

  addTransaction(transaction: Transaction): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, transaction).pipe(
      tap({
        next: () => this.loadAllTransactions(),
        error: (err) => console.error('Error in tap:', err),
      })
    );
  }

  loadAllTransactions() {
    const subscription = this.http
      .get<Transaction[]>(`${this.apiUrl}/transactions`)
      .subscribe({
        next: (transactions) => this.transactionsSubject.next(transactions),
        error: (err) => {
          console.error('Failed to load transactions:', err);
        },
      });
    this.destroyRef.onDestroy(() => subscription?.unsubscribe());
  }

  filterTransactions(filter: TransactionFilter): Observable<Transaction[]> {
    return this.http
      .post<Transaction[]>(`${this.apiUrl}/filter-transactions`, filter)
      .pipe(tap((transactions) => this.transactionsSubject.next(transactions)));
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/transactions/${id}`)
      .pipe(tap(() => this.loadAllTransactions()));
  }

  updateTransaction(id: number, transaction: Transaction): Observable<any> {
    return this.http.put(`${this.apiUrl}/transactions/${id}`, transaction);
  }

  getTransactionsObservable(): Observable<Transaction[]> {
    return this.transactionsSubject.asObservable();
  }
}

export function convertToCSV(transactions: any[]): string {
  const header = Object.keys(transactions[0]).join(',');
  const rows = transactions.map((transaction) =>
    Object.values(transaction)
      .map((value) => `"${value}"`)
      .join(',')
  );
  return [header, ...rows].join('\r\n');
}

export function downloadCSV(csv: string, filename: string) {
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', filename);
  a.click();
  window.URL.revokeObjectURL(url);
}
