import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SamaSidebarComponent } from './components/sama-sidebar/sama-sidebar.component';
import { SamaSidebarChapterComponent } from './components/sama-sidebar-chapter/sama-sidebar-chapter.component';
import { SamaSidebarItemComponent } from './components/sama-sidebar-item/sama-sidebar-item.component';
import { SamaSidebarSearchComponent } from './components/sama-sidebar-search/sama-sidebar-search.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		SamaSidebarComponent,
		SamaSidebarChapterComponent,
		SamaSidebarItemComponent,
		SamaSidebarSearchComponent
	],
	exports: [
		SamaSidebarComponent,
		SamaSidebarChapterComponent,
		SamaSidebarItemComponent,
		SamaSidebarSearchComponent
	]
})
export class SamaSidebarModule { }
