import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [FooterComponent, NavComponent],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css'
})
export class SponsorsComponent {


}
