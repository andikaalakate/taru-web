<script setup>
import { useRoute } from "vue-router";
import Navbar from "@components/Navbar.vue";
import ButtonNav from "@components/ButtonNav.vue";
import Footer from "@components/Footer.vue";

const route = useRoute();
const post = ref(null);

async function fetchPost() {
  const res = await fetch("/assets/blogposts.json");
  const all = await res.json();
  post.value = all.find((p) => p.slug === route.params.slug) || null;
}

onMounted(fetchPost);
</script>

<template>
  <Navbar />
  <ButtonNav />
  <div class="min-h-screen flex flex-col bg-[#fffff0]">
    <main
      class="pt-30 px-5 sm:px-10 xl:px-20 py-10 max-w-screen-lg mx-auto flex-grow"
    >
      <section v-if="post">
        <h1 class="text-4xl font-bold mb-6">{{ post.title }}</h1>
        <h2 class="text-[#237c92] font-bold">{{ post.category }}</h2>
        <div
          class="relative overflow-hidden max-h-80 aspect-video justify-center mx-auto"
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="h-full w-full rounded-lg mb-8 object-cover"
          />
        </div>
        <article class="prose max-w-none">
          <p v-for="item in post.description">{{ item }}</p>
        </article>
      </section>
      <section v-else class="text-center text-gray-500">
        <p>Sorry, that post was not found.</p>
      </section>
    </main>
    <Footer />
  </div>
</template>
