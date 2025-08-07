<template>
  <!-- Toggle button -->
  <button
    @click="toggleMenu"
    aria-label="Toggle menu"
    :aria-expanded="isOpen.toString()"
    class="fixed bottom-5 left-1/2 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#13495A] border-2 border-[#fffff0] shadow-lg transform -translate-x-1/2 transition-all duration-300 hover:bg-[#1e5c74] focus:outline-none focus:ring-4 focus:ring-[#2b7aa1] md:hidden"
  >
    <box-icon
      name="plus"
      color="#fffff0"
      class="size-10 transition-transform duration-300"
      :style="{ transform: isOpen ? 'rotate(225deg)' : 'rotate(0deg)' }"
    ></box-icon>
  </button>

  <!-- Slide down menu -->
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 -translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-full"
  >
    <nav
      v-show="isOpen"
      class="fixed top-[68px] inset-x-6 z-40 max-w-md mx-auto rounded-xl bg-[#2b2b35cc] backdrop-blur-md shadow-xl p-6 md:hidden"
      role="menu"
    >
      <ul class="flex flex-col gap-6">
        <li v-for="(item, i) in menuItems" :key="i" role="none">
          <RouterLink
            :to="item.href"
            @click="closeMenu"
            class="block w-full rounded-lg px-6 py-3 font-semibold text-center transition-all duration-200 transform hover:scale-105"
            :class="
              item.dark
                ? 'bg-[#1f1f27] text-[#fffff0] hover:bg-[#39394f]'
                : 'bg-[#fffff0] text-[#13495A] hover:bg-[#dcedf2]'
            "
            role="menuitem"
            :style="{ 'animation-delay': `${i * 50}ms` }"
            >{{ item.label }}</RouterLink
          >
        </li>
      </ul>
    </nav>
  </Transition>
</template>

<script setup>
import { ref, watch, onUnmounted } from "vue";

const isOpen = ref(false);

const menuItems = [
  { label: "Blog", href: "/blog/" },
  { label: "Services", href: "/service/" },
  { label: "Projects", href: "/project/" },
  { label: "Team", href: "/team/" },
  { label: "Order Us", href: "/order/", dark: true },
];

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}

watch(isOpen, (val) => {
  document.body.classList.toggle("overflow-hidden", val);
});

onUnmounted(() => {
  document.body.classList.remove("overflow-hidden");
});
</script>

<style scoped>
@keyframes slideInItem {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

nav[role="menu"] li {
  animation: slideInItem 1s ease-out forwards;
  opacity: 0;
}

nav[role="menu"] li:nth-child(1) {
  animation-delay: 0ms;
}
nav[role="menu"] li:nth-child(2) {
  animation-delay: 50ms;
}
nav[role="menu"] li:nth-child(3) {
  animation-delay: 100ms;
}
nav[role="menu"] li:nth-child(4) {
  animation-delay: 150ms;
}
nav[role="menu"] li:nth-child(5) {
  animation-delay: 200ms;
}
</style>
