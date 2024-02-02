import { createApp } from 'vue' //vue가 가지고 있는 createApp 함수
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app') //App이라는 컴포넌트에 mount(아이디가 app)인건 public-index.html에 div에 있음
//mount: 화면에 보여주는 거 => App.vue(템플릿)가지고 div #app위치에 그려주겠다 
