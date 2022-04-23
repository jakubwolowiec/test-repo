import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-inqoo-button',
  templateUrl: './inqoo-button.component.html',
  styleUrls: ['./inqoo-button.component.scss']
})
export class InqooButtonComponent implements OnInit {
  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' = 'primary';
  @Input() size: 'small' | 'large' | 'default' = "default";

  ngOnInit() {
      console.log(this.size)
  }

  isSmall = () => this.size === 'small';
  isLarge = () => this.size === 'large';
}
