const preloader = document.getElementById("preloader");
const popups = document.querySelectorAll(".popup");
let currentPopup = 0;

const letterBtn = document.getElementById("openLetterBtn");
const letterBox = document.getElementById("letterBox");
const closeLetter = document.getElementById("closeLetterBtn");

letterBtn.addEventListener("click", () => {
  letterBox.classList.add("show");
});

closeLetter.addEventListener("click", () => {
  letterBox.classList.remove("show");
});

const letterSong = document.getElementById("letterSong");
letterSong.volume = 0.06; 

letterBtn.addEventListener("click", () => {
  letterBox.classList.add("show");
  letterSong.currentTime = 0; 
  letterSong.play();          
});

closeLetter.addEventListener("click", () => {
  letterBox.classList.remove("show");
  letterSong.pause();     
  letterSong.currentTime = 0; 
});


popups.forEach((popup, idx) => {
  const btn = popup.querySelector(".nextBtn");
  btn.addEventListener("click", () => {
    popup.classList.remove("active");
    currentPopup++;

    if(currentPopup < popups.length){
    popups[currentPopup].classList.add("active");
} else {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.remove();
    
      document.getElementById("openLetterBtn").classList.add("show");

      startSky();
    }, 500);
  }
  });
});

const constellations = [
  { name: "Big Dipper", points:[ 
    [0.09,0.32],[0.14,0.29],[0.18,0.3],
    [0.23,0.3],[0.25,0.4],[0.31,0.37],[0.33,0.25]
   ],
    fact:"The Big Dipper is a group of seven bright stars in the sky. People have used it for a long time to find directions. It looks like a big spoon in the night sky. Its stars are easy to spot even for everyone. The Big Dipper always seems to stay in the same place every night.",
    love:"Just like the Big Dipper that has guided travelers home for centuries, your love leads me back to myself every time i lose my way. Even in the silent hours when the world feels heavy, i find direction in the light you carry so effortlessly. Your presence softens every shadow, turning the darkest corners of my heart into places of peace. You are my constant star, my Polaris, my love, the point i return to again and again. With you, every night becomes a sky of wonder, warm and endless, stitched with the comfort of knowing i am never alone."
   },
  { name: "Orion", points:[ 
    [0.82,0.7],[0.83,0.68],[0.84,0.64],
    [0.84,0.61],[0.83,0.55],[0.8189,0.52],
    [0.83,0.55],[0.83,0.55],[0.84,0.61],
    [0.79,0.62],[0.78,0.73],[0.79,0.62],
    [0.76,0.57],[0.70,0.61],[0.69,0.59],
    [0.68,0.48],[0.689,0.49],[0.689,0.49],
    [0.68,0.48],[0.71,0.40],[0.689,0.49],
    [0.69,0.59],[0.70,0.61],[0.75,0.77],
    [0.72,0.948],[0.75,0.77],[0.765,0.75],
    [0.78,0.73],[0.82,0.92],[0.72,0.948] 
  ],
   fact:"Orion was known in Greek mythology as a great hunter whose skills impressed even the gods. Because of his strength and courage, he was placed in the sky as a constellation. His three bright stars form the belt that makes him easy for anyone to find. Many people first learn about constellations by spotting Orion during clear nights. His story continues to be told as one of bravery and recognition.",
   love:"You give me a kind of courage that grows inside me. I take steps i once avoided because you believe in me more than i believe in myself. You make every day feel like something worth exploring instead of something to just get through. Even when life becomes overwhelming, I’m never afraid when i know you’re with me. You turn my everyday moments into something i look forward to. And even from galaxies away, i'd still find you." 
  },
  { name: "Cassiopeia", points:[
    [0.83,0.16],[0.86,0.07],[0.90,0.13],
    [0.94,0.07],[0.98,0.12] 
  ],
   fact:"ICassiopeia was a queen known for her beauty and pride. The gods put her in the sky as a reminder of her story, and that’s why her constellation looks like a tilted “W.” Even when she seems upside down, she’s still easy to spot. People have watched her shape change through the seasons. Her story has lived on in the stars for thousands of years.", 
   love:"And just like Cassiopeia, our love draws shapes only our hearts understand. I want our love to endure through every season, shifting, growing, changing its shape, yet always recognizable and always ours. Even if time turns us upside down or the years tilt us in ways we don’t expect, I want us to remain easy to find in each other’s hearts. I want a love that stays steady across the passing of days, of seasons, of lifetimes. A love that, even after a thousand years, still carries the same warmth, the same truth, the same familiar light." 
  },
  { name: "Leo", points:[ 
    [0.15,0.65],[0.20,0.64],[0.30,0.65],
    [0.298,0.60],[0.26,0.56],[0.26,0.52],
    [0.306,0.47],[0.32,0.50],[0.306,0.47],
    [0.26,0.52],[0.26,0.56],[0.20,0.56],
    [0.15,0.65] 
  ],
    fact:"Leo is ruled by Regulus, the 'heart of the lion'. This lion was incredibly strong and could not be killed by weapons. Heracles defeated it as one of his twelve labors. Zeus honored the lion by placing it in the sky.",
    love:"You are the brave heart that steadies mine. You bring a strength into my life that i notice in the way you show up for the people you care about. There is something steady in you that makes overwhelming days feel manageable. I admire how you keep moving even when life tries to test you. Being close to you makes me understand what true resilience looks like. You help me grow into someone braver than i used to be." 
    },
  { name: "Taurus", points:[
     [0.12,0.9],[0.23,0.88],[0.26,0.89],
     [0.30,0.87],[0.28,0.84],[0.35,0.90],
     [0.40,0.88],[0.35,0.90],[0.30,0.87],
     [0.28,0.84],[0.30,0.70],[0.28,0.84],
     [0.26,0.84],[0.23,0.83],[0.19,0.82],
     [0.11,0.80] 
    ], 
    fact:"Taurus is said to represent Zeus in the form of a bull. He used this form to win the love of Europa, a mortal princess. The brightest star, Aldebaran, marks the bull’s eye. People have told this story for centuries. ",
    love:"My world burns brighter with you in it. Your love is bold and captivating like Zeus in Taurus. You draw me to you with a power i cannot resist. Your presence fills my life with warmth and light. I am yours, completely, in every way hehe. Together, we are a force that cannot be contained. You bring a sense of calm to my life that grounds me in the best way. Even when i feel scattered or unsure, your presence pulls me back to what’s real. You remind me that life becomes lighter when someone stands with you instead of against you. I feel more at ease with myself because you accept me without hesitation. Loving you has become one of the most stabilizing parts of my world." 
    },
  { name: "Scorpius", points:[
     [0.60,0.51],[0.59,0.468],[0.58,0.42],
     [0.56,0.39],[0.58,0.42],[0.54,0.49],
     [0.53,0.51],[0.52,0.54],[0.489,0.63],
     [0.479,0.72],[0.475,0.76],[0.445,0.78],
     [0.395,0.80],[0.355,0.76],[0.365,0.74],
     [0.375,0.695],[0.39,0.70] 
    ],
     fact:"Scorpius was a giant scorpion sent to stop the hunter Orion after he bragged too much. When the scorpion succeeded, both were placed in the sky—far apart so they’d never meet again. Scorpius has a long, curved tail that makes it one of the easiest shapes to find. Many people look for it during warm nights. Its story reminds people about courage and consequences.",
    love:"And just like Scorpius, i want our love to carry both courage and truth. I want us to face whatever comes, not with fear, but with the strength to protect what we have. Even when life tests us or tries to pull us apart, i want our bond to remain unfaltering, shining in its own place in the sky. Let our love be something people could look at and say it endured, not because it was perfect, but because we chose it again and again. I want a love that stays bright through every season, a love that understands the weight of consequence yet chooses to stay brave." 
    },
  { name: "Cygnus", points:[
     [0.40,0.15],[0.42,0.26],[0.45,0.32],
     [0.48,0.37],[0.45,0.32],[0.49,0.25],
     [0.53,0.24],[0.49,0.25],[0.45,0.32],
     [0.42,0.39],[0.42,0.46],[0.40,0.50] 
    ],
     fact:"Cygnus is tied to the Greek story of Orpheus, who was transformed into a swan and placed in the sky after his death. Its shape resembles a cross, which made it easy for ancient stargazers to identify. The constellation includes Deneb, one of the brightest stars in the night sky. Because it lies along the Milky Way, the Greeks believed it carried a path of souls. Cygnus has remained meaningful across cultures because of how consistently visible it is.",
    love:"Like Cygnus, our love crosses everything, even the universe. our love is a path through the stars, guiding us gently through every moment of life. It carries us together, a trail meant just for us, glowing quietly in the night. Our hearts follow that path, connected across time and distance, always finding each other. This love feels sacred, a journey that holds us no matter what comes, always bringing us back. Like the swan gliding along the Milky Way, it moves gracefully, constant and full of light." 
  },
  { name: "Lyra", points:[ 
    [0.55,0.15],[0.58,0.20],[0.67,0.13],
    [0.61,0.10],[0.55,0.15],[0.61,0.10],
    [0.67,0.13],[0.72,0.12] 
  ], 
  fact:"Lyra represents the small harp of Orpheus, a musician whose music could charm anyone, even the gods and wild beasts. Its strings are said to carry melodies that soothe the soul and stir the heart, echoing across the night sky.", 
  love:"From the moment i met you, everything feels like it has its own melody. You're the brightest note in my melody. It’s like a melody that lingers in the air, soft yet unforgettable, carrying us through every moment. Every day with you adds a new note. It’s a harmony that stays with me, echoing in my heart long after the day has ended. Being with you feels like a song that never fades, gentle but full of power, guiding me through everything. Together, we create a music that is ours alone, sweet and enduring, leaving traces of joy wherever we go." 
},
  { name: "Andromeda", points:[
     [0.77,0.311],[0.85,0.34],[0.93,0.42],
     [0.98,0.50],[0.93,0.42],[0.89,0.55] 
  ], 
  fact:"Andromeda was a princess saved from danger by the hero Perseus (the one i told you who beheaded Medusa). And also, due to the strong gravitational pull between it and the Milky Way, Andromeda is moving toward our galaxy on a collision course. While the universe is expanding on a large scale, Andromeda is close enough that local gravity overpowers the expansion of space, drawing it pulled toward the Milky Way.", 
  love:"Just like these two galaxies, no matter the vastness around us, there’s a force that always draws us together. Distance and time may try to pull us apart, but something stronger, invisible yet undeniable, keeps us moving toward each other. Even in a universe that stretches endlessly, i feel us destined to meet, connected by a gravity all our own. Even galaxies expand, my love always stays with you." 
  },
  { name: "Pegasus", points:[ 
    [0.70,0.22],[0.77,0.20],[0.77,0.31],
    [0.65,0.33],[0.70,0.32],[0.70,0.22],
    [0.67,0.21] 
  ], 
  fact:"Pegasus is a winged horse born from the blood of Medusa. Known for its incredible speed and ability to carry heroes across the skies. Pegasus is not just a companion in battle, but as a messenger between mortals and gods, bridging the world of humasn and the devine. Pegasus repesents the boundless potential of courage, imagination and the pursuit of dream.",
  love:"With you, i feel like i can fly. It feels like ridign Pegasus through endless skies, wings unfurling into light and possibility. You lift me beyond the weight of the world, carrying me where dreams meet the stars. You'll understand this soon, and read this again once you do. In your love, i soar, limitless, and entirely free." 
}
];

function startSky(){
  const bg = document.getElementById("bg");
  const ctxBg = bg.getContext("2d");
  const constC = document.getElementById("constCanvas");
  const ctx = constC.getContext("2d");

  let W,H;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    bg.width = W; constC.width = W;
    bg.height = H; constC.height = H;
    computeConstPositions();
  }
  window.addEventListener("resize", resize);
  resize();

  const bgStars = [];
  const starCount = Math.floor((W*H)/6500);
  for(let i=0;i<starCount;i++){
    bgStars.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+0.3,alpha:Math.random()*0.9+0.1,tw:Math.random()*0.015+0.004,driftX:(Math.random()*2-1)*0.015,driftY:(Math.random()*2-1)*0.015});
  }

  function drawBg(){
    const g = ctxBg.createRadialGradient(W/2,H/2,0,W/2,H/2,H*0.9);
    g.addColorStop(0,"#000016"); g.addColorStop(1,"#000009");
    ctxBg.fillStyle=g; ctxBg.fillRect(0,0,W,H);

    for(const s of bgStars){
      s.x+=s.driftX; s.y+=s.driftY;
      if(s.x<0)s.x=W;if(s.x>W)s.x=0;if(s.y<0)s.y=H;if(s.y>H)s.y=0;
      const tw=(Math.sin(Date.now()*s.tw+s.x*0.01)+1)*0.5;
      const alpha=0.2+tw*0.8;
      ctxBg.globalAlpha=alpha;
      ctxBg.beginPath();
      ctxBg.fillStyle="#fff";
      ctxBg.arc(s.x,s.y,s.r+tw*0.8,0,Math.PI*2);
      ctxBg.fill();
    }
    ctxBg.globalAlpha=1;
  }

  function computeConstPositions() {
    for(const c of constellations){
      c.abs = c.points.map(p=>[p[0]*W,p[1]*H]);
    }
  }
  computeConstPositions();

  function drawConstellations(mouse){
    ctx.clearRect(0,0,W,H);
    ctx.save(); ctx.globalCompositeOperation="lighter";
    for(const c of constellations){
      ctx.beginPath();
      for(let i=0;i<c.abs.length;i++){
        const [x,y]=c.abs[i];
        if(i===0)ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.strokeStyle="rgba(190,200,255,0.05)"; ctx.lineWidth=16; ctx.stroke();
    }
    ctx.restore();

    for(const c of constellations){
      ctx.beginPath();
      for(let i=0;i<c.abs.length;i++){
        const [x,y]=c.abs[i]; if(i===0)ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.strokeStyle="rgba(220,230,255,0.25)"; ctx.lineWidth=1; ctx.stroke();
      for(const [x,y] of c.abs){
        const t=(Math.sin(Date.now()*0.001+x*0.001)+1)/2;
        const r=2.8+t*3.2;
        ctx.beginPath(); ctx.fillStyle=`rgba(255,255,255,${0.12+t*0.18})`; ctx.arc(x,y,r*2.2,0,Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.fillStyle=`rgba(255,255,255,${0.75+t*0.25})`; ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.fillStyle="#fff"; ctx.arc(x,y,1.25,0,Math.PI*2); ctx.fill();
      }
    }

    if(mouse){
      ctx.globalAlpha=0.3;
      for(const c of constellations){
        for(const [x,y] of c.abs){
          const d=Math.hypot(mouse.x-x,mouse.y-y);
          if(d<120){
            ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(mouse.x,mouse.y);
            ctx.strokeStyle=`rgba(255,200,230,${0.15+(1-d/120)*0.25})`; ctx.lineWidth=0.6; ctx.stroke();
          }
        }
      }
      ctx.globalAlpha=1;
    }
  }

  const HIT=28;
  function findHit(x,y){
    for(const c of constellations){
      for(const p of c.abs){
        if(Math.hypot(x-p[0],y-p[1])<=HIT)return c;
      }
    }
    return null;
  }

  const box=document.getElementById("infoBox");
  const close=document.getElementById("infoClose");
  const nameEl=document.getElementById("constName");
  const factEl=document.getElementById("fact");
  const loveEl=document.getElementById("love");

  function showInfo(c,x,y){
    nameEl.textContent=c.name;
    factEl.textContent="Fact: "+c.fact;
    loveEl.textContent="💬 "+c.love;

    const bw=box.offsetWidth, bh=box.offsetHeight;
    let left=x+18; if(left+bw>W)left=x-bw-18;
    let top=y-bh/2; if(top<20)top=20; if(top+bh>H)top=H-bh-20;
    box.style.left=left+"px"; box.style.top=top+"px";
    box.classList.add("show");
  }

const starSound = document.getElementById("starSound");

constC.addEventListener("click", e => {
  const c = findHit(e.clientX, e.clientY);
  if(c) {
    showInfo(c, e.clientX, e.clientY);

    starSound.currentTime = 0; 
    starSound.play();
  } else {
    box.classList.remove("show");
  }
});

  close.addEventListener("click", ()=>box.classList.remove("show"));

  let mouse=null;
  constC.addEventListener("mousemove", e=>mouse={x:e.clientX,y:e.clientY});
  constC.addEventListener("mouseleave", ()=>mouse=null);

  function loop(){ drawBg(); drawConstellations(mouse); requestAnimationFrame(loop); }
  loop();

  (function hint(){
    const h=document.createElement("div");
    h.style.position="absolute"; h.style.bottom="7%"; h.style.left="50%"; h.style.transform="translateX(-50%)";
    h.style.padding="10px 18px"; h.style.background="rgba(255,255,255,0.05)"; h.style.border="1px solid rgba(255,255,255,0.1)";
    h.style.backdropFilter="blur(4px)"; h.style.borderRadius="999px"; h.style.color="#eaf0ff"; h.style.fontSize=".95rem";
    h.textContent="Tap the bright stars — each one has a message for you.";
    document.body.appendChild(h);
    setTimeout(()=>h.style.opacity="0",4500);
    setTimeout(()=>h.remove(),5500);
  })();
}
