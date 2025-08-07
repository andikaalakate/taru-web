<script setup>
import { ref, onMounted } from "vue";
import Navbar from "@components/Navbar.vue";
import ButtonNav from "@components/ButtonNav.vue";
import ServiceSection from "@components/sections/ServiceSection.vue";
import Footer from "@components/Footer.vue";

const services = ref([]);

async function fetchPosts() {
  const res = await fetch("/assets/services.json");
  services.value = await res.json();
}

onMounted(fetchPosts);
</script>

<template>
  <Navbar />
  <ButtonNav />
  <div class="min-h-screen flex flex-col bg-[#fffff0]">
    <ServiceSection :services="services" class="pt-32 flex-grow" />
    <Footer />
  </div>
</template>
