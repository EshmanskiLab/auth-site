import { ref, type Ref } from "vue";

const useBubbles = (bubblesBg: Ref<HTMLDivElement | null>) => {
  const isShowBubbles = ref(false);
  
  const createBubble = () => {
    if (!bubblesBg.value) return sendError('bubblesBg is null');

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
  
    const size = Math.random() * 60 + 20; // 20–80px
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
  
    bubble.style.left = Math.random() * 100 + '%';
  
    const duration = Math.random() * 10 + 8; // 8–18 секунд
    bubble.style.animationDuration = duration + 's';
  
    bubble.style.opacity = String(Math.random() * 0.5 + 0.2);
  
    bubblesBg.value.appendChild(bubble);
  
    // удалить после окончания анимации
    setTimeout(() => {
      bubble.remove();
    }, duration * 1000);
  }

  const startBubbles = () => {
    if (bubblesBg.value === null) return sendError('bubblesBg is null');

    isShowBubbles.value = true;

    const number = setInterval(() => {
      if (!isShowBubbles.value) return clearInterval(number);
      createBubble();
    }, 400);
  }

  const stopBubbles = () => {
    isShowBubbles.value = false;
  }

  const sendError = (msg: string) => {
    console.error(msg);
    stopBubbles();
  }

  return {
    isShowBubbles,
    startBubbles,
    stopBubbles,
  }
}

export default useBubbles;