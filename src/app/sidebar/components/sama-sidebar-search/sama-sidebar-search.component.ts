import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { SidebarChapter } from '../../interfaces/SidebarChapter.interface';

@Component({
	selector: 'sama-sidebar-search',
	templateUrl: './sama-sidebar-search.component.html',
	styleUrls: ['./sama-sidebar-search.component.scss']
})
export class SamaSidebarSearchComponent {
	search = '';

	@Input() chapters: SidebarChapter[];
	@Output() onSearch = new EventEmitter<object>();

	performSearch() : void {
		if (!this.search) {
			this.onSearch.emit({
				chapters: this.chapters
			});

			return;
		}

		const lowerSearch = this.search.toLowerCase();

		this.onSearch.emit({
			chapters: this.chapters.map(chapter => {
				return {
					title: chapter.title,
					items: chapter.items.filter(item => {
						return item.title.toLowerCase().indexOf(lowerSearch) > -1;
					})
				};
			})
		});
	}

	clearSearch() : void {
		this.search = '';

		this.onSearch.emit({
			chapters: this.chapters.map(chapter => {
				return {
					title: chapter.title,
					items: chapter.items
				};
			})
		});
	}
}
