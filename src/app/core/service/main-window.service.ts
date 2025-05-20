import { Injectable, signal } from '@angular/core';
import { Effect, getCurrentWindow, type PhysicalPosition, type PhysicalSize } from '@tauri-apps/api/window';

@Injectable({
    providedIn: 'root'
})
export class MainWindowService {
    private appWindow = getCurrentWindow();
    // 是否启动自定义标题栏
    isCustomTitleBar = signal(false);
    // 非最大化状态下的窗口大小和位置
    private windowSize?: PhysicalSize;
    private windowPosition?: PhysicalPosition;

    // 设置自定义标题栏
    async setCustomTitleBar(isCustomTitleBar: boolean) {
        try {
            await this.appWindow.setDecorations(!isCustomTitleBar);
            this.isCustomTitleBar.set(isCustomTitleBar);
        } catch (error) {
            console.error('Set custom title bar failed:', error);
        }
    }
    // 最小化窗口
    async minimize() {
        try {
            await this.appWindow.minimize();
        } catch (error) {
            console.error('Window minimize failed:', error);
        }
    }

    // 最大化/取消最大化切换
    async toggleMaximize() {
        try {
            const isMaximized = await this.appWindow.isMaximized();
            if (isMaximized) {
                await this.appWindow.unmaximize();
                // 尝试恢复到之前的大小和位置
                // debug output
                console.log('windowSize:', this.windowSize);
                console.log('windowPosition:', this.windowPosition);
                if(this.windowSize) {
                    await this.appWindow.setSize(this.windowSize);
                }
                if(this.windowPosition) {
                    await this.appWindow.setPosition(this.windowPosition);
                }
            } else {
                // 记住当前窗口大小和位置
                this.windowPosition = await this.appWindow.outerPosition();
                this.windowSize = await this.appWindow.outerSize();
                await this.appWindow.maximize();
            }
        } catch (error) {
            console.error('Window maximize toggle failed:', error);
        }
    }

    // 关闭窗口
    async close() {
        try {
            await this.appWindow.close();
        } catch (error) {
            console.error('Window close failed:', error);
        }
    }

    // 设置窗口标题
    async setTitle(title: string) {
        try {
            await this.appWindow.setTitle(title);
        } catch (error) {
            console.error('Set window title failed:', error);
        }
    }

    // 设置windows 11 窗口效果
    async setWindowsEffect(effect: 'mica' | 'blur' | 'acrylic' | 'none') {
        try {
            const effects: Effect[] = [];
            switch (effect) {
                case 'mica':
                    effects.push(Effect.Mica);
                    break;
                case 'blur':
                    effects.push(Effect.Blur);
                    break;
                case 'acrylic':
                    effects.push(Effect.Acrylic);
                    break;
                case 'none':
                    break; 
            }
            await this.appWindow.setEffects({
                effects
            })
        } catch (error) {
            console.error('Set windows effect failed:', error);
        }
    }
}