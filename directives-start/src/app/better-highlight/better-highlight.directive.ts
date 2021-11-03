import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    /*this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');*/
    //
    this.backgroundColor = 'indigo';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
   /* this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');*/
    //
    this.backgroundColor = 'transparent';
  }
}
