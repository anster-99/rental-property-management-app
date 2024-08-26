import { createAction, props } from '@ngrx/store';
import { Transaction, TransactionDelta } from '../../../shared/data.model';

export const modifyComment = createAction(
  '[TransactionModifier] ModifyComment',
  props<{ transactionId: number; comment: string }>()
);

export const modifyAmount = createAction(
  '[TransactionModifier] ModifyAmount',
  props<{ transactionId: number; amount: number }>()
);

export const saveTransaction = createAction(
  '[TransactionModifier] SaveTransaction',
  props<{ transaction: Transaction; delta: TransactionDelta }>()
);

export const saveTransactionSuccess = createAction(
  '[Transaction API] SaveTransactionSuccess',
  props<{ transaction: Transaction }>()
);

export const saveTransactionFailure = createAction(
  '[Transaction API] SaveTransactionFailure',
  props<{ error: any }>()
);
