<template>
  <section
    id="order"
    class="bg-[#fffff0] text-[#1c1f29] px-5 md:px-10 xl:px-20 py-10"
  >
    <h1 class="text-4xl mb-6 text-center font-bold text-[#2f3a4b]">
      Order Us
    </h1>
    <p class="text-xl mb-10 text-[#13495a] text-center">
      Wanna see the attractive price list that we offer to our customers?
    </p>

    <div class="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <PricingCard
        v-for="(plan, i) in displayedPlans"
        :key="i"
        :title="plan.title"
        :price="plan.price"
        :features="plan.features"
      />
    </div>

    <!-- On homepage preview only, show link to full order page -->
    <div v-if="limit" class="mt-12 flex justify-center">
      <RouterLink
        to="/order"
        class="px-6 py-3 rounded-full border border-gray-300 bg-gray-50 font-semibold
               shadow hover:bg-emerald-500 hover:text-white transition"
      >
        Explore More...
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import PricingCard from '@/components/PricingCard.vue'

// Optional limit prop: if set (e.g. 3), show that many plans; otherwise show all
const props = defineProps({ limit: { type: Number, default: null } })

// Central plan definitions (same data used everywhere)
const plans = [
  {
    title: 'Starter Spark',
    price: '1',
    features: [
      'Gratis Domain.my.id',
      'Gratis Hosting',
      'Gratis perawatan 1 bulan',
      'Landing Page',
      '1x Revisi',
      'Integrasi Google Search Console',
      'Integrasi Google Analytics',
      'Perpanjangan 25%'
    ]
  },
  {
    title: 'Momentum Engine',
    price: '1,5',
    features: [
      'Gratis Domain.my.id',
      'Gratis Hosting',
      'Portfolio Diri',
      'Gratis perawatan hingga 6 bulan',
      '1 Halaman',
      '3x Revisi',
      'Integrasi Google Search Console',
      'Integrasi Google Analytics',
      'Perpanjangan 25%'
    ]
  },
  {
    title: 'Prime Velocity',
    price: '5',
    features: [
      'Gratis Domain (bebas)',
      'Gratis Hosting',
      'Website Kustom',
      'Gratis perawatan hingga 1 Tahun',
      '5 Halaman',
      '5x Revisi',
      'Integrasi Google Search Console',
      'Integrasi Google Analytics',
      'Perpanjangan 20%'
    ]
  }
]

// Compute displayed plans based on optional limit
const displayedPlans = computed(() =>
  props.limit ? plans.slice(0, props.limit) : plans
)
</script>
