import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  form: any
  formTitle!: string

  constructor() { }

  ngOnInit(): void {

    this.formTitle = "New User"

    this.form = new FormGroup({
      name: new FormControl(null),
      cpf: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      sex: new FormControl(null),
      birthDate: new FormControl(null)
    })
  }

}
