import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'sama-app-title',
	templateUrl: './main/components/sama-app-title/sama-app-title.html'
})
export class SamaAppTitle {
	@Input() title:string;
}
