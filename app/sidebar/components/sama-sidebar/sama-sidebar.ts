import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { SidebarChapter } from '../../interfaces/SidebarChapter';

@Component({
	selector: 'sama-sidebar',
	templateUrl: './sidebar/components/sama-sidebar/sama-sidebar.html'
})
export class SamaSidebar {
	@Input() baseRoute: string;
	@Input() chapters: SidebarChapter[];

	filteredChapters: SidebarChapter[];

	ngOnInit() {
		this.filteredChapters = this.chapters;
	}

	onSearch(event: any) : void {
		this.filteredChapters = event.chapters;
	}
}
