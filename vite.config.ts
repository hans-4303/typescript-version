/* 플러그인 함수 호출: 플러그인 반환 */
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
/* 플러그인 아닌 함수 호출 */
import AutoImport from 'unplugin-auto-import/vite'
/* 컴포넌트 정의하고 옵션 대입하여 플러그인 및 API 반환 */
import Components from 'unplugin-vue-components/vite'
/* 옵션 정의하고 옵션 대입하여 플러그인 반환 */
import DefineOptions from 'unplugin-vue-define-options/vite'
/* url 모듈에서 함수 호출하고 URL 받아서 문자열 반환 */
import { fileURLToPath } from 'url'
/* vite 앱 전체에 대한 설정, config 받아서 UserConfigExport를 반환하고 앱에서 사용하는 걸로 추정 */
import { defineConfig } from 'vite'
/* vite 플러그인들 호출 */
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  /* 플러그인 정의, 내부 옵션은 모두 Plugin 타입 */
  plugins: [
    vue(),
    vueJsx(),

    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      styles: {
        configFile: 'src/styles/variables/_vuetify.scss',
      },
    }),
    Pages({}),
    Layouts(),
    Components({
      // 컴포넌트를 찾을 경로
      dirs: ['src/@core/components'],
      // 글로벌 컴포넌트 정의 생성?
      dts: true,
    }),
    // 자동 Import??
    AutoImport({
      // import 할 패키지들 정의
      imports: ['vue', 'vue-router', '@vueuse/core', 'vue-i18n', 'pinia'],
      // vue 템플릿을 자동 import
      vueTemplate: true,
    }),
    DefineOptions(),
  ],
  // 전역 변수를 넣을 란으로 추정, dev 혹은 build 시 작동할 거라 보임
  define: { 'process.env': {} },
  // 구성 해결
  resolve: {
    // 경로에 대한 별칭
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/@layouts', import.meta.url)),
      '@configured-variables': fileURLToPath(new URL('./src/styles/variables/_template.scss', import.meta.url)),
      '@axios': fileURLToPath(new URL('./src/plugins/axios', import.meta.url)),
      'apexcharts': fileURLToPath(new URL('node_modules/apexcharts-clevision', import.meta.url)),
    },
  },
  // 빌드 시 옵션
  build: {
    // 청크 크기 경고 제한을 조정합니다(kbs).
    chunkSizeWarningLimit: 5000,
  },
  // 의존성 최적화?
  optimizeDeps: {
    // 최적화 제외
    exclude: ['vuetify'],
    /* 기본적으로 Vite는 인덱스.html을 크롤링하여 사전 번들링해야 하는 종속성을 탐지합니다.
    build.rollupOptions.input이 지정된 경우 Vite는 대신 해당 진입 지점을 크롤링합니다. */
    entries: [
      './src/**/*.vue',
    ],
  },
})
