import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductGridComponent,
    HelpComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductGridComponent,
    HelpComponent,
  ],
})
export class SharedModule {}
