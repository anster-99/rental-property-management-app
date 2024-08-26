import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, take, tap } from 'rxjs/operators';

import {
  saveTransaction,
  saveTransactionSuccess,
  saveTransactionFailure,
} from './transaction.actions';
import { Transaction } from '../../../shared/data.model';
import { TransactionService } from '../../../shared/transactions.service';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';

@Injectable()
export class TransactionEffects {
  constructor(
    private actions$: Actions,
    private transactionService: TransactionService,
    private store: Store<AppState>
  ) {}

  saveTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveTransaction),
      mergeMap(({ transaction, delta }) => {
        const updatedTransaction: Transaction = {
          ...transaction,
          comment:
            delta.comment !== undefined ? delta.comment : transaction.comment,
          amount:
            delta.amount !== undefined ? delta.amount : transaction.amount,
        };

        return this.transactionService
          .updateTransaction(
            updatedTransaction.transactionId!,
            updatedTransaction
          )
          .pipe(
            map(() =>
              saveTransactionSuccess({ transaction: updatedTransaction })
            ),
            catchError((error) => of(saveTransactionFailure({ error })))
          );
      })
    )
  );

  saveTransactionFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveTransactionFailure),
        tap(({ error }) => {
          console.error('Transaction update failed:', error);
        })
      ),
    { dispatch: false }
  );

  saveTransactionSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveTransactionSuccess),
        tap(({ transaction }) => {
          console.log(
            'Transaction with ID %s updated successfully.',
            transaction.transactionId
          );
        })
      ),
    { dispatch: false }
  );
}
