import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { SidebarChapter } from '../../data/Sidebar';

@Component({
	selector: 'sama-sidebar',
	templateUrl: './sama-sidebar/sama-sidebar.html'
})
export class SamaSidebar {
	@Input() baseRoute: string;
	@Input() chapters: SidebarChapter[];
}
