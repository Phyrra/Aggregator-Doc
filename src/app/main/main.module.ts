import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { SamaAppComponent } from './components/sama-app/sama-app.component';
import { SamaAppTitleComponent } from './components/sama-app-title/sama-app-title.component';
import { SamaContentComponent } from './components/sama-content/sama-content.component';

import { TopicService } from './services/TopicService.service';

import { SamaCodeModule } from 'app/code/code.module';
import { SamaContentModule } from 'app/content/content.module';
import { SamaSidebarModule } from 'app/sidebar/sidebar.module';
import { SamaPageScrollModule } from 'app/page-scroll/page-scroll.module';

@NgModule({
	imports: [
		RouterModule,
		SamaCodeModule,
		SamaContentModule,
		SamaSidebarModule,
		SamaPageScrollModule
	],
	declarations: [
		SamaAppComponent,
		SamaAppTitleComponent,
		SamaContentComponent
	],
	providers: [
		TopicService
	],
	exports: [
		SamaAppComponent,
		SamaAppTitleComponent,
		SamaContentComponent
	]
})
export class SamaMainModule { }
