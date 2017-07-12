import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SamaMainModule } from 'app/main/main.module';

import { SamaAppComponent } from 'app/main/components/sama-app/sama-app.component';
import { SamaContentComponent } from 'app/main/components/sama-content/sama-content.component';

const routes: Routes = [
	{ path: 'doc', component: SamaContentComponent },
	{ path: 'doc/:topic', component: SamaContentComponent },
	{ path: '', redirectTo: 'doc', pathMatch: 'full' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true }),
		BrowserModule,
		SamaMainModule
	],
	bootstrap: [
		SamaAppComponent
	]
})
export class AppModule { }
