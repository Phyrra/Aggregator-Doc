import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'sama-chapter',
	templateUrl: './sama-chapter.component.html',
	styleUrls: ['./sama-chapter.component.scss']
})
export class SamaChapterComponent {
	@Input() title: string;
}
