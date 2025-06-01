import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appIdade]'
})
export class IdadeDirective {

  @Input() AppIdade = '';
  @HostBinding('style.border') border !: string;

  constructor() { }

  ngOnInit() {
    if (Number(this.AppIdade) > 1) {
      this.border = '2px solid red';
    } else
      this.border = '2px solid orange';
  }

}
