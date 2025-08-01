<template>
    <div
        class="relative bg-[#13495A] text-[#fffff0] px-[5%] md:px-[10%] xl:px-[20%] py-16 pb-10 flex gap-8 justify-between flex-wrap">
        <div class="relative flex flex-col">
            <div class="flex items-center justify-start">
                <RouterLink to="." class=""><img src="/assets/logo/Typography Invis White.webp"
                        class="h-16 rounded-xl scale-125" alt=""></RouterLink>
            </div>
            <p class="flex items-center gap-2"><span class="text-2xl">&copy;</span> All rights reserved.</p>
            <div class="flex gap-2">
                <a href="https://www.instagram.com/taru.lab_official/" target="_blank"
                    class="flex items-center justify-center"><box-icon type='logo' name='instagram-alt'
                        color="#fffff0"></box-icon></a>
                <a href="" class="flex items-center justify-center"><box-icon type='logo' name='facebook-square'
                        color="#fffff0"></box-icon></a>
            </div>
        </div>
        <div class="flex gap-8 flex-wrap">
            <div>
                <h1 class="text-2xl font-bold">About</h1>
                <div class="flex flex-col">
                    <p>Jl. Makmur, Dusun 6 Kenanga</p>
                    <a href="">tarutaru.lab@gmail.com</a>
                    <a href="https://wa.me/6285762647933">+62 857-6264-7933</a>
                </div>
            </div>
            <div>
                <h1 class="text-2xl font-bold">Learn More</h1>
                <div class="flex flex-col">
                    <RouterLink to="/blog/">Blog</RouterLink>
                    <RouterLink to="/what-we-can/">Services</RouterLink>
                    <RouterLink to="/project/">Portfolio</RouterLink>
                    <RouterLink to="/team/">Team</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>