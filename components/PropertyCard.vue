<template>
  <div class="bg-white rounded shadow-sm overflow-hidden">
    <div class="flex flex-col md:flex-row">
      <div class="relative md:w-[400px] h-[280px]">
        <img src="https://placehold.co/800x600" alt="Property" class="w-full h-full object-cover" />
        <div class="absolute inset-0 flex items-center">
          <button class="w-12 h-12 flex items-center justify-center text-white text-2xl hover:bg-black/20">&lt;</button>
          <div class="flex-1"></div>
          <button class="w-12 h-12 flex items-center justify-center text-white text-2xl hover:bg-black/20">&gt;</button>
        </div>
      </div>
      
      <div class="flex-1 p-6">
        <h3 class="text-xl text-[#333333] font-medium mb-3">Квартиры с отделкой в ЖК «Зеленый Город»</h3>
        <h4 class="text-xl text-[#333333] font-medium mb-4">Ленинградское ш.</h4>
        
        <p class="text-[15px] text-[#666666] leading-relaxed mb-3">
          Жилой комплекс эконом класса в 40 км от МКАД по Ленинградскому или Дмитровскому шоссе.
        </p>
        <p class="text-[15px] text-[#666666] leading-relaxed mb-6">
          Рядом школа, детский сад, два озера с пляжем.
        </p>
        
        <div class="flex flex-wrap gap-x-6 gap-y-2 mb-6">
          <a href="#" class="text-[13px] text-[#666666] hover:text-[#333333] hover:underline">Сайт</a>
          <a href="#" class="text-[13px] text-[#666666] hover:text-[#333333] hover:underline">Акции</a>
          <a href="#" class="text-[13px] text-[#666666] hover:text-[#333333] hover:underline">Цены</a>
          <a href="#" class="text-[13px] text-[#666666] hover:text-[#333333] hover:underline">Схема проезда</a>
          <a href="#" class="text-[13px] text-[#666666] hover:text-[#333333] hover:underline">Школа</a>
          <a href="#" class="text-[13px] text-[#666666] hover:text-[#333333] hover:underline">Детский сад</a>
          <a href="#" class="text-[13px] text-[#666666] hover:text-[#333333] hover:underline">2 озера</a>
        </div>

        <div class="flex gap-3">
          <button class="flex items-center gap-2 px-5 py-2 bg-[#F2F2F2] rounded text-[13px] text-[#333333] hover:bg-[#E5E5E5]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Позвонить
          </button>
          <button class="flex items-center gap-2 px-5 py-2 bg-[#F2F2F2] rounded text-[13px] text-[#333333] hover:bg-[#E5E5E5]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            Написать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>