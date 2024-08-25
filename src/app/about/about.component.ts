import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, NavComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
