import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PageScrollService } from '../../services/PageScrollService';

@Component({
	selector: 'sama-content',
	templateUrl: './content.html'
})
export class SamaContent {
	constructor(private route: ActivatedRoute, private pageScroll: PageScrollService) { }

	ngOnInit() {
		this.route.params
			.subscribe((params: Params) => {
				let topic: string = params['topic'];
				if (!topic) {
					return;
				}

				this.pageScroll.scrollTo(topic, 500, 50);
			});
	}
}
