<template>
  <nav
    class="fixed top-0 w-full h-20 z-50 bg-linear-to-b from-[#17262b] to-transparent"
  >
    <div
      class="w-full max-w-screen-xl lg:max-w-screen-xl mx-auto flex items-center justify-center md:justify-between px-5 sm:px-10 md:px-5 lg:px-20 h-full"
    >
      <RouterLink to="/" class="flex items-center flex-shrink-0">
        <img
          src="/assets/logo/Typography Invis White.webp"
          alt="Tarulab"
          class="h-36"
        />
      </RouterLink>

      <ul
        class="hidden md:flex gap-4 lg:gap-8 items-center text-[#FFFFF0] font-semibold"
      >
        <li>
          <RouterLink
            to="/blog/"
            class="px-3 py-2 rounded focus:outline-none transition-colors duration-200 "
          >
            Blog
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/service/"
            class="px-3 py-2 rounded focus:outline-none transition-colors duration-200"
          >
            Services
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/project/"
            class="px-3 py-2 rounded focus:outline-none transition-colors duration-200"
          >
            Projects
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/team/"
            class="px-3 py-2 rounded focus:outline-none transition-colors duration-200"
          >
            Team
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/order/"
            class="inline-flex items-center gap-2 px-4 lg:px-6 py-2 bg-gradient-to-r from-[#13495A] to-[#237C92] hover:from-[#0F3D4A] hover:to-[#1E6B7D] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none ml-2"
          >
            Order Us
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
