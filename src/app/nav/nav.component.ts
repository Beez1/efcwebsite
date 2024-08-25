import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const navToggle = document.getElementById('nav-toggle');
      if (navToggle) {
        navToggle.addEventListener('click', this.toggleNav.bind(this));
      }
    }
  }

  private toggleNav() {
    const navDrawer = document.getElementById('nav-drawer');
    const navOverlay = document.createElement('div');
    
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
    
    if (navDrawer) {
      navDrawer.classList.toggle('open');
    }
    navOverlay.classList.toggle('active');
  
    navOverlay.addEventListener('click', () => {
      if (navDrawer) {
        navDrawer.classList.remove('open');
      }
      navOverlay.classList.remove('active');
      document.body.removeChild(navOverlay);
    });
  }
}