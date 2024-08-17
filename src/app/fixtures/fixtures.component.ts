import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-fixtures',
  standalone: true,
  imports: [FooterComponent, NavComponent],
  templateUrl: './fixtures.component.html',
  styleUrl: './fixtures.component.css'
})
export class FixturesComponent {

}
