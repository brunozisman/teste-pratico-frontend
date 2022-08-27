import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  form: any
  formTitle!: string

  constructor(private userService: UsersService) { }

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

  sendForm(): void {
    console.log("submit")
    const user: User = this.form.value

    console.log(user)

    this.userService.create(user).subscribe(result => {
      alert('User created')
    })
  }

}
