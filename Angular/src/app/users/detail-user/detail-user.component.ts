import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { Location } from '@angular/common';
import { UsersService } from '../../users.service';
@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  user = new User() ;

  submitted = false;
  message: string;

  constructor(private userServices:UsersService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('Id User : '+id);
    this.userServices.getUser(id).subscribe(user => this.user = user);
  }

  deleteUser(): void {
    this.submitted = true;
    console.log('Iddddddd '+this.user.id);
    this.userServices.delete(this.user.id)
        .subscribe(result => {
          console.log(result);
          console.log('OKKK de supp');
         this.router.navigate['/../clients'];
        },
        error => {
          console.log(error);
          console.log('Erreur de supp');
        });
  }

  ModifierUser():void{
    this.submitted=true;
    this.userServices.updateUser(this.user).subscribe(result=>
                            {
                              this.message="User Updated Successfully!";
                              return this.userServices.getUsers();
                          },
                            error=>this.message="Erreur de Modifier");
  }

}
