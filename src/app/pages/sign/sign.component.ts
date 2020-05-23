import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  @ViewChild('form', { static: false }) form: any;
  item: any = {};

  constructor() {
  }

  ngOnInit(): void {
  }

  save() {
    const { item } = this;

    if (this.form.valid) {
      this.form.controls.username.setErrors({custom: 'Erro que veio da API'});
    }
  }

}
