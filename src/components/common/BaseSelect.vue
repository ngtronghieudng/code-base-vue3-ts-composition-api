<script lang="ts">
interface OptionsProp {
  id: number
  label?: string
  name?: string
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
  <el-select v-bind="$attrs">
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.label ?? item.name"
      :value="item"
    />
  </el-select>
</template>
