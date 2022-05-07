import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-inqoo-loader',
  templateUrl: './inqoo-loader.component.html',
  styleUrls: ['./inqoo-loader.component.scss']
})
export class InqooLoaderComponent {
  @Input() label: string = '';
}
