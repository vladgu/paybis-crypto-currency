import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const SECONDS_IN_MINUTE = 60

export const useTimerStore = defineStore('timer', () => {
  const remaining = ref(SECONDS_IN_MINUTE)
  const interval = ref(null)

  const formattedTime = computed(() => {
    const minutes = Math.floor(remaining.value / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (remaining.value % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  })

  const start = (callback) => {
    if (interval.value) return

    callback()

    interval.value = setInterval(() => {
      remaining.value--

      if (remaining.value <= 0) {
        remaining.value = SECONDS_IN_MINUTE
        callback?.()
      }
    }, 1000)
  }
  const stop = () => {
    clearInterval(interval.value)
    interval.value = null
    remaining.value = SECONDS_IN_MINUTE
  }

  return { remaining, formattedTime, start, stop }
})
