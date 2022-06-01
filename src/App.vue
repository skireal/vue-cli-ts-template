<template>
  <div class="wrapper">
    <the-header></the-header>
    <div class="wrapper-content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script
  setup
  lang="ts"
>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
