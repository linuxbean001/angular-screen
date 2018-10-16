import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-test',
  templateUrl: './dropdown-test.component.html',
  styleUrls: ['./dropdown-test.component.scss']
})
export class DropdownTestComponent implements OnInit {

  private someOptions = ['Lorem ipsum', 'Dolor sit', 'Sit Cursus', 'Ridiculus Pharetra', 'Venenatis Quam'];
  public options = [];
  public selectedOption = '-- no selection --';

  constructor() { }

  ngOnInit() {
    setInterval(() => this.shuffleOptions(), 1000);
  }

  private shuffleOptions() {
    const items = this.someOptions;
    this.options = [
      items[Math.floor(Math.random() * items.length)],
      items[Math.floor(Math.random() * items.length)],
      items[Math.floor(Math.random() * items.length)]
    ];
  }

  public selectOption(option: string) {
    this.selectedOption = option;
  }

}
