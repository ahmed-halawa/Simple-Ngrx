import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollableDirective } from './directives/scrollable.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ScrollableDirective],
  exports: [ScrollableDirective]
})
export class SharedModule {}
