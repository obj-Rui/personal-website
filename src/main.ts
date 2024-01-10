import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupRouter } from '/@/router';
import 'virtual:uno.css';
import StarportPlugin from 'vue-starport';
import 'vfonts/Lato.css';
// 等宽字体
import 'vfonts/FiraCode.css';

function bootstrap() {
  // 创建应用实例
  const app = createApp(App);
  app.use(StarportPlugin());
  // 配置路由
  setupRouter(app);
  // 挂载应用
  app.mount('#app', true);
}
bootstrap();
