import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SamaChapterComponent } from './components/sama-chapter/sama-chapter.component';
import { SamaFncSignatureComponent } from './components/sama-fnc-signature/sama-fnc-signature.component';
import { SamaTopicComponent } from './components/sama-topic/sama-topic.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SamaChapterComponent,
		SamaFncSignatureComponent,
		SamaTopicComponent
	],
	exports: [
		SamaChapterComponent,
		SamaFncSignatureComponent,
		SamaTopicComponent
	]
})
export class SamaContentModule { }
