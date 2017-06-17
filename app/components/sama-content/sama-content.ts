import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import $ from 'jquery-ts';

@Component({
	selector: 'sama-content',
	templateUrl: './content.html'
})
export class SamaContent {
	constructor(private route: ActivatedRoute, @Inject(DOCUMENT) private document: any) { }

	ngOnInit() {
		this.route.params
			.subscribe((params: Params) => {
				let topic: string = params['topic'];
				if (!topic) {
					return;
				}

				let $element: any = $('#' + topic);
				if ($element.length === 0) {
					return;
				}

				var $parent: any = $element.closest('sama-content');
				
				$parent.animate({
					scrollTop: $element.offset().top - $parent.offset().top + $parent.scrollTop()
				}, 500);
			});
	}
}
