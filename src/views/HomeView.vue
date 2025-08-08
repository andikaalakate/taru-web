<script setup>
import { ref, onMounted } from "vue";
import Navbar from "@components/Navbar.vue";
import ButtonNav from "@components/ButtonNav.vue";
import HeroSection from "@components/sections/HeroSection.vue";
import WhoUsSection from "@/components/sections/WhoUsSection.vue";
import BlogSection from "@components/sections/BlogSection.vue";
import ServiceSection from "@components/sections/ServiceSection.vue";
import ProjectSection from "@components/sections/ProjectSection.vue";
import OrderSection from "@/components/sections/OrderSection.vue";
import FAQSection from "@/components/sections/FAQSection.vue";
import Footer from "@components/Footer.vue";

const blogposts = ref([]);
const services = ref([]);
const projects = ref([]);

async function fetchPosts() {
  const blogposts_res = await fetch("/assets/blogposts.json");
  const services_res = await fetch("/assets/services.json");
  const projects_res = await fetch("/assets/projects.json");
  blogposts.value = await blogposts_res.json();
  services.value = await services_res.json();
  projects.value = await projects_res.json();
}

onMounted(fetchPosts);
</script>

<template>
  <Navbar />
  <ButtonNav />
  <HeroSection />
  <WhoUsSection />
  <ServiceSection :services="services.slice(0, 3)" />
  <ProjectSection :projects="projects.slice(0, 3)" />
  <OrderSection :limit="3" />
  <BlogSection :blogposts="blogposts.slice(0, 5)" layout="featured" />
  <FAQSection />
  <Footer />
</template>
