import { Injectable } from '@angular/core';
import * as flogin from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  registerUser(user){
    return new Promise<any>((resolve, reject)=>{
      flogin.auth().createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password).then(
        res => resolve(res),
        err => reject(err)
      )
    });
  }

  loginUser(user){
    return new Promise<any>((resolve, reject)=>{
      flogin.auth().signInWithEmailAndPassword(user.email, user.password).then(
        res => resolve(res),
        err => reject(err)
      )
    });
  }

  logoutUser(){
    return new Promise<any>((resolve, reject) =>{
      if(flogin.auth().currentUser){
        flogin.auth().signOut().then(
          () => {
            console.log("log out");
            resolve();
          }
        ).catch((error)=>{reject();});
      }
    })
  }
}
