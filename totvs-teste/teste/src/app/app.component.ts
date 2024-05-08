import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste';

  selectOptions = [
    { value: '', label: 'Selecione uma opção' },
    { value: 'value1', label: 'Option 1' },
    { value: 'value2', label: 'Option 2' },
    { value: 'value3', label: 'Option 3' }
  ];

  buttonClicked() {
    console.log('Button clicked');
  }
}
