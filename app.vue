<template>
  <div class="min-h-screen bg-[#F2F2F2]">
    <header class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <h1 class="text-[#333333] text-[13px] tracking-wide">ЛУЧШЕЕ ДЛЯ ЖИЗНИ</h1>
        <button class="text-[13px] text-[#666666] hover:text-[#333333]">Реклама на площадке</button>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-6">
      <h2 class="text-[32px] font-light text-center mb-8 text-[#333333]">ЛУЧШИЕ НОВОСТРОЙКИ ЭКОНОМ-КЛАССА</h2>
      
      <div class="flex gap-2 mb-4">
        <button class="px-4 py-1.5 bg-[#F2F2F2] border border-[#CCCCCC] rounded text-[13px] text-[#333333] font-medium">Шоссе</button>
        <button class="px-4 py-1.5 border border-[#CCCCCC] rounded text-[13px] text-[#333333]">Шоссе</button>
        <button class="px-4 py-1.5 border border-[#CCCCCC] rounded text-[13px] text-[#333333]">Шоссе</button>
      </div>

      <div class="flex gap-2 mb-8">
        <button class="text-[13px] text-[#0066CC] hover:underline">Новорижское ×</button>
        <button class="text-[13px] text-[#0066CC] hover:underline">Ярославское ×</button>
      </div>

      <div class="space-y-4">
        <PropertyCard v-for="i in 3" :key="i" />
      </div>
    </main>

    <footer class="bg-white border-t border-gray-200 mt-8">
      <div class="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <span class="text-[#333333] text-[13px] tracking-wide">ЛУЧШЕЕ ДЛЯ ЖИЗНИ</span>
        <button class="text-[13px] text-[#666666] hover:text-[#333333]">Реклама на площадке</button>
      </div>
    </footer>
  </div>
</template>