import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightSearchPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, args: string | undefined): SafeHtml {
    if (!args) {
      return value;
    }

    const regex = new RegExp(args, 'gi');
    const match = value.match(regex);

    if (!match) {
      return value;
    }

    const highlightedValue = value.replace(
      regex,
      `<span class='highlight'>${match[0]}</span>`
    );

    return this.sanitizer.bypassSecurityTrustHtml(highlightedValue);
  }
}
