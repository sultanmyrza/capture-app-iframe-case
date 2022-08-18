import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

const imports = [MaterialModule];

@NgModule({
  declarations: [],
  imports,
  exports: [...imports],
})
export class SharedModule {}
