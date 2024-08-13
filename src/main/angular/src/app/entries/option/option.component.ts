import { Component, Input } from '@angular/core';
import { Option } from '../../shared/data.model';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-option',
  standalone: true,
  templateUrl: './option.component.html',
  styleUrl: './option.component.css',
  imports: [RouterLink, RouterLinkActive],
})
export class OptionComponent {
  @Input({ required: true }) option!: Option;
}
