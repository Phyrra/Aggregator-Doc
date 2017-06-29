import { Injectable } from '@angular/core';

import $ from 'jquery-ts';

@Injectable()
export class PageScrollService {
	private scrollToElement(id: string, animationTime: number = 500) : void {
		let $element: any = $('#' + id);
		if ($element.length === 0) {
			return;
		}

		var $parent: any = $element.closest('sama-content');

		$parent.animate({
			scrollTop: $element.offset().top - $parent.offset().top + $parent.scrollTop()
		}, animationTime);
	}

	scrollTo(id: string, animationTime: number = 500, delay: number = 0) : void {
		if (delay > 0) {
			setTimeout(this.scrollToElement.bind(this, id, animationTime), delay);
		} else {
			this.scrollToElement(id, animationTime);
		}
	}
}
