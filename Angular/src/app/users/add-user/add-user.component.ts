import { Component, OnInit ,NgZone } from '@angular/core';
import { User } from '../../interface/user';
import { Location } from '@angular/common';
import { UsersService } from '../../users.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 
  user = new User();
  submitted= false;
  constructor(private userServices:UsersService,private location: Location) { }

  ngOnInit() {
  }

  newUser() {
    this.submitted = false;
    this.user =  new User();
  }
  addUser() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }
   
  private save(): void {
    
    console.log(this.user);
    this.userServices.addUsers(this.user)
        .subscribe(response => {
          console.log('Okokoooooooooo '+response);
          this.submitted = true;
        },
        error => {
          console.log('Erreur dajout '+error);
          console.log('Data ');
        });
  }


}
