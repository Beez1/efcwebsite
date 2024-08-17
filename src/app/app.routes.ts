import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { TeamComponent } from './team/team.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'fixtures', component: FixturesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to home if the path is not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Export only RouterModule
})
export class AppRoutingModule { }
