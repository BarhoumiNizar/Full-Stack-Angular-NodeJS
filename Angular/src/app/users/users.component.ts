import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  
users : any=[];
recherche = '';

  constructor(private userService:UsersService,private location: Router) { }

  ngOnInit() {
    return this.getClients();
   

  }
  getClients() {
    return this.userService.getUsers()
               .subscribe(
                 data => {
                  
                 this.users= data;
                 }, error=>{
                   console.log('Table vide ??????');
                 }
                );
 }
 //Delete User By Id

deleteUserId(id): void {
  //this.submitted = true;
  
  this.userService.deleteUserId(id)
      .subscribe(result => {
        console.log(result);
        console.log('Iddddddd Delete By Id==== '+id);
       return this.getClients();
      },
      error => {
        console.log(error);
        console.log('Erreur de supp By Id====');
      });
     
  
}


 deleteAllUser(): void {
  //this.submitted = true;
  console.log('Iddddddd Delete Ollll ');
  this.userService.deleteAll()
      .subscribe(result => {
        console.log(result);
        console.log('OKKK de supp Olllllllll');
        return this.getClients();
      
      },
      error => {
        console.log(error);
        console.log('Erreur de supp Ollll');
      });
  
}

//Recherche Par nom

Search(){
  return this.recherche;
}


 

}
