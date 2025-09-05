import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const API_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,solana&vs_currencies=usd'

export const useCurrenciesStore = defineStore('currencies', () => {
  const currencies = ref(0)
  const isLoading = ref(false)

  const fetchCurrencies = async () => {
    isLoading.value = true

    try {
      const response = await fetch(API_URL)
      const data = await response.json()

      currencies.value = data
    } catch (e) {
      //   TODO: handle errors
    }
  }

  return { currencies, isLoading, fetchCurrencies }
})
