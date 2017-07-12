import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SamaChapter } from './components/sama-chapter/sama-chapter.component';
import { SamaFncSignature } from './components/sama-fnc-signature/sama-fnc-signature.component';
import { SamaTopic } from './components/sama-topic/sama-topic.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SamaChapter,
		SamaFncSignature,
		SamaTopic
	],
	exports: [
		SamaChapter,
		SamaFncSignature,
		SamaTopic
	]
})
export class SamaContentModule { }
