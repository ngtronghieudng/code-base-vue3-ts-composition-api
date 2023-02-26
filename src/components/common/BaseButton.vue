<script setup lang="ts">
withDefaults(
  defineProps<{
    type: String
  }>(),
  {
    type: () => 'primary',
  }
)
</script>

<template>
  <el-button
    v-bind="$attrs"
    :type="type"
    class="base-button"
  >
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
      v-slot:[slot]
    >
      <slot :name="slot"></slot>
    </template>
  </el-button>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/common/components/base-button.scss';
</style>
