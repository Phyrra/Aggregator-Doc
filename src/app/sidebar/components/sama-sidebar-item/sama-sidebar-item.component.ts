import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { SidebarItem } from '../../interfaces/SidebarItem.interface';

@Component({
	selector: 'sama-sidebar-item',
	templateUrl: './sama-sidebar-item.component.html',
	styleUrls: ['./sama-sidebar-item.component.scss']
})
export class SamaSidebarItem {
	@Input() baseRoute: string;
	@Input() item: SidebarItem;
}
