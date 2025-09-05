<script setup>
import { onMounted } from 'vue'
import CEHeader from '@/components/CEHeader.vue'
import CEMainWrapper from '@/components/CEMainWrapper.vue'
import CEExchangeForm from '@/components/CEExchangeForm.vue'
import { useCurrenciesStore } from '@/stores/currencies.js'
import CECurrenciesList from '@/components/CECurrenciesList.vue'

const currenciesStore = useCurrenciesStore()

onMounted(() => {
  currenciesStore.fetchCurrencies()
})
</script>

<template>
  <CEHeader />
  <CEMainWrapper>
    <template #left-side>
      <CECurrenciesList />
    </template>
    <template #right-side>
      <CEExchangeForm />
    </template>
  </CEMainWrapper>
</template>
