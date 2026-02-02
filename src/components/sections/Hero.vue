<template>
  <section id="hero" class="relative min-h-screen flex items-center w-full overflow-hidden">
    <!-- Local Hero Background (Green Theme) -->
    <div class="absolute inset-0 z-0 bg-charcoal">
      <!-- Subtle Green Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-celadon/10 opacity-50"></div>
      
      <!-- Panel 1: Architectural block (Right side) - Green Tint -->
      <div 
        class="absolute top-0 right-0 w-[80%] md:w-[55%] h-full bg-celadon/[0.03] transform -skew-x-2 origin-top-right"
      ></div>

      <!-- Panel 2: Floating block (Top) - Lighter Green Tint -->
      <div 
        class="absolute top-[-10%] right-[-10%] md:right-[15%] w-[50%] md:w-[35%] h-[60%] md:h-[80%] bg-celadon/[0.05] rounded-bl-3xl"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 layout-container">
      <div class="space-y-6">
        <!-- Label -->
        <div class="flex items-center gap-4 animate-fade-in-up" style="animation-delay: 100ms;">
          <h2 class="text-xs md:text-sm font-medium tracking-[0.2em] text-celadon uppercase">Hello</h2>
          <div class="h-px w-8 md:w-12 bg-celadon/30"></div>
        </div>
        
        <!-- Primary Headline -->
        <h1 class="text-5xl md:text-8xl lg:text-9xl font-bold text-off-white leading-[0.9] tracking-tight animate-fade-in-up" style="animation-delay: 200ms;">
          <span class="block text-3xl md:text-5xl lg:text-6xl font-light text-soft-gray mb-2 md:mb-4">my name is</span>
          Vinita K.
        </h1>
        
        <!-- Supporting Paragraph -->
        <div class="pt-8 max-w-2xl animate-fade-in-up" style="animation-delay: 300ms;">
          <p class="text-lg md:text-xl text-soft-gray leading-relaxed font-light mb-4">
            I build on the web with a focus on structure, clarity, and long-term impact. I’m comfortable working through complexity, making decisions without clear answers, and shaping work that can grow and remain understandable over time.</p>
          <p class="text-lg md:text-xl text-soft-gray/80 leading-relaxed font-light">
            I’m interested in building work that holds up through growth, change, and the realities of real use.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  opacity: 0;
}
</style>
