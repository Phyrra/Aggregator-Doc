import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'sama-topic',
	templateUrl: './sama-topic.component.html',
	styleUrls: ['./sama-topic.component.scss']
})
export class SamaTopic {
	@Input() title: string;
}
