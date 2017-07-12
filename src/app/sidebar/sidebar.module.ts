import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SamaSidebar } from './components/sama-sidebar/sama-sidebar.component';
import { SamaSidebarChapter } from './components/sama-sidebar-chapter/sama-sidebar-chapter.component';
import { SamaSidebarItem } from './components/sama-sidebar-item/sama-sidebar-item.component';
import { SamaSidebarSearch } from './components/sama-sidebar-search/sama-sidebar-search.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		SamaSidebar,
		SamaSidebarChapter,
		SamaSidebarItem,
		SamaSidebarSearch
	],
	exports: [
		SamaSidebar,
		SamaSidebarChapter,
		SamaSidebarItem,
		SamaSidebarSearch
	]
})
export class SamaSidebarModule { }
