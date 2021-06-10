import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer', // selector
  // inline template
  template: `
    <div class='text-center'>
      <hr>
      <p class="greyText">Copyright &copy; 2021| ATHREYA SRINIVAS
    </div>
  `,
  // inline styles
  styles: [
    `
      .greyText{
        color: grey;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
