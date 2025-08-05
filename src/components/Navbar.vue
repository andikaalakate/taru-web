<template>
  <nav
    class="fixed top-0 w-full h-20 z-50
           flex items-center justify-center md:justify-between
           bg-[#1b2f38cc] backdrop-blur-xl border-b border-[#25567240]
           px-5 sm:px-10 md:px-20"
  >
    <RouterLink to="/" class="flex items-center">
      <img src="/assets/logo/Typography Invis White.webp" alt="Tarulab" class="h-36
       md:h-36" />
    </RouterLink>

    <ul class="hidden md:flex gap-8 items-center text-[#FFFFF0] font-semibold">
      <li>
        <RouterLink
          to="/blog/"
          class="px-3 py-2 rounded hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >Blog</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/service/"
          class="px-3 py-2 rounded hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >Services</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/project/"
          class="px-3 py-2 rounded hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >Projects</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/team/"
          class="px-3 py-2 rounded hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >Team</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/order/"
          class="px-6 py-2 rounded-full border border-emerald-600 bg-[#2B2B35] hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500 transition-colors duration-200"
          >Order Us</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>
