import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PropertyComponent } from './entries/property/property.component';
import { PropertyListComponent } from './entries/property-list/property-list.component';
import { OptionComponent } from './entries/option/option.component';
import { SelectedPropertyComponent } from './selected-property/selected-property.component';
import { TransactionsListComponent } from './transactions/transactions-list/transactions-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    PropertyComponent,
    PropertyListComponent,
    OptionComponent,
    SelectedPropertyComponent,
    TransactionsListComponent,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
  ],
})
export class AppComponent {
  title = 'Rental Property Management App';
}
