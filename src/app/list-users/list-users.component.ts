
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //users=["Shiva charan","Sneha",Karan"];
  users=[
    {id:101, name:"Shiva charan",email:"s@gmail.com"},

    {id:102, name:"Sneha",email:"s@gmail.com"},

    {id:103, name:"Karan",email:"k@gmail.com"}

  ];

  //ListTaskComponent

  tasks=[

    {id:1,name:"Install Java",status:"COMPLETED"},

    {id:2,name:"Install NodeJS",status:"PENDING"},

  ];

  deleteUser()

  {

    alert("Successfully deleted");

  }

}


