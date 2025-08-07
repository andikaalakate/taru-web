<template>
  <section
    id="service"
    class="bg-[#fffff0] text-[#1c1f29] px-5 md:px-10 xl:px-20 py-10"
  >
    <h1 class="text-4xl mb-12 text-center font-bold text-[#2f3a4b]">
      What We Do?
    </h1>
    <div
      class="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
    >
      <div
        v-for="service in services"
        :key="service.slug"
        class="rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 overflow-hidden border border-[#f3f3f7]"
        :title="service.title"
      >
        <img
          :src="service.image"
          :alt="service.title"
          class="w-full aspect-video object-cover"
        />
        <div class="px-5 py-4 flex flex-col gap-2 text-center">
          <h2 class="text-lg font-bold leading-snug text-center">
            {{ service.title }}
          </h2>
          <p
            class="mt-2 self-start text-center hover:text-[#13495A] focus:outline-none focus:ring-2 focus:ring-blue-300 font-semibold transition"
          >
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
});
</script>
