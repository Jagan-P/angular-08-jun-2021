import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appCustomStructuralDirective]",
})
export class CustomStructuralDirectiveDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  @Input() set appCustomStructuralDirective(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (condition) {
      this.viewContainer.clear();
    }
  }
  
}
