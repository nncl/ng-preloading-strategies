import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  @ViewChild('form', { static: false }) form: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
