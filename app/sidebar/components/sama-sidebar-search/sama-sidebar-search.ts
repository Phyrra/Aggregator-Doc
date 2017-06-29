import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { SidebarChapter } from '../../interfaces/SidebarChapter';

@Component({
	selector: 'sama-sidebar-search',
	templateUrl: './sidebar/components/sama-sidebar-search/sama-sidebar-search.html'
})
export class SamaSidebarSearch {
	search: string = '';

	@Input() chapters: SidebarChapter[];
	@Output() onSearch = new EventEmitter<object>();

	performSearch() : void {
		if (!this.search) {
			this.onSearch.emit({
				chapters: this.chapters
			});

			return;
		}

		var lowerSearch = this.search.toLowerCase();

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
				}
			})
		});
	}
}
