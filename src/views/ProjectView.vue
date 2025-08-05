<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@components/Navbar.vue'
import ButtonNav from '@components/ButtonNav.vue'
import ProjectSection from '@components/sections/ProjectSection.vue'
import Footer from '@components/Footer.vue'

const projects = ref([])

async function fetchPosts() {
  const res = await fetch('/assets/projects.json')
  projects.value = await res.json()
}

onMounted(fetchPosts)
</script>

<template>
  <Navbar />
  <ButtonNav />
  <!-- Full list -->
  <ProjectSection :projects="projects" />
  <Footer />
</template>
