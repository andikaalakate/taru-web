<script setup>
import { ref, computed, onMounted } from "vue";
import Navbar from "@components/Navbar.vue";
import ButtonNav from "@components/ButtonNav.vue";
import BlogSection from "@components/sections/BlogSection.vue";
import Footer from "@components/Footer.vue";

const blogposts = ref([]);
const searchQuery = ref("");

// Fetches the list of blog posts from the JSON file.
async function fetchPosts() {
  try {
    const res = await fetch("/assets/blogposts.json");
    if (res.ok) {
      blogposts.value = await res.json();
    } else {
      console.error("Failed to load blog posts: HTTP status", res.status);
    }
  } catch (error) {
    console.error("An error occurred while fetching blog posts:", error);
  }
}

onMounted(fetchPosts);

// Filters posts based on the search query.
const filteredPosts = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return blogposts.value;
  return blogposts.value.filter((post) => {
    return (
      post.title?.toLowerCase().includes(q) ||
      post.content?.toLowerCase().includes(q) ||
      post.category?.toLowerCase().includes(q)
    );
  });
});
</script>

<template>
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
        Read Our Article
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

  <Navbar />
  <ButtonNav />

  <div class="min-h-screen flex flex-col bg-[#fffff0]">
    <main class="pt-32 px-5 md:px-10 xl:px-20 flex-grow">
      <BlogSection
        :blogposts="filteredPosts"
        v-model="searchQuery"
        :show-search="true"
        layout="grid"
        class="pt-0"
      />
    </main>

    <Footer />
  </div>
</template>
