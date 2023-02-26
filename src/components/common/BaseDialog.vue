<script setup lang="ts">
withDefaults(
  defineProps<{
    groupButton: any[]
  }>(),
  {
    groupButton: () => [],
  }
)
</script>

<template>
  <el-dialog v-bind="$attrs">
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
      v-slot:[slot]
    >
      <slot :name="slot"></slot>
    </template>

    <template #footer>
      <span class="dialog-footer">
        <template
          v-for="(element, index) in groupButton"
          :key="index"
        >
          <el-button
            @click="element.onClick"
            :type="element.type"
          >
            {{ element.text }}
          </el-button>
        </template>
      </span>
    </template>
  </el-dialog>
</template>
