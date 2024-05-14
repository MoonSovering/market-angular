import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() buttons: LinkedButton[];
  @Output() linkedButtonValue = new EventEmitter<string>();

  handleClick(button: string) {
    this.linkedButtonValue.emit(button);
  }
}
