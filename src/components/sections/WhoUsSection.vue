<template>
    <section id="who-us" class="bg-[#fffff0] text-[#1c1f29] px-5 md:px-10 xl:px-20 py-10">
        <div class="bg-red-500 size-full p-2 flex justify-center flex-wrap">
            <div class="bg-blue-500 p-4">
                <h1 class="text-left">Who Us ?</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quis sed dolores ipsa minima consectetur doloremque quibusdam porro eos nesciunt officia iure libero dolorem delectus aperiam debitis alias consequuntur ut autem, consequatur accusamus distinctio laudantium, fugiat inventore! Animi ratione, maiores quaerat cum id a, nesciunt, voluptatum neque esse sapiente eaque eum qui officiis dignissimos non reprehenderit fugit. Quaerat eaque architecto provident incidunt. Voluptas beatae, mollitia assumenda esse, qui iste architecto provident doloribus debitis molestias atque repellat labore ex laudantium dolore nam repudiandae tenetur laborum exercitationem quasi quibusdam. Aspernatur quis voluptate, fugit debitis in dolorum. Dolores reiciendis reprehenderit dolorum et corporis?</p>
            </div>
        </div>
        
    </section>
</template>

<script setup>
const props = defineProps({
    projects: {
    type: Array,
    required: true,
    },
});
</script>
