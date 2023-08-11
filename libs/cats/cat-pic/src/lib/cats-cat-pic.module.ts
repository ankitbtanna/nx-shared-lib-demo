import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatPicComponent } from './cat-pic/cat-pic.component';
import { RouterModule } from '@angular/router';
import { SharedCatServiceModule } from '@nx-shared-lib-demo/shared/cat-service';
import { SharedButtonModule } from '@nx-shared-lib-demo/shared/button';

@NgModule({
  imports: [
    CommonModule,
    SharedCatServiceModule,
    SharedButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatPicComponent,
      },
    ]),
  ],
  declarations: [CatPicComponent],
})
export class CatsCatPicModule {}
