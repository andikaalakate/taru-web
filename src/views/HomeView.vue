<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import HeroSection from '@components/sections/HeroSection.vue';
import BlogSection from '@components/sections/BlogSection.vue';
import ServiceSection from '@components/sections/ServiceSection.vue';
import RecentSection from '@components/sections/RecentSection.vue';
import OrderSection from '@components/sections/OrderSection.vue';
import Footer from '@components/Footer.vue';
import Navbar from '@components/Navbar.vue';
import ButtonNav from '@components/ButtonNav.vue';

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

    <!-- Hero Section -->
    <HeroSection />

    <!-- Blog Section -->
    <BlogSection />

    <!-- Service Section -->
    <ServiceSection />

    <!-- Recent Section -->
    <RecentSection />

    <!-- Order Section -->
    <OrderSection />

    <!-- Footer Section -->
    <Footer />
</template>