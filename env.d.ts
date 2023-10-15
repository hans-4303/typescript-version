/// <reference path="auto-imports.d.ts" />
/// <reference path="components.d.ts" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

// env 설정 파일: 라우터 설정에 사용되었음

import 'vue-router'

// vue-router 정의
declare module 'vue-router' {
  // RouteMeta 인터페이스 정의: 액션, 제목, 레이아웃 래퍼 클래스
  interface RouteMeta {
    action?: string
    subject?: string
    layoutWrapperClasses?: string
  }
}
