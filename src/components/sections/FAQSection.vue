<template>
  <section class="bg-[#fffff0] text-[#1c1f29] px-5 md:px-10 xl:px-20 py-16">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-[#2f3a4b] mb-12">
        Frequently Asked Questions
      </h2>

      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <button
            @click="toggleFAQ(index)"
            class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none"
            :aria-expanded="openIndex === index"
          >
            <h3 class="text-lg font-semibold text-[#2f3a4b] pr-4">
              {{ faq.question }}
            </h3>
            <div class="flex-shrink-0">
              <svg
                class="w-6 h-6 text-[#237c92] transform transition-transform duration-200"
                :class="{ 'rotate-180': openIndex === index }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <div
            v-show="openIndex === index"
            class="px-6 pb-5"
            :style="{
              maxHeight: openIndex === index ? '500px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease-in-out',
            }"
          >
            <div
              class="text-gray-600 leading-relaxed"
              v-html="faq.answer"
            ></div>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div
        class="text-center mt-12 p-8 bg-gradient-to-r from-[#13495A] to-[#237C92] rounded-xl"
      >
        <h3 class="text-2xl font-bold text-white mb-3">
          Still have questions?
        </h3>
        <p class="text-blue-100 mb-6">
          We're here to help! Get in touch with our team for personalized
          assistance.
        </p>
        <button
          class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#13495A] font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 focus:outline-none"
        >
          Contact Us
          <svg
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  faqs: {
    type: Array,
    default: () => [
      {
        question: "What services do you offer?",
        answer:
          "We provide comprehensive web development services including custom website design, e-commerce solutions, mobile-responsive development, and ongoing maintenance and support.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary depending on complexity and requirements. A simple website typically takes 2-4 weeks, while more complex applications can take 8-12 weeks or longer. We'll provide a detailed timeline during our initial consultation.",
      },
      {
        question:
          "Do you provide ongoing support after the project is completed?",
        answer:
          "Yes! We offer various support packages including regular updates, security monitoring, backup services, and technical support to ensure your website continues to perform optimally.",
      },
      {
        question: "Can you help with SEO and digital marketing?",
        answer:
          "Absolutely! We build SEO-friendly websites from the ground up and can help with ongoing digital marketing strategies including content optimization, social media integration, and analytics setup.",
      },
      {
        question: "What's your pricing structure?",
        answer:
          "Our pricing depends on project scope, complexity, and timeline. We offer transparent, fixed-price quotes after understanding your specific requirements. Contact us for a free consultation and personalized quote.",
      },
      {
        question: "Do you work with small businesses?",
        answer:
          "Yes! We work with businesses of all sizes, from startups and small local businesses to larger enterprises. We tailor our services and pricing to fit different business needs and budgets.",
      },
    ],
  },
});

const openIndex = ref(null);

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>
