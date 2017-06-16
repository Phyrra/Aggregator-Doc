import { Component } from '@angular/core';

import { SidebarChapter } from '../../data/Sidebar';

import { TopicService } from '../../services/TopicService';

@Component({
	selector: 'sama-app',
	templateUrl: './sama-app/sama-app.html'
})
export class SamaApp {
	appTitle:string = 'Aggregator Doc';
	chapters: SidebarChapter[];

	constructor(topicService: TopicService) {
		this.chapters = topicService.getTopics();
	}
}
