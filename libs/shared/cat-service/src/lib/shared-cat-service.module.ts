import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateCatService } from './private-cat.service';
import { CatService } from './cat.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    PrivateCatService,
    CatService
  ],
})
export class SharedCatServiceModule {}
