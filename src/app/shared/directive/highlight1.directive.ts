import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight1]'
})
export class Highlight1Directive implements OnInit {

  constructor(private _eleRef : ElementRef, private _render : Renderer2) { }
  ngOnInit(): void {
    this._render.setStyle(this._eleRef.nativeElement, 'border-radius',  '20px')
    this._render.setStyle(this._eleRef.nativeElement, 'border',  '2px solid red')
    this._render.setStyle(this._eleRef.nativeElement, 'padding',  '20px')

    setTimeout(() => {
      this._render.addClass(this._eleRef.nativeElement, 'alert')
      this._render.addClass(this._eleRef.nativeElement, 'alert-danger')
    this._render.setStyle(this._eleRef.nativeElement, 'border-radius',  '0')

    }, 3000);
  }
}
