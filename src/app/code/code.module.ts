import { NgModule } from '@angular/core';

import { SamaCodeBlock } from './components/sama-code-block/sama-code-block.component';

@NgModule({
	declarations: [
		SamaCodeBlock
	],
	exports: [
		SamaCodeBlock
	]
})
export class SamaCodeModule { }
