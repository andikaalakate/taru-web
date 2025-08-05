<template>
  <div
    class="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col min-h-[600px]
           w-full max-w-sm mx-auto transition-transform duration-200 hover:scale-105"
  >
    <div class="flex items-center justify-center p-6">
      <box-icon name="book-open" color="#13495a" class="size-16" />
    </div>
    <h2 class="text-3xl font-semibold mb-3 text-center text-[#13495a]">{{ title }}</h2>
    <div class="flex justify-center items-end gap-1 mb-4">
      <span class="text-lg">Rp.</span>
      <p class="text-7xl font-extrabold">{{ price }}</p>
      <span class="text-lg">Jt</span>
    </div>
    <ul class="mb-6 space-y-3 text-gray-700 list-none flex-grow overflow-auto max-h-[200px]">
      <li v-for="(feature, idx) in features" :key="idx" class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-600 flex-shrink-0"
             fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
        </svg>
        {{ feature }}
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
</template>

<script setup>
defineProps({
  title:    { type: String, required: true },
  price:    { type: String, required: true },
  features: { type: Array,  required: true }
})
</script>
