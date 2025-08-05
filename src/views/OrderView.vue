<template>
  <Navbar/>
  <ButtonNav/>
  <div class="pt-20"><OrderContent/></div>
  <Footer/>
</template>

<script setup>
import Navbar from '@components/Navbar.vue'
import ButtonNav from '@components/ButtonNav.vue'
import OrderContent from '@components/sections/content/OrderContent.vue'
import Footer from '@components/Footer.vue'
import { onMounted } from 'vue'

onMounted(() => scrollTo({ top: 0, behavior: 'smooth' }))
</script>
