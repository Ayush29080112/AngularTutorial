import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor:string ='transparent'

  @Input() defaultColor:string ='transparent'
  @Input() highlightColor:string= 'blue'
  constructor(private elRef:ElementRef,private renderer: Renderer2) { }
  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseover(){
    // this.renderer.setStyle(this.elRef.nativeElement,"background-color",'blue')
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.elRef.nativeElement,"background-color",'transparent')
    this.backgroundColor = this.defaultColor
    
  }
}
