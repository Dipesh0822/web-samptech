import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
    {
        path: '',
        component: ContactComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,FormModule,ReactiveFormsModule],
})

export class ContactRoutingModule { }