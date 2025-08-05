<template>
  <section
    class="relative flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 md:px-20 py-12 sm:py-16"
    style="
      background: 
        radial-gradient(ellipse at 60% 15%, rgba(35, 124, 146, 0.6) 40%, transparent 70%),
        radial-gradient(ellipse at 20% 80%, rgba(35, 124, 146, 0.3) 30%, transparent 60%),
        linear-gradient(135deg, #13495A 70%, #294e60 100%);
    "
  >
    <div class="w-full max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 px-2 sm:px-4 md:px-10 py-6 md:py-12">
      <div class="w-full md:w-1/2 z-10 text-center md:text-left">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-[1.2] text-white drop-shadow-2xl mb-4 sm:mb-6">
          Your Complaint, Our Expertise
        </h1>
        <p class="text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 text-[#e3f6ff] drop-shadow-lg leading-relaxed">
          Entertainment, Tech, Graphic Design, Devices Troubleshooting, and Website Developing
        </p>
      </div>
      <div class="w-full md:w-1/2 relative">
        <div class="relative w-full max-w-md mx-auto">
          <img
            src="/assets/komputer-ilustrasi.webp"
            alt="Computer Illustration"
            class="w-full h-auto opacity-80 md:opacity-100 rounded-lg drop-shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    
    <a
      href="#blog"
      aria-label="Scroll to blog section"
      class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hover:scale-110 transition-transform duration-300"
    >
      <box-icon
        name="chevron-down"
        color="#2f3a4b"
        class="drop-shadow-lg"
        size="48px"
      />
    </a>
    
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
</template>