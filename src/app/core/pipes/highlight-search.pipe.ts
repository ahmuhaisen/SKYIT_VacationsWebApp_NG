import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightSearchPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(value: string, term: string | undefined): SafeHtml {
    if (!term) return value;

    const regex = new RegExp(term, 'gi');
    const match = value.match(regex);

    if (!match) return value;

    const highlightedValue = value.replace(
      regex,
      `<span class='highlight'>${match[0]}</span>`
    );

    return this.sanitizer.bypassSecurityTrustHtml(highlightedValue);
  }
}
