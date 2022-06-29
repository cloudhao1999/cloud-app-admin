/**
 * 控制page的全屏状态
 */
export function useFullScreen() {
  const isFullScreen = ref<boolean>(false);

  const fullScreen = () => {
    isFullScreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen();
    isFullScreen.value = !isFullScreen.value;
  };

  document.addEventListener("fullscreenchange", () => {
    isFullScreen.value = document.fullscreenElement !== null;
  });

  return {
    isFullScreen,
    fullScreen
  };
}

export type UseFullScreenReturn = ReturnType<typeof useFullScreen>;
