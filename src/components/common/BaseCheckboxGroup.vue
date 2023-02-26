<script lang="ts">
interface OptionsProp {
  id: number
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
  <el-checkbox-group v-bind="$attrs">
    <el-checkbox
      v-for="item in options"
      :key="item.id"
      :label="item.label"
    />
  </el-checkbox-group>
</template>
