import { Component ,ViewChild} from '@angular/core';
import { LoginComponent} from './login/login.component';
 import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `<h1>Welcome</h1>
  <router-outlet></router-outlet>`,

})
export class AppComponent  {
 
ngOnInit(){
 console.log("hello")
}
}