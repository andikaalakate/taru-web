<template>
  <section
    id="order"
    class="bg-[#fffff0] text-[#1c1f29] px-5 md:px-10 xl:px-20 py-10"
  >
    <h1 class="text-4xl mb-12 text-center font-bold text-[#2f3a4b]">Order Us</h1>
    <p class="text-xl font-semibold mb-10 text-[#13495a] text-center">
      Wanna see the attractive price list that we offer to our customers?
    </p>

    <div class="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Starter Spark -->
      <div
        class="rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 overflow-hidden border border-[#f3f3f7] p-6 flex flex-col min-h-[600px] w-full"
      >
        <div class="flex items-center justify-center p-6">
          <box-icon name="book-open" color="#13495a" class="size-16" />
        </div>
        <h2 class="text-3xl font-semibold mb-3 text-center text-[#13495a]">
          Starter Spark
        </h2>
        <div class="flex justify-center items-end gap-1 mb-4">
          <span class="text-lg">Rp.</span>
          <p class="text-7xl font-extrabold">1</p>
          <span class="text-lg">Jt</span>
        </div>
        <ul class="mb-6 space-y-3 text-gray-700 list-none flex-grow overflow-auto max-h-[200px]">
          <li class="flex items-center gap-3" v-for="(f, i) in starterFeatures" :key="i">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-6 w-6 text-emerald-600 flex-shrink-0"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
            {{ f }}
          </li>
        </ul>
        <a
          href="https://wa.me/+6285762647933"
          target="_blank"
          class="mt-auto inline-block bg-gradient-to-r from-emerald-600 to-emerald-500
                 hover:from-emerald-700 hover:to-emerald-600 text-white text-lg font-semibold
                 rounded-full px-10 py-3 shadow-lg transition focus:outline-none focus:ring-4 focus:ring-emerald-200"
        >
          Order
        </a>
      </div>

      <!-- Momentum Engine -->
      <div
        class="rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 overflow-hidden border border-[#f3f3f7] p-6 flex flex-col min-h-[600px] w-full"
      >
        <div class="flex items-center justify-center p-6">
          <box-icon name="book-open" color="#13495a" class="size-16" />
        </div>
        <h2 class="text-3xl font-semibold mb-3 text-center text-[#13495a]">
          Momentum Engine
        </h2>
        <div class="flex justify-center items-end gap-1 mb-4">
          <span class="text-lg">Rp.</span>
          <p class="text-7xl font-extrabold">1,5</p>
          <span class="text-lg">Jt</span>
        </div>
        <ul class="mb-6 space-y-3 text-gray-700 list-none flex-grow overflow-auto max-h-[200px]">
          <li class="flex items-center gap-3" v-for="(f, i) in momentumFeatures" :key="i">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-6 w-6 text-emerald-600 flex-shrink-0"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
            {{ f }}
          </li>
        </ul>
        <a
          href="https://wa.me/+6285762647933"
          target="_blank"
          class="mt-auto inline-block bg-gradient-to-r from-emerald-600 to-emerald-500
                 hover:from-emerald-700 hover:to-emerald-600 text-white text-lg font-semibold
                 rounded-full px-10 py-3 shadow-lg transition focus:outline-none focus:ring-4 focus:ring-emerald-200"
        >
          Order
        </a>
      </div>

      <!-- Prime Velocity -->
      <div
        class="rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 overflow-hidden border border-[#f3f3f7] p-6 flex flex-col min-h-[600px] w-full"
      >
        <div class="flex items-center justify-center p-6">
          <box-icon name="book-open" color="#13495a" class="size-16" />
        </div>
        <h2 class="text-3xl font-semibold mb-3 text-center text-[#13495a]">
          Prime Velocity
        </h2>
        <div class="flex justify-center items-end gap-1 mb-4">
          <span class="text-lg">Rp.</span>
          <p class="text-7xl font-extrabold">5</p>
          <span class="text-lg">Jt</span>
        </div>
        <ul class="mb-6 space-y-3 text-gray-700 list-none flex-grow overflow-auto max-h-[200px]">
          <li class="flex items-center gap-3" v-for="(f, i) in primeFeatures" :key="i">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-6 w-6 text-emerald-600 flex-shrink-0"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
            {{ f }}
          </li>
        </ul>
        <a
          href="https://wa.me/+6285762647933"
          target="_blank"
          class="mt-auto inline-block bg-gradient-to-r from-emerald-600 to-emerald-500
                 hover:from-emerald-700 hover:to-emerald-600 text-white text-lg font-semibold
                 rounded-full px-10 py-3 shadow-lg transition focus:outline-none focus:ring-4 focus:ring-emerald-200"
        >
          Order
        </a>
      </div>
    </div>

    <div class="mt-12 flex justify-center">
      <RouterLink
        to="/order"
        class="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 shadow-md
               bg-gray-50 text-lg font-semibold hover:bg-emerald-500 hover:text-white
               transition duration-300"
      >
        Explore More...
        <svg
          class="w-6 h-6 ml-2 transform rotate-45 transition-transform duration-300"
          viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            fill="currentColor"
          />
        </svg>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Feature lists
const starterFeatures = ref([
  'Gratis Domain.my.id',
  'Gratis Hosting',
  'Gratis perawatan 1 bulan',
  'Landing Page',
  '1x Revisi',
  'Integrasi Google Search Console',
  'Integrasi Google Analytics',
  'Perpanjangan 25%',
])

const momentumFeatures = ref([
  'Gratis Domain.my.id',
  'Gratis Hosting',
  'Portfolio Diri',
  'Gratis perawatan hingga 6 bulan',
  '1 Halaman',
  '3x Revisi',
  'Integrasi Google Search Console',
  'Integrasi Google Analytics',
  'Perpanjangan 25%',
])

const primeFeatures = ref([
  'Gratis Domain (bebas)',
  'Gratis Hosting',
  'Website Kustom',
  'Gratis perawatan hingga 1 Tahun',
  '5 Halaman',
  '5x Revisi',
  'Integrasi Google Search Console',
  'Integrasi Google Analytics',
  'Perpanjangan 20%',
])
</script>