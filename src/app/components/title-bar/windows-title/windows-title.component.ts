import { Component } from '@angular/core';
import { MainWindowService } from '../../../core/service/main-window.service';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-windows-title',
  imports: [NgIconsModule],
  templateUrl: './windows-title.component.html',
  styleUrl: './windows-title.component.css'
})
export class WindowsTitleComponent {
  constructor(
    public windowService: MainWindowService
  ){ }
  
  // 当前窗口最大化状态
  isMaximized = false;

  async handleMaximize() {
    this.isMaximized = !this.isMaximized;
    await this.windowService.toggleMaximize();
  }
}
