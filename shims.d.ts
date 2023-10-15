/* 모듈 정의 d.ts 파일 */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  
  const component: DefineComponent<{}, {}, any>
  export default component
}
