import { State, createSelector } from '@ngrx/store';
import { TransactionDelta } from '../../../shared/data.model';
import { AppState } from './app.state';

export const selectTransactionModifierState = (state: AppState) =>
  state.transactionModifier;

export const selectDeltaById = (transactionId: number) =>
  createSelector(
    selectTransactionModifierState,
    (transactionModifier: Map<number, TransactionDelta>) =>
      transactionModifier.get(transactionId)
  );
