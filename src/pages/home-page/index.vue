<script setup lang="ts">
import { useConstants } from '@/composables/constants'
import { computed } from 'vue'

const constants = useConstants()

const test = computed(() => {
  return constants.routePages.LOGIN
})
</script>

<template>{{ $constants.routePages.HOME }} {{ test }}</template>
