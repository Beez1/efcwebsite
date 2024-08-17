import { RouterModule } from '@angular/router';
import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
