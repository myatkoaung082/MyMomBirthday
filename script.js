// Confetti effect
        function createConfetti() {
            const colors = ['#ff6b6b', '#4ecdc4', '#ffbe0b', '#9b5de5', '#f15bb5'];
            const confettiCount = 150;
            
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = confetti.style.width;
                confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                
                document.body.appendChild(confetti);
                
                // Remove confetti after animation completes
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }

function playMusic() {
    const music = document.getElementById("birthday-music");
    music.play().catch(err => console.warn("Autoplay failed:", err));
  }

  // Auto play after first interaction
  function allowAutoPlay() {
    playMusic();
    // Remove listeners after first interaction
    document.removeEventListener("click", allowAutoPlay);
    document.removeEventListener("touchstart", allowAutoPlay);
    document.removeEventListener("keydown", allowAutoPlay);
  }

  // Wait for first user interaction
  document.addEventListener("click", allowAutoPlay);
  document.addEventListener("touchstart", allowAutoPlay);
  document.addEventListener("keydown", allowAutoPlay);

// Confetti
const confettiContainer = document.getElementById("confetti-container");

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
  confettiContainer.appendChild(confetti);
  setTimeout(() => confetti.remove(), 3000);
}

setInterval(createConfetti, 200);

// Countdown to next birthday
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Determine the correct year for next birthday
    let birthdayYear = currentYear;
    if (now.getMonth() > 6 || (now.getMonth() === 6 && now.getDate() > 26)) {
        birthdayYear += 1;
    }

    const nextBirthday = new Date(birthdayYear, 8, 18, 0, 0, 0); // July is 6 (0-indexed)
    const diff = nextBirthday - now; // Keep 'now' with time so timer ticks live

    if (diff <= 0) {
        document.getElementById('countdown').textContent = "🎉 Happy Birthday May Myat Noe!";
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Run every second
setInterval(updateCountdown, 1000);
updateCountdown();

        

// Slideshow Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide'); // FIX: target .slide, not .slide-img

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? '1' : '0';
    slide.style.zIndex = i === index ? '1' : '0';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initialize
showSlide(currentSlide);

// Auto Slide every 5 seconds
setInterval(nextSlide, 3000);



function typeEffect(element, text, speed = 100) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }

  // When page loads
  window.addEventListener('DOMContentLoaded', () => {
    const nameEl = document.getElementById("typing-name");
    typeEffect(nameEl, "May May", 150); // You can adjust typing speed here
  });


  document.addEventListener("DOMContentLoaded", () => {
  const wishes = [
    `Happy Birthday to the most wonderful mother in the world! 🌸<br>
     Thank you for your endless love and support; I'm so lucky to have you.<br>
     May your day be filled with joy, good health, and happiness always.<br>
     I love you so much, Mom! 💖`,
    `ဟက်ပီဘက်ဒေးပါ မေမေ...🎉<br>

မွေးနေ့မှစ၍နောင်နှစ်ပေါင်းများစွာတိုင်အောင် စိတ်ချမ်းသာပြီး ကျန်းမာ ပျော်ရွှင်ပါစေ... <br>

လူတော်တစ်ယောက်ဖြစ်အောင် ပညာတတ်တစ်ယောက်ဖြစ်အောင် ပံပိုးကူညီထောက်ပံ့ပေးခဲ့တဲ့အတွက် ကျေးဇူးပါမေမေ...<br>

အခုထက်ပိုပြီးလည်း အလုပ်ကြိုးစားပြီး မေမေ့ကို တဖန်ပြန်လည် လုပ်ကျွေး‌ပါရစေ မေမေ...<br>

ကျန်းမာရေးကိုလဲ အထူး ဂရုစိုက်ပါ မေမေ...<br>

အရမ်းချစ်တယ်....မေမေ💕`
  ];

  const el = document.getElementById("birthday-wish");
  let index = 0;

  // timings (adjust to taste)
  const enterDuration = 700; // ms (matches CSS)
  const exitDuration = 700;  // ms (matches CSS)
  const visibleDuration = 3600; // ms time to stay visible between enter & exit

  const enterAnimName = "enterRight";
  const exitAnimName = "exitLeft";

  function showCurrent() {
    // set content and start enter animation
    el.innerHTML = wishes[index];
    el.classList.remove("exit-to-left");
    // force reflow to ensure class addition restarts animation in some browsers
    void el.offsetWidth;
    el.classList.add("enter-from-right");

    // listen for the end of the enter animation
    function onEnter(e) {
      if (e.animationName !== enterAnimName) return;
      el.removeEventListener("animationend", onEnter);

      // after visibleDuration, start exit animation
      setTimeout(() => {
        el.classList.remove("enter-from-right");
        // trigger exit
        void el.offsetWidth;
        el.classList.add("exit-to-left");

        // wait for exit to finish then go to next wish
        function onExit(ev) {
          if (ev.animationName !== exitAnimName) return;
          el.removeEventListener("animationend", onExit);
          index = (index + 1) % wishes.length;
          // next cycle
          showCurrent();
        }
        el.addEventListener("animationend", onExit);
      }, visibleDuration);
    }
    el.addEventListener("animationend", onEnter);
  }

  // start cycle
  showCurrent();
});





