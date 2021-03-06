import { Component } from '@angular/core';

import { SidebarChapter } from 'app/sidebar/interfaces/SidebarChapter.interface';

import { TopicService } from '../../services/TopicService.service';

@Component({
	selector: 'sama-app',
	templateUrl: './sama-app.component.html',
	styleUrls: ['./sama-app.component.scss']
})
export class SamaAppComponent {
	appTitle = 'Aggregator Doc';
	appVersion = 'v0.2.0';
	chapters: SidebarChapter[];

	constructor(topicService: TopicService) {
		this.chapters = topicService.getTopics();
	}
}
