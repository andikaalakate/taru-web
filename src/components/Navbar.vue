<template>
    <nav
        class="text-[#FFFFF0] flex justify-center md:justify-between px-[5%] md:px-[10%] backdrop-blur-sm xl:px-[20%] py-4 items-center h-20 fixed w-full bg-linear-to-b from-[#17262b] to-transparent z-50">
        <RouterLink to="/"><img src="/assets/logo/Typography Invis White.webp" class="h-28" alt="Tarulab"></RouterLink>
            <ul class="hidden md:flex gap-5 items-center">
                <li><RouterLink to="/blog/">Blog</RouterLink></li>
                <li><RouterLink to="/what-we-can/">Services</RouterLink></li>
                <li><RouterLink to="/project/">Portfolio</RouterLink></li>
                <li><RouterLink to="/team/">Team</RouterLink></li>
                <li><RouterLink to="/order/" class="flex px-5 py-2 rounded-full border bg-[#2B2B35]">Order Us</RouterLink></li>
            </ul>
    </nav>
</template>