import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SamaMainModule } from './main/module';

import { SamaApp } from './main/components/sama-app/sama-app';
import { SamaContent } from './main/components/sama-content/sama-content';

const routes: Routes = [
	{ path: 'doc', component: SamaContent },
	{ path: 'doc/:topic', component: SamaContent },
	{ path: '', redirectTo: 'doc', pathMatch: 'full' }
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true }),
		BrowserModule,
		SamaMainModule
	],
	bootstrap: [
		SamaApp
	]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
