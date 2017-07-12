import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { SidebarChapter } from '../../interfaces/SidebarChapter.interface';

@Component({
	selector: 'sama-sidebar-chapter',
	templateUrl: './sama-sidebar-chapter.component.html',
	styleUrls: ['./sama-sidebar-chapter.component.scss']
})
export class SamaSidebarChapter {
	@Input() baseRoute: string;
	@Input() chapter: SidebarChapter;
	expanded: boolean = true;

	toggleExpand(): void {
		this.expanded = !this.expanded;
	}
}
