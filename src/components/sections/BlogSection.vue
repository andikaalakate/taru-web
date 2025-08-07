<template>
  <section
    id="blog"
    class="bg-[#fffff0] text-[#1c1f29] px-5 md:px-10 xl:px-20 py-10"
    :class="{ 'pt-32': layout === 'featured' }"
  >
    <h1 class="text-4xl mb-8 text-center font-bold text-[#2f3a4b]">
      What's New?
    </h1>

    <!-- Search Bar (shown on blog page) -->
    <div v-if="showSearch" class="max-w-lg mx-auto mb-12">
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="Search for articles..."
        class="w-full px-5 py-3 text-gray-700 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#237c92] transition-shadow"
      />
    </div>

    <!-- Featured Layout (for Home View) -->
    <div v-if="layout === 'featured'" class="max-w-screen-lg mx-auto">
      <div class="grid md:grid-cols-2 md:gap-8 md:divide-x md:divide-gray-300">
        <!-- Main Featured Post -->
        <RouterLink
          v-if="blogposts.length > 0"
          :to="`/blog/${blogposts[0].slug}`"
          class="block px-4 mb-8 md:mb-0 hover:bg-gray-50 group"
          :title="blogposts[0].title"
        >
          <img
            :src="blogposts[0].image"
            :alt="blogposts[0].title"
            class="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div class="pt-5 flex flex-col gap-2">
            <span class="text-sm text-[#237c92] font-bold">{{
              blogposts[0].category
            }}</span>
            <h2
              class="text-2xl font-bold leading-snug group-hover:text-blue-600"
            >
              {{ blogposts[0].title }}
            </h2>
            <!-- Improved description handling -->
            <p v-if="getDescription(blogposts[0])" class="text-gray-600 mt-2">
              {{ truncate(getDescription(blogposts[0]), 150) }}
            </p>
          </div>
        </RouterLink>

        <!-- Other Posts List -->
        <div class="flex flex-col gap-6 px-4">
          <RouterLink
            v-for="post in blogposts.slice(1, 5)"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="flex items-center gap-4 group hover:bg-gray-50 p-2 rounded-lg transition-colors"
            :title="post.title"
          >
            <img
              :src="post.image"
              :alt="post.title"
              class="w-20 h-20 object-cover rounded-md flex-shrink-0"
            />
            <div class="flex flex-col gap-1">
              <span class="text-xs text-[#237c92] font-bold">{{
                post.category
              }}</span>
              <h2
                class="text-base font-semibold leading-snug group-hover:text-blue-600"
              >
                {{ post.title }}
              </h2>
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- Explore More Button -->
      <div class="text-center mt-12">
        <RouterLink
          to="/blog/"
          class="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#13495A] to-[#237C92] hover:from-[#0F3D4A] hover:to-[#1E6B7D] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none"
        >
          Explore More
        </RouterLink>
      </div>
    </div>

    <!-- Grid Layout (for Blog Page) -->
    <div
      v-else
      class="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
    >
      <RouterLink
        v-for="post in blogposts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="flex flex-col rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 overflow-hidden border border-[#f3f3f7]"
        :title="post.title"
      >
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full aspect-video object-cover"
        />
        <div class="flex flex-col flex-grow px-5 py-4 gap-2">
          <span class="text-xs text-[#237c92] font-bold">{{
            post.category
          }}</span>
          <h2 class="text-lg font-bold leading-snug">{{ post.title }}</h2>
          <p v-if="getDescription(post)" class="text-sm text-gray-600 mt-1">
            {{ truncate(getDescription(post), 80) }}
          </p>
          <button
            @click="onSeeMore(post.slug)"
            class="self-center inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#13495A] to-[#237C92] hover:from-[#0F3D4A] hover:to-[#1E6B7D] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none mt-auto"
          >
            Selengkapnya
          </button>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  blogposts: {
    type: Array,
    required: true,
  },
  showSearch: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  layout: {
    type: String,
    default: "grid", // 'grid' or 'featured'
  },
});

defineEmits(["update:modelValue"]);

/**
 * Gets description from a post, handling different formats
 * @param {Object} post - The blog post object
 * @returns {string} The description text or empty string
 */
const getDescription = (post) => {
  if (!post) return "";

  // Handle array format (your original format)
  if (Array.isArray(post.description) && post.description.length > 0) {
    return post.description[0];
  }

  // Handle string format (in case it's just a string)
  if (typeof post.description === "string" && post.description.trim()) {
    return post.description;
  }

  // Fallback to content if no description
  if (typeof post.content === "string" && post.content.trim()) {
    return post.content;
  }

  return "";
};

/**
 * Truncates a string to a specified length and appends an ellipsis.
 * @param {string} text - The text to truncate.
 * @param {number} length - The maximum length of the string.
 * @returns {string} The truncated string.
 */
const truncate = (text, length) => {
  if (text && text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text || "";
};
</script>
