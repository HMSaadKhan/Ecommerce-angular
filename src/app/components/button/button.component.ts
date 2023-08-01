import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() title!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {}

  onClick(): void {
    this.btnClick.emit();
  }
}
