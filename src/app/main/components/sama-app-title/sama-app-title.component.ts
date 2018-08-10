import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'sama-app-title',
	templateUrl: './sama-app-title.component.html',
	styleUrls: ['./sama-app-title.component.scss']
})
export class SamaAppTitleComponent {
	@Input() title: string;
	@Input() version: string;
}
