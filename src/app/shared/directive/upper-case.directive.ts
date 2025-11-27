import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class UpperCaseDirective implements OnInit {

  constructor(private _eleRef : ElementRef, private _render : Renderer2) { }
  ngOnInit(): void {
    
  }
  @HostListener('keyup')
  onUppercase(){
    let val = this._render.selectRootElement(this._eleRef.nativeElement).value
    this._render.selectRootElement(this._eleRef.nativeElement).value = val.toUpperCase()
  }
}


