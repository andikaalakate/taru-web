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
  <section
  class="relative flex flex-col justify-center items-center min-h-[60vh] px-4 sm:px-6 md:px-20 py-16 sm:py-20"
  style="
    background:
      radial-gradient(ellipse at 60% 15%, rgba(35,124,146,0.6) 45%, transparent 75%),
      radial-gradient(ellipse at 20% 80%, rgba(35,124,146,0.3) 40%, transparent 70%),
      linear-gradient(135deg, #13495A 55%, #294E60 100%);
  "
  >
    <div class="w-full max-w-screen-xl mx-auto text-center">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl mb-6">
        We Can Do it!
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-[#e3f6ff] drop-shadow-lg leading-relaxed">
        Gak tau gw jir mau letak apa disini
      </p>
    </div>
    
    <div
      class="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] rotate-180 pointer-events-none"
      aria-hidden="true"
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="block w-[calc(100%+1.3px)] h-20 sm:h-32"
      >
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="fill-[#FFFFF0]"></path>
      </svg>
    </div>
  </section>
  <div class="min-h-screen flex flex-col bg-[#fffff0]">
    <ServiceSection :services="services" class="pt-32 flex-grow" />
    <Footer />
  </div>
</template>
