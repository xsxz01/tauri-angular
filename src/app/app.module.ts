import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { NgIconsModule } from '@ng-icons/core';
import * as bootstrapIcons from '@ng-icons/bootstrap-icons';
import * as heroIcons from '@ng-icons/heroicons';
import * as materialIcons from '@ng-icons/material-icons';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        NgIconsModule.withIcons({
            ...bootstrapIcons,
            ...heroIcons,
            ...materialIcons
        }),
        // 如果已有路由配置可在此添加
        RouterModule.forRoot(routes)
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
