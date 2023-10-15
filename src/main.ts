/* eslint-disable import/order */
// 아이콘 번들
import '@/@iconify/icons-bundle'
// 최상단 앱
import App from '@/App.vue'
// 플러그인 호출
import vuetify from '@/plugins/vuetify'
// 폰트 불러오기
import { loadFonts } from '@/plugins/webfontloader'
// 라우터
import router from '@/router'
// 세부 scss 호출
import '@/styles/styles.scss'
// 핵심 scss 호출
import '@core/scss/index.scss'
// pinia 인스턴스 호출
import { createPinia } from 'pinia'
// app 생성
import { createApp } from 'vue'

// 폰트 호출
loadFonts()

// 앱 생성
const app = createApp(App)

// 플러그인 사용
app.use(vuetify)
// pinia === store 생성
app.use(createPinia())
// router 사용
app.use(router)

// #app에 마운트
app.mount('#app')
