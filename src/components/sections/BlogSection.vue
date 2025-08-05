<template>
  <section id="blog" class="bg-[#fffff0] text-[#1c1f29] px-5 md:px-10 xl:px-20 py-10">
    <h1 class="text-4xl mb-12 text-center font-bold text-[#2f3a4b]">What's New?</h1>
    <div class="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <RouterLink
        v-for="post in blogposts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 overflow-hidden border border-[#f3f3f7]"
        :title="post.title"
      >
        <img :src="post.image" :alt="post.title" class="w-full aspect-video object-cover" />
        <div class="px-5 py-4 flex flex-col gap-2">
          <span class="text-xs text-[#237c92] font-bold">{{ post.category }}</span>
          <h2 class="text-lg font-bold leading-snug">{{ post.title }}</h2>
          <p
            class="mt-2 self-start text-blue-500 underline underline-offset-2 hover:text-[#13495A]
                   focus:outline-none focus:ring-2 focus:ring-blue-300 font-semibold transition"
          >
            Selengkapnya&hellip;
          </p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  blogposts: {
    type: Array,
    required: true
  }
})
</script>
