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
