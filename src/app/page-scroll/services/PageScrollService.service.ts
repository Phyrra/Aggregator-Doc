import { Injectable } from '@angular/core';

import $ from 'jquery-ts';

@Injectable()
export class PageScrollService {
	private scrollToElement(id: string, parentSelector: string, animationTime: number = 500) : void {
		const $element: any = $('#' + id);
		if ($element.length === 0) {
			return;
		}

		const $parent: any = $element.closest(parentSelector);

		$parent.animate({
			scrollTop: $element.offset().top - $parent.offset().top + $parent.scrollTop()
		}, animationTime);
	}

	scrollTo(id: string, parentSelector: string, animationTime: number = 500, delay: number = 0) : void {
		if (delay > 0) {
			setTimeout(this.scrollToElement.bind(this, id, parentSelector, animationTime), delay);
		} else {
			this.scrollToElement(id, parentSelector, animationTime);
		}
	}
}
