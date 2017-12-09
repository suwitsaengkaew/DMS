import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(private el: ElementRef) {
       //el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseenter') onmouseenter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onmouseleave() {
        this.highlight(null);
    }

    private highlight (color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}


@Directive({ selector: '[dxselection]'})
export class HighlightSelection {
    constructor(private el: ElementRef) {}
    @HostListener('mouseenter') onmouseenter() {
        this.highlight('red');
    }

    @HostListener('mouseleave') onmouseleave() {
        this.highlight(null);
    }

    private highlight (color: string) {
        this.el.nativeElement.style.border = color;
    }
}