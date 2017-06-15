import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { SidebarItem } from '../../data/Sidebar';

@Component({
	selector: 'sama-sidebar-item',
	templateUrl: './sama-sidebar-item.html'
})
export class SamaSidebarItem {
	@Input() baseRoute: string;
	@Input() item: SidebarItem;
}
