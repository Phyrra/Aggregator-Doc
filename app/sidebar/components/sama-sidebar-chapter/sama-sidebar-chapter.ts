import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { SidebarChapter } from '../../interfaces/SidebarChapter';

@Component({
	selector: 'sama-sidebar-chapter',
	templateUrl: './sidebar/components/sama-sidebar-chapter/sama-sidebar-chapter.html'
})
export class SamaSidebarChapter {
	@Input() baseRoute: string;
	@Input() chapter: SidebarChapter;
	expanded: boolean = true;

	toggleExpand(): void {
		this.expanded = !this.expanded;
	}
}
