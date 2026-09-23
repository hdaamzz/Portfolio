import { Component, input } from '@angular/core';
import { IconName } from '../../../core/models/icon-name.type';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
})
export class IconComponent {
  name = input.required<IconName>();
  className = input<string>('w-5 h-5');
}
