import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('@nx-shared-lib-demo/core/shell').then(m => m.CoreShellModule)
      }
];
