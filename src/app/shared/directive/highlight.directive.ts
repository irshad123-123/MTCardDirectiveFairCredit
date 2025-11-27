import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private _eleRef : ElementRef, private _render : Renderer2) { }

  ngOnInit(): void {
    this._render.addClass(this._eleRef.nativeElement, 'alert')
    this._render.addClass(this._eleRef.nativeElement,'alert-info')

    setTimeout(() => {
    this._render.addClass(this._eleRef.nativeElement, 'alert')
    this._render.addClass(this._eleRef.nativeElement,'alert-warning')
    this._render.setStyle(this._eleRef.nativeElement, 'border', '3px dashed blue')
  }, 3000);
  }

}
