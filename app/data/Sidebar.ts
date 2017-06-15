export interface SidebarItem {
	id: string;
	title: string;
}

export interface SidebarChapter {
	title: string;
	items: SidebarItem[];
}