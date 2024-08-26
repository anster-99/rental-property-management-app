import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';

import { provideEffects } from '@ngrx/effects';
import { TransactionEffects } from './transactions/transactions-list/store/transaction.effects';
import { TransactionReducer } from './transactions/transactions-list/store/transaction.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore({
      transactionModifier: TransactionReducer,
    }),
    provideEffects([TransactionEffects]),
  ],
};
