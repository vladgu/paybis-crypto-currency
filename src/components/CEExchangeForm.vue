<script setup>
import { computed, ref } from 'vue'
import { BButton, BCard, BCol, BRow, BFormSelect, BFormInput, useToast } from 'bootstrap-vue-next'
import { useTimerStore } from '@/stores/timer.js'
import { useCurrenciesStore } from '@/stores/currencies.js'
import { capitalizeString } from '@/utils/formatStrings.js'
import { formatPrices } from '@/utils/formatPrices.js'
import CEExchangeHistoryModal from '@/components/CEExchangeHistoryModal.vue'

const currenciesStore = useCurrenciesStore()
const timerStore = useTimerStore()
const { create } = useToast()

const currenciesList = computed(() => Object.keys(currenciesStore.currencies))

const fromCurrency = ref(null)
const toCurrency = ref(null)
const currencyOptions = computed(() => [
  { value: null, text: 'Please select an option' },
  ...currenciesList.value.map((currency) => ({
    value: currency,
    text: capitalizeString(currency),
  })),
])
const fromValue = ref(null)
const toValue = computed(() => {
  const currencies = currenciesStore.currencies

  const fromPrice = currencies?.[fromCurrency.value]?.usd
  const toPrice = currencies?.[toCurrency.value]?.usd

  if (typeof fromPrice !== 'number' || typeof toPrice !== 'number') {
    return null
  }

  return formatPrices.format((fromPrice / toPrice) * fromValue.value)
})

const resetForm = () => {
  fromCurrency.value = null
  toCurrency.value = null
  fromValue.value = null
}

const exchangeDisabled = computed(
  () => !toValue.value || !fromValue.value || currenciesStore.isLoading,
)
const onExchange = () => {
  currenciesStore.saveExchange({
    timestamp: Date.now(),
    value: `${fromValue.value} ${capitalizeString(fromCurrency.value)} => ${toValue.value} ${capitalizeString(toCurrency.value)}`,
  })

  resetForm()

  create({
    title: 'Success',
    body: 'Exchange was successful',
    variant: 'success',
  })
}

const modalShown = ref(false)
</script>

<template>
  <b-card>
    <template #header>
      <div class="d-flex justify-content-between align-items-center">
        <span> Exchange calculator </span>
        <b-button
          :disabled="!currenciesStore.exchangesHistory.length"
          variant="outline-primary"
          size="sm"
          @click="modalShown = !modalShown"
        >
          Exchange history
        </b-button>
      </div>
    </template>
    <div>From currency</div>
    <b-row class="mb-2">
      <b-col md="6">
        <b-form-input
          v-model="fromValue"
          class="mb-md-0 mb-2"
          type="number"
          min="0"
          step="any"
          placeholder="Amount"
        />
      </b-col>
      <b-col md="6">
        <b-form-select v-model="fromCurrency" :options="currencyOptions" class="mb-md-0 mb-2" />
      </b-col>
    </b-row>
    <div>To currency</div>
    <b-row class="mb-4">
      <b-col md="6">
        <b-form-input v-model="toValue" class="mb-md-0 mb-2" placeholder="-" readonly />
      </b-col>
      <b-col md="6">
        <b-form-select v-model="toCurrency" :options="currencyOptions" class="mb-md-0 mb-2" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button
          class="w-100"
          variant="success"
          :disabled="exchangeDisabled"
          :loading="currenciesStore.isLoading"
          @click="onExchange"
        >
          Exchange
        </b-button>
      </b-col>
    </b-row>
    <template #footer>
      <span>
        Price is fixed for
        <i>{{ timerStore.remaining }}</i>
        seconds
      </span>
    </template>
  </b-card>
  <CEExchangeHistoryModal
    v-model="modalShown"
    :exchange-history="currenciesStore.exchangesHistory"
  />
</template>
