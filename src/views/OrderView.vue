<template>
  <Navbar />
  <ButtonNav />
  <main class="bg-[#fffff0] pt-22">
    <OrderSection />
  </main>
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import ButtonNav from '@/components/ButtonNav.vue'
import OrderSection from '@/components/sections/OrderSection.vue'
import Footer from '@/components/Footer.vue'

onMounted(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
</script>
