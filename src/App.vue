<!-- 컴포넌트 정의 및 호출하는 스크립트 단 -->
<script setup lang="ts">
/* 컴포넌트 호출 */
import BuyNow from '@core/components/BuyNow.vue'
</script>

<template>
  <!-- VApp과 VLayout은 vuetify에서 호출하는 컴포넌트 -->
  <VApp>
    <VLayout class="layout-wrapper layout-nav-type-vertical">
      <!-- RouterView는 components.d.ts에서 정의됨 -->
      <RouterView />
      <BuyNow />
    </VLayout>
  </VApp>
</template>
