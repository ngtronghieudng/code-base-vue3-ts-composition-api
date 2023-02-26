<template>
  <h4 class="tw-font-semibold tw-text-[#000]">
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
    >
      <slot :name="slot"></slot>
    </template>
  </h4>
</template>
