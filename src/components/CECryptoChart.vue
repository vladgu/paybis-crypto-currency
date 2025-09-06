<script setup>
import { computed, nextTick, ref, onMounted } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
} from 'echarts/components'
import { capitalizeString } from '@/utils/formatStrings.js'

use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
])

const props = defineProps({
  coins: {
    type: Array,
    required: true,
  },
  points: {
    type: Array,
    required: true,
  },
})

const chartRef = ref(null)

onMounted(() => {
  nextTick(() => {
    // Force chart resize when component is mounted and DOM is ready
    if (chartRef.value) {
      chartRef.value.resize()
    }
  })
})

const seriesData = computed(() => {
  const out = {}
  props.coins.forEach((coin) => (out[coin] = []))

  for (const point of props.points) {
    for (const coin of props.coins) {
      const price = point.value?.[coin]?.usd ?? null
      if (price != null) out[coin].push([point.timestamp, price])
    }
  }
  return out
})

const option = computed(() => ({
  animation: true,
  tooltip: {
    trigger: 'axis',
    valueFormatter: (value) => (value != null ? Number(value).toFixed(2) : '-'),
  },
  legend: { top: 0 },
  grid: { left: 40, right: 20, top: 40, bottom: 60 },
  xAxis: { type: 'time', boundaryGap: false },
  yAxis: { type: 'value', scale: true },
  dataZoom: [{ type: 'inside' }, { type: 'slider', bottom: 20 }],
  series: props.coins.map((coin) => ({
    name: capitalizeString(coin),
    type: 'line',
    showSymbol: false,
    smooth: true,
    connectNulls: true,
    data: seriesData.value[coin],
  })),
}))
</script>

<template>
  <VChart ref="chartRef" :option="option" autoresize class="h-80 w-full" />
</template>

<style scoped>
.h-80 {
  height: 20rem; /* ~320px */
}
</style>
