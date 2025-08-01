<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import Footer from '@components/Footer.vue';
import Navbar from '@components/Navbar.vue';
import ButtonNav from '@components/ButtonNav.vue';
import TeamContent from '@components/sections/content/TeamContent.vue'

// Fungsi untuk scroll ke atas
const scrollToTop = () => {
    scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    scrollToTop()
})
</script>

<template>
    <!-- Navigasi -->
    <Navbar />

    <!-- Button Bar -->
    <ButtonNav />

    <!-- Team Content -->
    <TeamContent />

    <!-- Footer Section -->
    <Footer />
</template>