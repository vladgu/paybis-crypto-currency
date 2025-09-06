<script setup>
import { BApp, BToastOrchestrator } from 'bootstrap-vue-next'
import CEHeader from '@/components/CEHeader.vue'
import CEMainWrapper from '@/components/CEMainWrapper.vue'
import CEExchangeForm from '@/components/CEExchangeForm.vue'
import CECurrenciesList from '@/components/CECurrenciesList.vue'
</script>

<template>
  <b-app>
    <b-toast-orchestrator />
    <CEHeader />
    <CEMainWrapper>
      <template #left-side>
        <CECurrenciesList />
      </template>
      <template #right-side>
        <CEExchangeForm />
      </template>
    </CEMainWrapper>
  </b-app>
</template>
