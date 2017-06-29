import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'sama-topic',
	templateUrl: './content/components/sama-topic/sama-topic.html'
})
export class SamaTopic {
	@Input() title:string;
}
