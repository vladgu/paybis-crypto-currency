<script setup>
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'
</script>

<template>
  <main>
    <b-container>
      <b-row class="my-md-4 my-2">
        <b-col md="6" class="mb-md-0 mb-2">
          <slot name="left-side"></slot>
        </b-col>
        <b-col md="6" class="mb-md-0 mb-2">
          <slot name="right-side"></slot>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>
