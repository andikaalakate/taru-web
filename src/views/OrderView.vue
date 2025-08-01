<script setup>
import Footer from '@components/Footer.vue';
import Navbar from '@components/Navbar.vue';
import ButtonNav from '@components/ButtonNav.vue';
import OrderContent from '@components/sections/content/OrderContent.vue';

</script>

<template>
    <!-- Navigasi -->
    <Navbar />

    <!-- Button Bar -->
    <ButtonNav />

    <!-- Order Content -->
    <OrderContent/>

    <!-- Footer Section -->
    <Footer />
</template>