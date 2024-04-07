import { Component, OnInit } from '@angular/core';
import { Istudent } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  stdArr : Array<Istudent> = [
    {
      fname : 'rakshanda',
      lname : 'bulbule',
      email : "rb@gmail.com",
      contact : 12345689005
    },
    {
      fname : 'meksha',
      lname : 'bulbule',
      email : "mb@gmail.com",
      contact : 12345689005
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }
  onStdAdd(fname : HTMLInputElement, lname : HTMLInputElement, email : HTMLInputElement, contact : HTMLInputElement){
    if (fname.value && lname.value && email.value && contact.value){
      let newStd : Istudent = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        contact: +contact.value
      }  
      fname.value = lname.value = email.value = contact.value = '';
      this.stdArr.push(newStd)
    }
  }

}
