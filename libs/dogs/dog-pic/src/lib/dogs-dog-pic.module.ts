import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogPicComponent } from './dog-pic/dog-pic.component';
import { RouterModule } from '@angular/router';
import { SharedDogServiceModule } from '@nx-shared-lib-demo/shared/dog-service';
import { SharedButtonModule } from '@nx-shared-lib-demo/shared/button';

@NgModule({
  imports: [
    CommonModule,
    SharedButtonModule,
    SharedDogServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: DogPicComponent,
      },
    ]),
  ],
  declarations: [DogPicComponent],
})
export class DogsDogPicModule {}
