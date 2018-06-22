import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})

export class SafePipe implements PipeTransform
{
  constructor(private ssanitizer: DomSanitizer)
  {

  }

  transform(url)
  {
    return this.ssanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
