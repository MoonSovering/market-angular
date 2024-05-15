import { Component } from '@angular/core';
import { LinkedButton } from '../../core/models/interfaces/linked-button.interface';
import { HeaderContainerFacade } from './header-container.facade';
import { HeaderComponent } from '../../ui/blocks/header/header.component';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './header-container.component.html'
})
export class HeaderContainerComponent {
  constructor(private readonly facade: HeaderContainerFacade ) {}
  linkedButton: LinkedButton[] = [];
  handleLinkedButtonValue(data: string): void {
    this.facade.handleLinkedButtonValue(data);
  }
  ngOnInit(): void {
    this.linkedButton = this.facade.handleMenu();
  }
}
