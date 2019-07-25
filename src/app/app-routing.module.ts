import { HotelsComponent } from './hotels/hotels.component';
import { BlogComponent } from './blog/blog.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { FlightsComponent } from './flights/flights.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'faqs', component: FaqsComponent},
  { path: 'flights', component: FlightsComponent},
  { path: 'holidays', component: HolidaysComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'hotels', component: HotelsComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ContactComponent, FaqsComponent]
