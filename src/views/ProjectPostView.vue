<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@components/Navbar.vue'
import ButtonNav from '@components/ButtonNav.vue'
import Footer from '@components/Footer.vue'

const route = useRoute()
const projects = ref(null)

async function fetchPost() {
  const res = await fetch('/assets/projects.json')
  const all = await res.json()
  projects.value = all.find(p => p.slug === route.params.slug) || null
}

onMounted(fetchPost)
</script>

<template>
  <Navbar />
  <ButtonNav />
  <main class="pt-30 px-5 sm:px-10 xl:px-20 py-10 max-w-screen-lg mx-auto">
    <section v-if="projects">
      <h1 class="text-4xl font-bold mb-6">{{ projects.title }}</h1>
      <div class="relative overflow-hidden max-h-80 aspect-video justify-center mx-auto"><img :src="projects.image" :alt="projects.title" class="h-full w-full rounded-lg mb-8 object-cover" /></div>
      <!-- Replace with actual post body content -->
      <article class="prose max-w-none">
        <p v-for="(item) in projects.description">{{ item }}</p>
      </article>
    </section>
    <section v-else class="text-center text-gray-500">
      <p>Sorry, that post was not found.</p>
    </section>
  </main>
  <Footer />
</template>
