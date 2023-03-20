import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MovementDirection } from 'src/app/common/emt-schema';
@Pipe({ name: 'direction' })
export class DirectionPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(direction: MovementDirection, ...args: any[]) {
    const name: string =
      direction === 'IN'
        ? 'bi-arrow-left-circle-fill'
        : 'bi-arrow-right-circle-fill';
    const color: string = direction === 'IN' ? 'text-success' : 'text-danger';
    const icon: string = `<i class='bi ${name} ${color}'></i>`;
    return this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.sanitizer.bypassSecurityTrustHtml(icon)
    );
  }
}
