<template>
    <section class="text-[#00000f] bg-[#fffff0] min-h-screen  pb-4 pt-28 px-[5%] md:px-[10%] xl:px-[20%]">
        <h1 class="text-3xl font-bold">Daftar Artikel Terbaru</h1>
        <div class="flex flex-col">
            <label class="flex items-center outline-none gap-4  my-2" >
                <input type="text" class="px-4 flex w-full bg-[#fffff0] py-2 border-2 rounded-lg border-[#00000f50] items-center " placeholder="Cari artikel yang ingin anda baca...">
                <box-icon name='search'></box-icon>
            </label>
            <div class="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                <div class="bg-red-500 rounded-3xl aspect-[3/4]">1</div>
                <div class="bg-red-500 rounded-3xl aspect-[3/4]">2</div>
                <div class="bg-red-500 rounded-3xl aspect-[3/4]">3</div>
                <div class="bg-red-500 rounded-3xl aspect-[3/4]">4</div>
            </div>
        </div>  
    </section>
</template>