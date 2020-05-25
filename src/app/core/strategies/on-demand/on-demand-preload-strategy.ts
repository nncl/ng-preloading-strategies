import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { OnDemandPreloadOptions, OnDemandPreloadService } from './on-demand-preload.service';
import { mergeMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OnDemandPreloadStrategy implements PreloadingStrategy {
  private preloadOnDemand$: Observable<OnDemandPreloadOptions>;

  constructor(private preloadOnDemandService: OnDemandPreloadService) {
    this.preloadOnDemand$ = this.preloadOnDemandService.state$;
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.preloadOnDemand$.pipe(
      /**
       * Using mergeMap because order is not important,
       * and we do not want to cancel previous one.
       * switchMap could cancel previous call.
       * concatMap would make the multiple calls wait for each other.
       */

      mergeMap(preloadOptions => {
        const shouldPreload = this.preloadCheck(route, preloadOptions);
        if (shouldPreload) {
          console.log(`Preloading - On Demand ${route.path}`);
        }

        return shouldPreload ? load() : EMPTY;
      })
    );
  }

  private preloadCheck(route: Route, preloadOptions: OnDemandPreloadOptions) {
    return (
      // route?.data?.preload &&
      [route.path, '*'].includes(preloadOptions.routePath) && preloadOptions.preload
    )
  }
}
