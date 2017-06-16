import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'sama-content',
	templateUrl: './content.html'
})
export class SamaContent {
	topic: string;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params
			.forEach((params: Params) => {
				this.topic = params['topic'];
			});
	}
}
