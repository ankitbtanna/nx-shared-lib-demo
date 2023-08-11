import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
      },
      {
        path: 'home',
        loadChildren: () => import('@nx-shared-lib-demo/core/home').then(m => m.CoreHomeModule)
      },
      {
        path: 'home/dog',
        loadChildren: () => import('@nx-shared-lib-demo/dogs/dog-pic').then(m => m.DogsDogPicModule)
      },
      {
        path: 'home/cat',
        loadChildren: () => import('@nx-shared-lib-demo/cats/cat-pic').then(m => m.CatsCatPicModule)
      },
    ]),
  ],
  declarations: [ShellComponent],
})
export class CoreShellModule {}
