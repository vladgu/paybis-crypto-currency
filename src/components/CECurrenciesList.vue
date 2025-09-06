<script setup>
import { computed, ref } from 'vue'
import { BButton, BCard, BOverlay } from 'bootstrap-vue-next'
import { useCurrenciesStore } from '@/stores/currencies.js'
import { useTimerStore } from '@/stores/timer.js'
import CECurrencyListItem from '@/components/CECurrencyListItem.vue'
import CERatesHistoryModal from '@/components/CERatesHistoryModal.vue'

const currenciesStore = useCurrenciesStore()
const timerStore = useTimerStore()

const currenciesList = computed(() => Object.keys(currenciesStore.currencies))

const modalShown = ref(false)
</script>

<template>
  <b-overlay :show="currenciesStore.isLoading" variant="transparent" opacity="1" blur="2px" rounded>
    <b-card>
      <template #header>
        <div class="d-flex justify-content-between align-items-center">
          <span> Currencies list </span>
          <b-button variant="outline-primary" size="sm" @click="modalShown = !modalShown">
            Rates history
          </b-button>
        </div>
      </template>
      <CECurrencyListItem
        v-for="currencyName in currenciesList"
        :currency-name="currencyName"
        :currency-price="currenciesStore.currencies?.[currencyName]?.usd"
      />
      <template #footer>
        <span>
          Rates will update in
          <i>{{ timerStore.formattedTime }}</i>
        </span>
      </template>
    </b-card>
  </b-overlay>
  <CERatesHistoryModal
    v-model="modalShown"
    :currencies-list="currenciesList"
    :currencies-history="currenciesStore.currenciesHistory"
  />
</template>
