<!-- 우측 하단에 떠 있는 Upgrade to Pro 컴포넌트 -->
<template>
  <!-- VBtn은 vuetify 내부 컴포넌트, 즉 mui == vuetify -->
  <!--
    VBtn prop
    color?: string;
    class?: unknown;
    href?: string | undefined;
    target: string;
    rel: string;
  -->
  <VBtn
    color="error"
    class="product-buy-now"
    href="https://themeselection.com/item/materio-vuetify-vuejs-admin-template/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Upgrade to Pro
  </VBtn>
</template>

<!-- 스타일 정의하는 style 단, 언어를 scss로 처리하고 scoped를 통해 현 컴포넌트 내부만 스타일링 함 -->
<style lang="scss" scoped>
// 클래스
.product-buy-now {
  // 포지션 fixed
  position: fixed;
  // z-index
  z-index: 4;
  /* inset-block-end CSS 속성은 요소의 논리 블록 엔드 오프셋을 정의하며
  요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 오프셋에 매핑되며
  쓰기 모드, 방향, 텍스트 방향에 대해 정의된 값에 따라 상단, 오른쪽, 하단 또는 왼쪽 속성에 해당합니다. */
  inset-block-end: 5%;
  /* inset-in-end CSS 속성은 요소의 논리 인라인 end inset을 정의하며
  요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 inset에 매핑되며
  쓰기 모드, 방향, 텍스트 방향에 대해 정의된 값에 따라 상단, 오른쪽, 하단 또는 왼쪽 속성에 해당합니다. */
  inset-inline-end: 79px;

  // 동시에 v-application 클래스 자식이며 .product-buy-now와 .v-btn.v-btn--elevated를 충족할 때(& 연산 때문에)
  .v-application &.v-btn.v-btn--elevated {
    // 박스 그림자
    box-shadow: 0 1px 20px 1px rgb(var(--v-theme-error)) !important;

    // 호버 시 그림자 없애기
    &:hover {
      box-shadow: none !important;
    }
  }
}
</style>
