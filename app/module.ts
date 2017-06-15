import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SamaApp } from './components/sama-app/sama-app';
import { SamaAppTitle } from './components/sama-app-title/sama-app-title';
import { SamaSidebar } from './components/sama-sidebar/sama-sidebar';
import { SamaContent } from './components/sama-content/sama-content';

const routes: Routes = [
	{ path: 'doc', component: SamaContent },
	{ path: 'doc/:topic', component: SamaContent },
	{ path: '', redirectTo: 'doc', pathMatch: 'full' }
]

@NgModule({
	declarations: [
		SamaApp,
		SamaAppTitle,
		SamaSidebar,
		SamaContent
	],
	imports: [
		RouterModule.forRoot(routes, { useHash: true }),
		BrowserModule
	],
	providers: [],
	bootstrap: [
		SamaApp
	]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);