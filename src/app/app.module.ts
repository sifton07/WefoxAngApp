import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes : Routes = [
	{path:'', redirectTo:'/list', pathMatch:'full'},
	{path:'list', component: ListComponent},
	{path:'show/:id', component: ShowComponent},
	{path:'create', component: CreateComponent},
	{path:'update/:id', component: UpdateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ShowComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	HttpClientModule,
	RouterModule.forRoot(routes),
	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLNm-KFXFOEmYQtSRMutF3eHtLWPneIpU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
