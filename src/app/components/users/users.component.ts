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
  users!: User[]

  showTable: boolean = true
  showForm: boolean = false

  constructor(private userService: UsersService) { }

  ngOnInit(): void {

    this.getAllUsers()    
  }

  showRegisterForm(): void {
    
    this.showForm = true
    this.showTable = false

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

  showUpdateForm(id: any): void {
    this.showTable = false
    this.showForm = true

    this.userService.findById(id).subscribe(result => {
      this.formTitle = `Update ${result.name}`

      this.form = new FormGroup({
        _id: new FormControl(result._id),
        name: new FormControl(result.name),
        cpf: new FormControl(result.cpf),
        email: new FormControl(result.email),
        phone: new FormControl(result.phone),
        sex: new FormControl(result.sex),
        birthDate: new FormControl(result.birthDate)
        })
    })
  }

  sendForm(): void {
    const user: User = this.form.value
    console.log(user._id)

    if(user._id != null) {
      this.userService.update(user, user._id).subscribe(result => {
        this.cancel()
        this.getAllUsers()
        alert('User updated')
      })
    }
    else{
      this.userService.create(user).subscribe(result => {
      this.cancel()
      this.getAllUsers()
      alert('User created')
    })
  }
}

  cancel(): void {
    this.showTable = true
    this.showForm = false
  }

  getAllUsers(): void {
    this.userService.findAll().subscribe(result => {
      this.users = result
    })
  }
}
