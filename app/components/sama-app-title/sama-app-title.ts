import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'sama-app-title',
	templateUrl: './sama-app-title.html'
})
export class SamaAppTitle {
	@Input() title:string;
}
