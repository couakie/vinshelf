import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vinshelf';

  constructor(){
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyCPRhk0ZJCYbhmvSCZGKxmHTTXNUY2xf-g",
        authDomain: "vinshelf.firebaseapp.com",
        databaseURL: "https://vinshelf.firebaseio.com",
        projectId: "vinshelf",
        storageBucket: "",
        messagingSenderId: "848966423475",
        appId: "1:848966423475:web:a6fc3c8a5f6eda67"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

  }
}
