import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'sama-topic',
	templateUrl: './sama-topic/sama-topic.html'
})
export class SamaTopic {
	@Input() title:string;
}
