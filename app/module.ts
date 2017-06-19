import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SamaApp } from './components/sama-app/sama-app';
import { SamaAppTitle } from './components/sama-app-title/sama-app-title';
import { SamaSidebar } from './components/sama-sidebar/sama-sidebar';
import { SamaSidebarChapter } from './components/sama-sidebar-chapter/sama-sidebar-chapter';
import { SamaSidebarItem } from './components/sama-sidebar-item/sama-sidebar-item';
import { SamaSidebarSearch } from './components/sama-sidebar-search/sama-sidebar-search';
import { SamaContent } from './components/sama-content/sama-content';
import { SamaChapter } from './components/sama-chapter/sama-chapter';
import { SamaTopic } from './components/sama-topic/sama-topic';
import { SamaFncSignature } from './components/sama-fnc-signature/sama-fnc-signature';
import { SamaCodeBlock } from './components/sama-code-block/sama-code-block';

import { TopicService } from './services/TopicService';
import { PageScrollService } from './services/PageScrollService';

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
		SamaSidebarSearch,
		SamaContent,
		SamaChapter,
		SamaTopic,
		SamaFncSignature,
		SamaCodeBlock
	],
	imports: [
		RouterModule.forRoot(routes, { useHash: true }),
		BrowserModule,
		FormsModule
	],
	providers: [
		TopicService,
		PageScrollService
	],
	bootstrap: [
		SamaApp
	]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);