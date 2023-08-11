import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nx-shared-lib-demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() clickBtn: EventEmitter<void> = new EventEmitter<void>();

  getRandom(): void {
    this.clickBtn.emit();
  }
}
