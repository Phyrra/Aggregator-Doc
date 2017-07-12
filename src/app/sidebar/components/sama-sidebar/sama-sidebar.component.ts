import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { SidebarChapter } from '../../interfaces/SidebarChapter.interface';

@Component({
	selector: 'sama-sidebar',
	templateUrl: './sama-sidebar.component.html',
	styleUrls: ['./sama-sidebar.component.scss']
})
export class SamaSidebarComponent implements OnInit {
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
