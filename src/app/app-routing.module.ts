import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ItemComponent } from './pages/item/item.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ItempageComponent } from './pages/itempage/itempage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'item',component:ItemComponent},
  {path:'item/:id',component:ItempageComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
