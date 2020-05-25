import { Component } from '@angular/core';
import { OnDemandPreloadService } from './core/strategies/on-demand/on-demand-preload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private preloadOnDemandService: OnDemandPreloadService) {
  }

  preloadAll() {
    this.preloadOnDemandService.startPreload('*');
  }

  preloadBundle(routePath) {
    this.preloadOnDemandService.startPreload(routePath);
  }
}
