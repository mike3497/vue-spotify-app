<template>
  <div class="p-4 rounded-lg" :class="containerClasses">
    <span class="me-2">
      <i :class="iconClass"></i>
    </span>
    <span>{{ type }}: </span>
    <span>{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { AlertType } from '@/types/alertType';

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<AlertType>,
    required: true
  }
});

const containerClasses = computed<string>(() => {
  switch (props.type) {
    case AlertType.ERROR:
      return 'bg-red-200 text-red-900';
    case AlertType.SUCCESS:
      return 'bg-green-200 text-green-900';
    case AlertType.WARNING:
      return 'bg-yellow-200 text-yellow-900';
    default:
      return '';
  }
});

const iconClass = computed<string>(() => {
  switch (props.type) {
    case AlertType.ERROR:
      return 'fa-solid fa-circle-exclamation';
    case AlertType.SUCCESS:
      return 'fa-solid fa-circle-check';
    case AlertType.WARNING:
      return 'fa-solid fa-triangle-exclamation';
    default:
      return '';
  }
});
</script>
