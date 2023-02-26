<script lang="ts">
interface OptionsProp {
  label: string
  value: any
}
</script>

<script setup lang="ts">
withDefaults(
  defineProps<{
    options: OptionsProp[]
  }>(),
  {
    options: () => [],
  }
)
</script>

<template>
  <el-radio-group v-bind="$attrs">
    <el-radio v-for="item in options" :key="item.value" :label="item.label">{{
      item.label
    }}</el-radio>
  </el-radio-group>
</template>
