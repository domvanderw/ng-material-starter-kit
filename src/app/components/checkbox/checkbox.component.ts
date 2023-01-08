import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckboxModel } from '../../models/checkbox.model';
import { CheckboxService } from '../../services/checkbox.service';

@Component({
  selector: 'app-checkbox',
  styleUrls: ['./checkbox.component.scss'],
  templateUrl: './checkbox.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
  readonly checkbox$: Observable<CheckboxModel[]> = this._checkboxService.getAll();

  constructor(private _checkboxService: CheckboxService) {
  }
}
