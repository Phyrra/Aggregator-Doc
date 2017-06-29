import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { SamaApp } from './components/sama-app/sama-app';
import { SamaAppTitle } from './components/sama-app-title/sama-app-title';
import { SamaContent } from './components/sama-content/sama-content';

import { TopicService } from './services/TopicService';

import { SamaCodeModule } from '../code/module';
import { SamaContentModule } from '../content/module';
import { SamaSidebarModule } from '../sidebar/module';
import { SamaPageScrollModule } from '../page-scroll/module';

@NgModule({
	imports: [
		RouterModule,
		SamaCodeModule,
		SamaContentModule,
		SamaSidebarModule,
		SamaPageScrollModule
	],
	declarations: [
		SamaApp,
		SamaAppTitle,
		SamaContent
	],
	providers: [
		TopicService
	],
	exports: [
		SamaApp,
		SamaAppTitle,
		SamaContent
	]
})
export class SamaMainModule { }
