import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { SidebarItem } from '../../interfaces/SidebarItem';

@Component({
	selector: 'sama-sidebar-item',
	templateUrl: './sidebar/components/sama-sidebar-item/sama-sidebar-item.html'
})
export class SamaSidebarItem {
	@Input() baseRoute: string;
	@Input() item: SidebarItem;
}
