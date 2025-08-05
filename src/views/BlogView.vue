<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@components/Navbar.vue'
import ButtonNav from '@components/ButtonNav.vue'
import BlogSection from '@components/sections/BlogSection.vue'
import Footer from '@components/Footer.vue'

const blogposts = ref([])

async function fetchPosts() {
  const res = await fetch('/assets/blogposts.json')
  blogposts.value = await res.json()
}

onMounted(fetchPosts)
</script>

<template>
  <Navbar />
  <ButtonNav />
  <BlogSection :blogposts="blogposts" />
  <Footer />
</template>
