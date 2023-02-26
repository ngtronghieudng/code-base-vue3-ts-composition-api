<template>
  <span>
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
    >
      <slot :name="slot"></slot>
    </template>
  </span>
</template>
