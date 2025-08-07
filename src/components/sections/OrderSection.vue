<template>
  <section
    id="order"
    class="bg-[#FFFFF0] text-[#1C1F29] px-5 md:px-10 xl:px-20 py-10"
  >
    <h1 class="text-4xl mb-12 text-center font-bold text-[#2F3A4B]">
      {{ pricingData.config.sectionTitle }}
    </h1>

    <p class="text-xl font-semibold mb-10 text-[#13495A] text-center">
      {{ pricingData.config.sectionSubtitle }}
    </p>

    <!-- Centering wrapper -->
    <div class="flex justify-center">
      <div :class="layoutClass">
        <PricingCard
          v-for="plan in displayedPlans"
          :key="plan.id"
          :plan="plan"
          :whatsapp-number="pricingData.config.whatsappNumber"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import PricingCard from "@/components/PricingCard.vue";

const props = defineProps({ limit: { type: Number, default: null } });
const pricingData = ref({ config: {}, plans: [] });
onMounted(async () => {
  const res = await fetch("/assets/pricingplans.json");
  pricingData.value = res.ok ? await res.json() : { config: {}, plans: [] };
});

const displayedPlans = computed(() =>
  props.limit
    ? pricingData.value.plans.slice(0, props.limit)
    : pricingData.value.plans
);

const layoutClass = computed(() => {
  const count = displayedPlans.value.length;
  if (count === 1) return "inline-grid grid-cols-1 gap-8";
  else if (count === 2) return "inline-grid grid-cols-1 sm:grid-cols-2 gap-8";
  else return "inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8";
});
</script>
