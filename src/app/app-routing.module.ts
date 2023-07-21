import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent},
  { path: 'view/:id', component: ViewContactComponent },
  { path: '**', component: ErrorPageComponent },
  // { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
