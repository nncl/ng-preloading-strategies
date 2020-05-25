import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading, PreloadAllModules } from '@angular/router';
import { SignComponent } from './pages/sign/sign.component';
import { OptInPreloadStrategy } from './core/strategies/opt-in/opt-in-preload-strategy';
import { NetworkAwarePreloadStrategy } from './core/strategies/network/network-aware-preload-strategy';
import { OnDemandPreloadStrategy } from './core/strategies/on-demand/on-demand-preload-strategy';

const routes: Routes = [
  {
    path: '',
    component: SignComponent
  },
  {
    path: 'pokemons',
    loadChildren: () => import('./pages/pokemons/pokemons.module').then(m => m.PokemonsModule),
    data: { preload: true }
  },
  { path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      /**
       * From https://github.com/johnpapa/angular-preload-and-interceptors
       * Preloading strategies:
       *  - https://angular.io/guide/router#custom-preloading-strategy
       *
       * NoPreloading
       *  - No bundles will preload
       *  - built-in strategy
       *
       * PreloadAllModules
       *  - All bundles will preload, automatically
       *  - built-in strategy
       *  - https://dev.to/angular/preload-all-angular-bundles-1b6l
       *
       * OptInPreloadStrategy
       *  - set data.preload to true/false in the route configuration
       *  - custom strategy
       *  - https://dev.to/angular/you-pick-which-angular-bundles-to-preload-5l9
       *
       * NetworkAwarePreloadStrategy
       *  - Customize which connections types to avoid
       *    ['slow-2g', '2g', '3g', '4g' ]
       *  - custom strategy
       *  - https://dev.to/angular/preload-angular-bundles-when-good-network-connectivity-is-detected-j3a
       *
       * OnDemandPreloadStrategy
       *  - Only preload when a specific event occurs.
       *  - You control when it preloads and what preloads.
       *    - Preload everything
       *      this.preloadOnDemandService.startPreload('*');
       *    - Preload a specific bundle
       *      this.preloadOnDemandService.startPreload(routePath);
       *  - custom strategy
       *  - https://dev.to/angular/predictive-preloading-strategy-for-your-angular-bundles-4bgl
       *
       * QuickLinkStrategy
       *  - Looks for links on the viewable page.
       *  - If they lead to a module, it preloads it (if not already loaded).
       *  - npm i ngx-quicklink --save
       *  - https://github.com/mgechev/ngx-quicklink
       */
      routes,
      {
        // preloadingStrategy: NoPreloading, // No preloading at all
        // preloadingStrategy: PreloadAllModules, // Preload all modules
        // preloadingStrategy: OptInPreloadStrategy, // Pick modules to preload
        // preloadingStrategy: NetworkAwarePreloadStrategy, // Preload only on fast network
        preloadingStrategy: OnDemandPreloadStrategy, // Preload when a user has a specific behavior
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
