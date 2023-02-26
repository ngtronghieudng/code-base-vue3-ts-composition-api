<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowLeft, ArrowRight, Connection } from '@element-plus/icons-vue'

const isCollapse = ref(false)

const handleCollapse = () => {
  isCollapse.value = !isCollapse.value
}

const isClose = ref(false)
const isCloseAnimation = ref(false)
const isOpenAnimation = ref(false)
const isOpen = ref(false)

const closeSideBar = () => {
  isCloseAnimation.value = true
  setTimeout(() => {
    isClose.value = true
  }, 300)
  isOpen.value = true
  setTimeout(() => {
    isCloseAnimation.value = false
  }, 500)
}

const openSideBar = () => {
  isOpenAnimation.value = true
  isClose.value = false
  setTimeout(() => {
    isOpenAnimation.value = false
  }, 500)
  isOpen.value = false
}
</script>

<template>
  <el-menu
    style="width: 100%"
    class="logo-mini-2"
    @click="openSideBar"
    :class="{ open: isOpen }"
  >
    <connection />
  </el-menu>

  <el-menu
    class="el-menu-vertical"
    :collapse="isCollapse"
    :class="{ 'close-animation': isCloseAnimation, close: isClose, 'open-animation': isOpenAnimation }"
  >
    <section>
      <el-menu-item
        index="1"
        class="logo-container"
      >
        <el-icon
          class="logo-mini"
          @click="closeSideBar"
        >
          <connection />
        </el-icon>

        <router-link :to="$constants.routePages.HOME">
          <connection class="logo" />
        </router-link>
      </el-menu-item>

      <div
        :class="[
          'tw-text-end tw-absolute',
          {
            'tw--mr-[33px] tw--top-[-38px] tw--right-[-18px]': !isCollapse,
            'tw--right-[18px] tw-mt-[-50px]': isCollapse,
          },
        ]"
        class="tw-relative tw-z-[1]"
      >
        <base-button
          :icon="isCollapse ? ArrowRight : ArrowLeft"
          type="default"
          class="tw-rounded-full tw-w-[35px] tw-h-[35px] tw-z-10 tw-bg-white"
          @click="handleCollapse"
        />
      </div>

      <el-menu-item
        index="2"
        class="dashboard"
      >
        <el-icon class="icon"><connection /></el-icon>
        <template #title>Dashboard</template>
      </el-menu-item>

      <router-link to="/">
        <el-menu-item
          index="3"
          class="create-wf"
        >
          <el-icon
            :label="false"
            class="icon"
          >
            <connection />
          </el-icon>
          <template #title>Create workflow</template>
        </el-menu-item>
      </router-link>

      <router-link to="/">
        <el-menu-item
          index="4"
          class="manage-wf"
        >
          <el-icon class="icon"><connection /></el-icon>
          <template #title>Manage Workflow</template>
        </el-menu-item>
      </router-link>

      <router-link to="/">
        <el-menu-item
          index="5"
          class="create-fb"
        >
          <el-icon class="icon"><connection /></el-icon>
          <template #title>Create Form Builder</template>
        </el-menu-item>
      </router-link>

      <router-link to="/">
        <el-menu-item
          index="6"
          class="manage-fb"
        >
          <el-icon class="icon"><connection /></el-icon>
          <template #title>Manage Form Builder</template>
        </el-menu-item>
      </router-link>
    </section>

    <section>
      <el-menu-item
        index="7"
        class="option"
      >
        <el-icon class="option-icon"><connection /></el-icon>
        <el-icon class="option-icon"><connection /></el-icon>
        <el-icon class="option-icon"><connection /></el-icon>
        <el-icon class="option-icon"><connection /></el-icon>
      </el-menu-item>
      <el-menu-item
        index="8"
        class="avatar"
      >
        <div class="wrap">
          <el-icon class="img"><connection /></el-icon>
          <div class="decription">
            <div class="name">Nguyen Trang</div>
            <div class="job">Product Desiger</div>
          </div>
        </div>
        <el-icon class="pro">
          <div class="pro-name">PRO</div>
          <div class="plush">+</div>
        </el-icon>
      </el-menu-item>
    </section>
  </el-menu>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/common/layouts/the-sidebar-v2.scss';
</style>
