import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SamaApp } from './components/sama-app/sama-app';
import { SamaAppTitle } from './components/sama-app-title/sama-app-title';
import { SamaSidebar } from './components/sama-sidebar/sama-sidebar';
import { SamaSidebarChapter } from './components/sama-sidebar-chapter/sama-sidebar-chapter';
import { SamaSidebarItem } from './components/sama-sidebar-item/sama-sidebar-item';
import { SamaContent } from './components/sama-content/sama-content';
import { SamaChapter } from './components/sama-chapter/sama-chapter';
import { SamaTopic } from './components/sama-topic/sama-topic';

import { TopicService } from './services/TopicService';

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
		SamaSidebarChapter,
		SamaSidebarItem,
		SamaContent,
		SamaChapter,
		SamaTopic
	],
	imports: [
		RouterModule.forRoot(routes, { useHash: true }),
		BrowserModule
	],
	providers: [
		TopicService
	],
	bootstrap: [
		SamaApp
	]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);