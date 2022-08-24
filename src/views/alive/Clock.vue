<script setup lang="ts">
let date = null;
let timer: number | undefined;

function handRotation(target: HTMLDivElement, deg: number) {
  if (target && target.style) {
    target.style.transform = `rotate(${deg}deg)`;
  }
}

function clock() {
  const secondHand = document.querySelector(".second-hand") as HTMLDivElement;
  const minuteHand = document.querySelector(".minute-hand") as HTMLDivElement;
  const hourHand = document.querySelector(".hour-hand") as HTMLDivElement;

  date = new Date();
  let hour = (date.getHours() % 12) + date.getMinutes() / 59;
  let minute = date.getMinutes();
  let second = date.getSeconds();

  handRotation(hourHand, hour * 30);
  handRotation(minuteHand, minute * 6);
  handRotation(secondHand, second * 6);

  timer = window.setTimeout(clock, 500);
}

onDeactivated(() => {
  window.clearTimeout(timer);
});

onActivated(() => {
  clock();
});

onMounted(() => {
  clock();
});
</script>

<template>
  <div class="w-full h-full flex flex-auto justify-center align-center">
    <div class="clock self-center">
      <div class="inner-circle">
        <div class="hands">
          <div class="dots"></div>
          <div class="hand hour-hand"></div>
          <div class="hand minute-hand"></div>
          <div class="hand second-hand"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
