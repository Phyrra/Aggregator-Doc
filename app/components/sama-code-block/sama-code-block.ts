import { Component } from '@angular/core';
import { ElementRef, AfterViewInit, ViewChild, Renderer } from '@angular/core';

@Component({
	selector: 'sama-code-block',
	templateUrl: './sama-code-block/sama-code-block.html'
})
export class SamaCodeBlock implements AfterViewInit {
	@ViewChild('content') content: ElementRef;

	constructor(private renderer: Renderer) { }
	
	ngAfterViewInit() {
		let element: any = this.content.nativeElement;
		let code: string = element.innerHTML;

		let lines: string[] = code.split('\n');
		let usefulLines: string[] = this.stripUselessLines(lines);

		let normalizedWhitespace: string[] = this.replaceLeadingTabs(usefulLines);
		let leadingWhitespace: string = this.getLeadingWhitespace(normalizedWhitespace);

		let unpaddedLines: string[] = this.unpadWhitespace(normalizedWhitespace, leadingWhitespace);
		let htmlWhitespaceLines: string[] = this.replaceLeadingWhitespace(unpaddedLines);

		let newHtml = htmlWhitespaceLines.map(line => {
			return '<div>' + this.highlightCode(line) + '</div>';
		});

		element.innerHTML = newHtml.join('');
	}

	private stripUselessLines(lines: string[]) : string[] {
		var firstIdx = 0;
		lines.some(line => {
			if (line.trim().length > 0) {
				return true;
			}

			++firstIdx;
			return false;
		});

		var lastIdx = 0;
		lines.slice(0).reverse().some(line => {
			if (line.trim().length > 0) {
				return true;
			}

			++lastIdx;
			return false;
		});

		return lines.slice(firstIdx, lines.length - lastIdx);
	}

	private getLeadingWhitespace(lines: string[]) : string {
		let nonEmptyLines: string[] = lines
			.filter(line => {
				return line.trim().length > 0;
			});

		if (nonEmptyLines.length === 0) {
			return '';
		}

		let firstNonEmptyLine: string = nonEmptyLines[0];

		return firstNonEmptyLine.match(/^\s+/)[0];
	}

	private unpadWhitespace(lines: string[], whitespace: string) : string[] {
		return lines.map(line => {
			return line.startsWith(whitespace) ?
				line.substring(whitespace.length) :
				line;
		});
	}

	private replaceLeadingTabs(lines: string[]) : string[] {
		return lines.map(line => {
			return line.replace(/^\s+/, match => {
				return match
					.replace(/\t/g, '    ');
			});
		});
	}

	private replaceLeadingWhitespace(lines: string[]) : string[] {
		return lines.map(line => {
			return line.replace(/^\s+/, match => {
				return match
					.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
					.replace(/\s/g, '&nbsp;');
			});
		});
	}

	static readonly KEYWORDS = [
		'function',
		'return',
		'if',
		'endif',
		'else',
		'for',
		'while',
		'break',
		'continue',
		'var'
	];

	private highlightCode(line: string) : string {
		SamaCodeBlock.KEYWORDS.forEach(function(keyword) {
			line = line.replace(new RegExp(keyword, 'g'), match => {
				return '<span class="keyword">' + match + '</span>';
			});
		});

		line = line
			.replace(/\b\d+\b/g, match => {
				return '<span class="number">' + match + '</span>';
			})
			.replace(/'.*?'/g, match => {
				return '<span class="string">' + match + '</span>';
			});

		return line;
	}
}
