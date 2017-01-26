import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {
  WatchlistComponent,
  ContentComponent,
  NewsComponent
} from './index';

import { ChartModule } from './content/chart/chart.module';
import { InfoModule } from './content/info/info.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  imports: [
    SharedModule,
    ChartModule,
    InfoModule,
    SidebarModule
  ],
  declarations: [
    WatchlistComponent,
    ContentComponent,
    NewsComponent
  ]
})
export class WatchlistModule {
}
