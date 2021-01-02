import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/User';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public signedIn: Observable<any>;
  public userLogin:any = null;
  private sprintCollection:AngularFirestoreCollection<number>;
  constructor(private auth: AngularFireAuth, private readonly afs:AngularFirestore) { 
    this.sprintCollection = afs.collection<number>('sprint');
    this.signedIn = new Observable((subscriber) => {
      this.auth.onAuthStateChanged(subscriber);
  });
  }

  async saveSprint(sprint:number){
      try{
        const res = await this.sprintCollection.doc().set(sprint);
        return true;
      } catch(err){
        throw new Error(err);
      }  
      return true;
  }

  async login(user:User):Promise<any>{
  
      try{
        const res = await this.auth.signInWithEmailAndPassword(user.email, user.password);
        return true;
      } catch(err){
        throw new Error(err);
      }  
      return true;
  }

  async signOut() {
    try {
        await this.auth.signOut();
        return true;
    } catch (error) {
        console.log('Sign out failed', error);
        return false;
    }
}
}
