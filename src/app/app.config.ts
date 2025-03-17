import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
// 导入全部图标
import * as bootstrapIcons from '@ng-icons/bootstrap-icons';
import * as heroiconsOutline from '@ng-icons/heroicons/outline';
import * as heroiconsSolid from '@ng-icons/heroicons/solid';
// 导入路由
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      NgIconsModule.withIcons({
        ...bootstrapIcons,
        ...heroiconsOutline,
        ...heroiconsSolid,
      }),
    )
  ]
};
