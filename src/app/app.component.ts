import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  frstValue: number = 0
  scdValue: number = 0
  ans : number | null = null;
  display(  ):void{
   
    this.ans = Number(this.frstValue) + Number(this.scdValue);
  }
 
}
