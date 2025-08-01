<template>
    <!-- Tombol toggle -->
    <div @click="toggleMenu"
        class="rounded-full size-12 fixed left-1/2 md:hidden flex z-50 bottom-5 items-center justify-center -translate-x-1/2 bg-[#13495A] border-2 border-[#fffff0] cursor-pointer">
        <box-icon color="#fffff0" name="plus" class="size-9 transition-transform duration-300"
            :style="{ transform: isOpen ? 'rotate(225deg)' : 'rotate(0deg)' }"></box-icon>
    </div>

    <!-- Menu -->
    <div class="duration-700 left-1/2 backdrop-blur-sm -translate-x-1/2 w-full gap-4 z-40 md:hidden block md:justify-between p-4 items-center fixed h-screen"
        :class="[isOpen ? 'top-[68px]' : 'top-full']">
        <ul class="flex flex-col gap-4 w-full">
            <li v-for="(item, i) in menuItems" :key="i">
                <RouterLink :to="item.href" @click="closeMenu"
                    class="w-full flex h-5 px-4 py-6 rounded-3xl items-center justify-center font-semibold border-8"
                    :class="[
                        item.dark
                            ? 'bg-[#2b2b35] border-[#fffff0] text-[#fffff0]'
                            : 'bg-[#fffff0] border-[#13495a] text-[#13495a]'
                    ]">
                    {{ item.label }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const isOpen = ref(false)

const menuItems = [
    { label: 'Blog', href: '/blog/' },
    { label: 'Services', href: '/what-we-can/' },
    { label: 'Portfolio', href: '/project/' },
    { label: 'Team', href: '/team/' },
    { label: 'Order Us', href: '/order/', dark: true }
]

function toggleMenu() {
    isOpen.value = !isOpen.value
}

function closeMenu() {
    isOpen.value = false
}

// Lock body scroll saat menu open
watch(isOpen, (val) => {
    document.body.classList.toggle('overflow-hidden', val)
})
</script>
