// Letters Content (You can easily customize these messages!)
const lettersData = {
  1: {
    title: "When We First Met ✨",
    content: `My Love,
Looking back at the day you came into my life, I had no idea you would end up meaning this much to me.
starting vich jdo apni gll hoi c odo pta ni c tuc ene important ho jao gae mere lai. apa ladai v krde aa but fr toh ik duje nu hi choose krde aa😁. starting vich mile fr mulaquat shuru hoi fr gallan jada honia shuru ho gia fr hun apni gll na hove ta lonley lonley feel hunda bhot hna bonge?
apa jdo milde aa odo memories bnana nd tenu pta hun v jdo oo memories nu yaad krdi aa ta vadia feel hunda nd kde kde ta koi funny gll yaad aa jae ta kli hassan lag jani aa😅 jive last tym jdo hun zirakpur mile c odo tuc meri copy kiti c🤏 ee vali gll nal v hassi aa jandi aa bonge 
jdo apa amritsar gae c nd othe apa game khele c nd mai ode vich cheating kiti c nd baad vich jdo video dekhi ta thonu v hassi aai c oo vali moment bhot vadia c 💖. 1st tym jdo ap dera bassi mile c odo bahar ik uncle c nd apa ander bhot slowly slowly hass rhe c but apa nu bhot sari hassi aa rhi c 😂 vo bhi kya din the z🤗
hor v bhot saria memories aa bonge jo yaad krk bhot khushi hundi aa 🤗💖. I LOVE YOU SO MUCH MERE BONGE  ladai jroor hundi aa but bonge kde v tera bura ni sochya sachi 😕 ladaia ta hundia rhendia solly bonge ...
Every little conversation, every laugh, and every smile we've shared 🫶  
Thank you for being the most comforting and special presence in my life. ❤️`
  },
  2: {
    title: "Why You're My Favorite Person 🧸",
    content: `To my sweetest person,
There are a million little things about you that I adore:
• The way you make me laugh even on my worst days.
• How safe and peaceful I feel when I talk to you.
• Your kindness, your patience for ME,
You're not just my bonga you are my safe place, my favorite notification, and my best friend. Never change who you are! 🌟
bonge jinia gallan tenu pta tere nal share kitia onia gallan kise v frnd nu ni pta you are the only one with whom i can share all my gall baat`
  },
  3: {
    title: "My Birthday Wish For You 🥂🎂",
    content: `Happy, Happy Birthday MERE BONGE! 🎉
Today, I pray for all your dreams to come true, for endless success in everything you work for, and for pure happiness to surround you always.
May this year bring you closer to all your goals, jaldi jaldi tuc bhot jada successful hojo and God give you peace of mind koki mai aa n tera dimag khrab krn lai 😁, and lots of reasons to smile. You deserve the best.
I'm so lucky to celebrate another birthday with you! 🎂❤️`
  },
  4: {
    title: "A Little Promise To You 🤞",
    content: `My promise to you today and always:
I promise to stand by your side through the highs and the lows.
I'm always with you agr parents na mnee ta apa ona nu mnava gae but koi v galat step ni chakde 🤗
I promise to always listen, to cheer you on, and to remind you how amazing you are whenever you doubt yourself.
And most importantly, I promise to love you a little more with each passing day.
Happy Birthday, my favorite human(Animal)! Forever yours Bongi. 💕`
  }
};
// Playful phrases for the escaping "NO" button
const noTeasePhrases = [
  "Nice try! 😂",
  "Think again! 😜",
  "Nope, not allowed! 🙅‍♂️",
  "Oops! Too slow! 🏃‍♂️💨",
  "Are you sure? 🥺",
  "Can't click me! 😝",
  "Try the YES button! ❤️",
  "Wrong answer! 🙈"
];
let teaseIndex = 0;
// Escape "NO" Button Logic
const btnNo = document.getElementById("btnNo");
const btnYes = document.getElementById("btnYes");
const yesMessage = document.getElementById("yesMessage");
function moveNoButton() {
  // Switch to fixed position so it can jump freely anywhere in view
  btnNo.style.position = "fixed";
  // Calculate safe window bounds
  const buttonWidth = btnNo.offsetWidth || 120;
  const buttonHeight = btnNo.offsetHeight || 50;
  
  const padding = 30;
  const maxX = window.innerWidth - buttonWidth - padding;
  const maxY = window.innerHeight - buttonHeight - padding;
  const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
  const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
  // Change playful teasing text
  btnNo.innerText = noTeasePhrases[teaseIndex % noTeasePhrases.length];
  teaseIndex++;
  // Slightly enlarge the YES button to tempt him even more
  const currentScale = parseFloat(btnYes.getAttribute("data-scale") || "1");
  const newScale = Math.min(currentScale + 0.08, 1.6);
  btnYes.setAttribute("data-scale", newScale);
  btnYes.style.transform = `scale(${newScale})`;
}
// Attach multiple events for desktop and mobile touch
btnNo.addEventListener("mouseenter", moveNoButton);
btnNo.addEventListener("mouseover", moveNoButton);
btnNo.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Stop mobile click from landing
  moveNoButton();
});
btnNo.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});
// YES Button Click Handler
btnYes.addEventListener("click", () => {
  // Fire celebratory confetti bursts
  celebrateConfetti();
  // Show sweet response message
  yesMessage.classList.remove("hidden");
  // Re-dock the NO button if it was running around
  btnNo.style.position = "relative";
  btnNo.style.left = "auto";
  btnNo.style.top = "auto";
  btnNo.innerText = "I Love You! 🥰";
  btnNo.style.pointerEvents = "none";
  btnNo.style.opacity = "0.7";
  // Smooth scroll down to letters section
  setTimeout(() => {
    document.getElementById("lettersSection").scrollIntoView({ behavior: "smooth" });
  }, 1200);
});

// Confetti Celebration
function celebrateConfetti() {
  if (typeof confetti === "function") {
    // Left side cannon
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.7 }
    });
    // Right side cannon
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.7 }
    });
    // Center heart burst
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 }
    });
  }
}
// Modal Letter Open / Close Logic
const modal = document.getElementById("letterModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
function openLetter(letterId) {
  const data = lettersData[letterId];
  if (!data) return;
  modalTitle.innerText = data.title;
  modalBody.innerText = data.content;
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scroll
  // Mini confetti on letter open
  if (typeof confetti === "function") {
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.5 }
    });
  }
}
function closeLetter() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}
function closeLetterOnBackdrop(event) {
  if (event.target === modal) {
    closeLetter();
  }
}
// Close with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeLetter();
  }
});
// Floating Hearts Background Generator
function createFloatingHearts() {
  const container = document.getElementById("heartsBg");
  const heartIcons = ["❤️", "💖", "💕", "🌸", "✨", "💗"];
  
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${6 + Math.random() * 7}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.fontSize = `${16 + Math.random() * 22}px`;
    container.appendChild(heart);
  }
}
createFloatingHearts();
// Cake interactive blow candle easter egg
const cakeEmoji = document.querySelector(".cake-emoji");
if (cakeEmoji) {
  cakeEmoji.addEventListener("click", () => {
    cakeEmoji.innerText = "✨🥳✨";
    celebrateConfetti();
    setTimeout(() => {
        cakeEmoji.innerText = "🎂";
    }, 2500);
  });
}
// Music player toggle
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");
if (musicToggle && bgMusic) {
  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play().then(() => {
        musicToggle.classList.add("playing");
      }).catch(() => {
        alert("Click anywhere on the page first, then enable music!");
      });
    } else {
      bgMusic.pause();
      musicToggle.classList.remove("playing");
    }
  });
}
