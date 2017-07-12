import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PageScrollService } from 'app/page-scroll/services/PageScrollService.service';

@Component({
	selector: 'sama-content',
	templateUrl: '../../../../content.html'
})
export class SamaContentComponent implements OnInit {
	constructor(private route: ActivatedRoute, private pageScroll: PageScrollService) { }

	ngOnInit() {
		this.route.params
			.subscribe((params: Params) => {
				const topic: string = params['topic'];
				if (!topic) {
					return;
				}

				this.pageScroll.scrollTo(topic, '.content-container', 500, 50);
			});
	}
}
