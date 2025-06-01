import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { invoke } from "@tauri-apps/api/core";

import { NgIconsModule } from '@ng-icons/core';
import { MainWindowService } from './core/service/main-window.service';
import { WindowsTitleComponent } from './components/title-bar/windows-title/windows-title.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    NgIconsModule,
    WindowsTitleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    public mainWindowService: MainWindowService
  ) {
    // 初始化主窗口样式
    this.mainWindowService.setTitle("Angular + Tauri"); // 设置窗口标题
    // 启用自定义标题栏
    this.mainWindowService.setCustomTitleBar(true);
    // 启用windows 11 窗口效果
    this.mainWindowService.setWindowsEffect('acrylic');
  }
  greetingMessage = "";

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }

  handleSelectEffect(value: string) {
    if (!['acrylic', 'mica', 'none', 'blur'].includes(value)) {
      alert('无效的效果');
    } else {
      this.mainWindowService.setWindowsEffect(value as 'acrylic' | 'mica' | 'none' | 'blur');
      console.log('effect:', value);
    }
  }
}
