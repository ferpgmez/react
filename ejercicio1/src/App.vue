<script setup>
    import { ref, reactive } from 'vue'
    const counter = reactive({count: 0});
    const message = ref('Hello World');
</script>

<template>
    <h1>{{ message }}</h1>
    <h2>Counter: {{ counter.count }}</h2>
</template>
