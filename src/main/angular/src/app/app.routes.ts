import { Routes } from '@angular/router';
import { NoSelectionComponent } from './no-selection/no-selection.component';
import { SelectedPropertyComponent } from './selected-property/selected-property.component';
import { CategoryComponent } from './category/category.component';
import {
  InputFormComponent,
  canCancel,
} from './input-form/input-form.component';
import { TransactionsListComponent } from './transactions/transactions-list/transactions-list.component';

export const routes: Routes = [
  {
    path: '',
    component: NoSelectionComponent,
    title: 'Rental Properties Management Tool',
  },
  {
    path: 'properties/:propertyId',
    component: SelectedPropertyComponent,
    children: [
      {
        path: ':category',
        component: CategoryComponent,
        children: [
          {
            path: ':optionId',
            redirectTo: ':optionId/new',
            pathMatch: 'prefix',
          },
          {
            path: ':optionId/new',
            component: InputFormComponent,
            canDeactivate: [canCancel],
          },
        ],
      },
    ],
  },
  {
    path: 'transactions',
    component: TransactionsListComponent,
  },
];
