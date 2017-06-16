import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'sama-chapter',
	templateUrl: './sama-chapter/sama-chapter.html'
})
export class SamaChapter {
	@Input() title:string;
}
