import {
  Directive,
  ElementRef,
  Pipe,
  PipeTransform,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Pipe({ name: 'boolean' })
export class BooleanPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: boolean, ...args: any[]) {
    const className: string = value === true ? 'text-success' : 'text-danger';
    const icon: string = `<i class='bi bi-circle-fill ${className}'></i>`;
    return this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.sanitizer.bypassSecurityTrustHtml(icon)
    );
  }
}
