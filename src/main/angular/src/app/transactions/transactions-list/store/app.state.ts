import { TransactionDelta } from '../../../shared/data.model';

export interface AppState {
  transactionModifier: Map<number, TransactionDelta>;
}
