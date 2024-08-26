import { createReducer, on } from '@ngrx/store';
import { TransactionDelta } from '../../../shared/data.model';

import {
  modifyAmount,
  modifyComment,
  saveTransactionFailure,
  saveTransactionSuccess,
} from './transaction.actions';

const initialState: Map<number, TransactionDelta> = new Map();

export const TransactionReducer = createReducer(
  initialState,
  on(modifyComment, (state, { transactionId, comment }) => {
    const newState = new Map(state);
    const existingDelta = newState.get(transactionId);
    if (existingDelta) {
      newState.set(transactionId, { ...existingDelta, comment });
    } else {
      newState.set(transactionId, { comment });
    }
    return newState;
  }),
  on(modifyAmount, (state, { transactionId, amount }) => {
    const newState = new Map(state);
    const existingDelta = newState.get(transactionId);
    if (existingDelta) {
      newState.set(transactionId, { ...existingDelta, amount });
    } else {
      newState.set(transactionId, { amount });
    }
    return newState;
  }),
  on(saveTransactionSuccess, (state, { transaction }) => {
    const newState = new Map(state);
    newState.delete(transaction.transactionId!);
    return newState;
  }),
  on(saveTransactionFailure, (state) => {
    return state;
  })
);
