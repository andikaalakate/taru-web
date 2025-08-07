<template>
  <div
    class="rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 overflow-hidden border border-[#f3f3f7] p-6 flex flex-col min-h-[600px] w-full"
  >
    <div class="flex items-center justify-center p-6">
      <box-icon name="book-open" color="#13495a" class="size-16" />
    </div>

    <h2 class="text-3xl font-semibold mb-3 text-center text-[#13495a]">
      {{ plan.title }}
    </h2>

    <div class="flex justify-center items-end gap-1 mb-4">
      <span class="text-lg">{{ plan.currency }}</span>
      <p class="text-7xl font-extrabold">{{ plan.price }}</p>
      <span class="text-lg">{{ plan.unit }}</span>
    </div>

    <ul
      class="mb-6 space-y-3 text-gray-700 list-none flex-grow overflow-auto max-h-[200px]"
    >
      <li
        v-for="(feature, idx) in plan.features"
        :key="idx"
        class="flex items-center gap-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-emerald-600 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        {{ feature }}
      </li>
    </ul>

    <a
      href="https://wa.me/+6285762647933"
      target="_blank"
      class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#13495A] to-[#237C92] hover:from-[#0F3D4A] hover:to-[#1E6B7D] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#237C92]"
    >
      <!-- Inline WhatsApp SVG icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path
          d="M19.11 17.05c-.3-.15-1.75-.87-2.02-.97-.27-.1-.46-.15-.65.15-.19.3-.73.97-.9 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2 .05-.37-.02-.52-.07-.15-.65-1.57-.9-2.15-.24-.56-.5-.48-.65-.48h-.57c-.19 0-.5.07-.76.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.3 1.26.47 1.69.6.71.23 1.36.2 1.87.12.57-.1 1.75-.72 1.99-1.42.24-.7.24-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16 .01C7.16 .01 0 7.18 0 16.01c0 2.82 .73 5.47 2.02 7.77L0 32l8.46-2.22c2.28 1.26 4.92 1.93 7.53 1.93 8.84 0 16-7.18 16-15.99C32 7.17 24.84.01 16 .01z"
        />
      </svg>
      Order
    </a>
  </div>
</template>

<script setup>
defineProps({
  plan: {
    type: Object,
    required: true,
  },
  whatsappNumber: {
    type: String,
    required: true,
  },
});
</script>
