import { Component,Input } from '@angular/core';
import {Login } from './login/app.login.view';
import { AgmCoreModule } from '@agm/core';
import {GetUserService} from './users/getuserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GetUserService]
})
export class AppComponent {
lat: number = 0;
lng: number = 0;
zoom:number = 0;
agm: AgmCoreModule = new AgmCoreModule();

title = 'app';
users = [];
star = {}
errorMessage = "";
createUserPosLat = 0;
createUserPosLng = 0;
showCreateuser = false;
newUser = {
latitude:null,longitude:null,name:null,description:null,phone:null
}
creteUserService = null
constructor(getUserService:GetUserService){

    navigator.geolocation.getCurrentPosition(function(pos){
    this.lat = pos.coords.latitude;
    this.lng = pos.coords.longitude;
    this.zoom = 16;
    }.bind(this));
    this.creteUserService = getUserService;
    //  this.getUsers();
    }
//Function to create User window
createUserWindow = () => {
console.log(this.agm);
navigator.geolocation.getCurrentPosition(function(pos){
this.createUserPosLat = pos.coords.latitude;
this.createUserPosLng = pos.coords.longitude;
this.showCreateuser = true;
}.bind(this));
}
//Function to create User
createUser = () =>{
this.newUser.latitude = this.createUserPosLat;
this.newUser.longitude = this.createUserPosLng;
console.log(this.newUser);
this.creteUserService.createUsers(this.newUser).subscribe(users => this.users = users,
                 error =>  this.errorMessage = <any>error);
}
updateMarkerPosition(event){
this.createUserPosLat = event.coords.lat;
this.createUserPosLng = event.coords.lng;
}

getUsers(){
this.creteUserService.getUsers(this.lat,this.lng).subscribe(users => this.users = users,
                 error =>  this.errorMessage = <any>error);

}

}
