<script setup lang="ts">
import TheSidebarV2 from '@/components/layouts/TheSidebarV2.vue'
</script>

<template>
  <el-container>
    <el-container>
      <el-aside>
        <the-sidebar-v2 />
      </el-aside>

      <el-main class="tw-bg-[#f2f2f2] tw-p-0">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
