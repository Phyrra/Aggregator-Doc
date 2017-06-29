import { Component } from '@angular/core';
import { ElementRef, AfterViewInit, ViewChild, Renderer } from '@angular/core';

@Component({
	selector: 'sama-code-block',
	templateUrl: './code/components/sama-code-block/sama-code-block.html'
})
export class SamaCodeBlock implements AfterViewInit {
	@ViewChild('content') content: ElementRef;

	constructor(private renderer: Renderer) { }

	ngAfterViewInit() {
		let element: any = this.content.nativeElement;
		let code: string = element.innerHTML;

		let lines: string[] = code.split('\n');

		let normalizedWhitespace: string[] = this.stripUselessLines(lines)
			.map(this.replaceLeadingTabs);

		let leadingWhitespace: string = this.getLeadingWhitespace(normalizedWhitespace);

		let newHtml: string = normalizedWhitespace
			.map(line => this.unpadWhitespace(line, leadingWhitespace))
			.map(line => this.replaceLeadingWhitespace(line))
			.map(line => this.highlightCode(line))
			.map((line, idx) => this.asCodeLine(line, idx, normalizedWhitespace.length))
			.join('');

		element.innerHTML = newHtml;
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

	private unpadWhitespace(line: string, whitespace: string) : string {
		return line.startsWith(whitespace) ?
			line.substring(whitespace.length) :
			line;
	}

	private replaceLeadingTabs(line: string) : string {
		return line.replace(/^\s+/, match => {
			return match
				.replace(/\t/g, '    ');
		});
	}

	private replaceLeadingWhitespace(line: string) : string {
		return line.replace(/^\s+/, match => {
			return match
				.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
				.replace(/\s/g, '&nbsp;');
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

	private highlightKeywords(line: string) : string {
		SamaCodeBlock.KEYWORDS.forEach(function(keyword) {
			line = line.replace(new RegExp(keyword, 'g'), match => {
				return '<span class="keyword">' + match + '</span>';
			});
		});

		return line;
	}

	private highlightNumbers(line: string) : string {
		return line
			.replace(/\b\d+\b/g, match => {
				return '<span class="number">' + match + '</span>';
			})
	}

	private highlightStrings(line: string) : string {
		return line
			.replace(/'.*?'/g, match => {
				return '<span class="string">' + match + '</span>';
			});
	}

	private highlightCode(line: string) : string {
		if (line.trim().length === 0) {
			return '&nbsp;';
		}

		var commentIdx = line.indexOf('//');

		var code;
		var comment;
		if (commentIdx === -1) {
			code = line;
			comment = '';
		} else {
			code = line.substring(0, commentIdx);
			comment = '<span class="comment">' + line.substring(commentIdx) + '</span>';
		}

		code = this.highlightKeywords(code);
		code = this.highlightNumbers(code);
		code = this.highlightStrings(code);

		return code + comment;
	}

	private leftPad(i: number, n: number) : string {
		var s = i.toString();

		for (var j = s.length; j <= n; ++j) {
			s = '&nbsp;' + s;
		}

		return s;
	}

	private asCodeLine(line: string, idx: number, maxLines: number) : string {
		var lineNumber: string;
		if (maxLines > 1) {
			lineNumber = '<span class="line-number">' + this.leftPad(idx + 1, maxLines.toString().length) + '</span>';
		} else {
			lineNumber = '';
		}

		var codeLine: string = '<span class="code-line">' + line + '</span>';

		return '<div>' + lineNumber + codeLine + '</div>';
	}
}