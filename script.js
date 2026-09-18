/**
 * 😂 BAHANA GENERATOR v2.0 — DESI EXCUSE LAB
 * Pure Vanilla JavaScript: Audio Synthesizer, 65+ Desi Excuses,
 * Escalation Engine, Mascot State Machine, Battle Arena & Lie Detector.
 */

// ============================================================================
// 1. SOUND FX SYNTHESIZER (Zero external MP3 dependencies, 100% Web Audio)
// ============================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  }

  playFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);
        gain.gain.setValueAtTime(0, now + idx * 0.09);
        gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.09 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.09);
        osc.stop(now + idx * 0.09 + 0.25);
      });
    } catch (e) {}
  }

  playBuzzer() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(130, this.ctx.currentTime);
      osc.frequency.setValueAtTime(110, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch (e) {}
  }

  playEscalation() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(950, now + 0.3);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }
}

const sfx = new SoundFX();

// ============================================================================
// 2. CURATED DESI EXCUSES DATABASE (65+ Original, Authentic, Family-Friendly)
// ============================================================================
let EXCUSES_DB = [
  // --- Student ---
  {
    id: 1,
    category: "Student",
    text: "Bhai, assignment complete tha, lekin laptop ne aaj emotional leave le li.",
    absurdity: 82,
    suspicion: 89,
    risk: "Chappal Imminent 🩴",
    escalation: "Aur phir laptop ne police complaint darj karwa di ke main usse overtime karwa raha tha!"
  },
  {
    id: 2,
    category: "Student",
    text: "Sir, mera pen chalte chalte existential crisis ka shikaar ho gaya, kehta hai main likh ke kya karoon.",
    absurdity: 78,
    suspicion: 84,
    risk: "Dangerous 🟡",
    escalation: "Phir pen ne poora answer paper khudi kha liya taake dunia ko dard na dikhana paray."
  },
  {
    id: 3,
    category: "Student",
    text: "Sir, maine project PDF banaya tha, lekin save button ne achanak resignation de diya.",
    absurdity: 75,
    suspicion: 91,
    risk: "Dangerous 🟡",
    escalation: "Aur folder abhi bhi UN peace council se compensation maang raha hai."
  },
  {
    id: 4,
    category: "Student",
    text: "Kal raat 3 baje notes padhne betha toh kitaab ne khud band ho kar kaha: 'So ja beta, tere bas ka nahi'.",
    absurdity: 88,
    suspicion: 94,
    risk: "Khatarnak 🔴",
    escalation: "Aur subah dekha toh kitabon ne almari lock karke key neighbour ke billo ko de di thi."
  },
  {
    id: 5,
    category: "Student",
    text: "Sir kal light nahi thi, candle jalayi toh candle ne bola: 'Bhai tu waise bhi fail hai, mujhe kyu zaya kar raha hai?'.",
    absurdity: 84,
    suspicion: 88,
    risk: "Safe-ish 🟢",
    escalation: "Phir candle ne baqi candles ko call kar ke strikes declare kar di."
  },
  {
    id: 6,
    category: "Student",
    text: "Group project mein sab ne kaam divide kiya tha, mera hissa tha moral support dena.",
    absurdity: 68,
    suspicion: 72,
    risk: "Safe-ish 🟢",
    escalation: "Aur itni deep moral support di ke main khud spiritual guru ban ke himalayas nikal gaya."
  },

  // --- Office ---
  {
    id: 7,
    category: "Office",
    text: "Boss, main bilkul login karne wala tha, lekin Wi-Fi router rooth ke bed ke neechay chala gaya.",
    absurdity: 79,
    suspicion: 86,
    risk: "Dangerous 🟡",
    escalation: "Router keh raha hai jab tak biryani ki khushbu nahi aayegi, 5G signals deliver nahi karunga."
  },
  {
    id: 8,
    category: "Office",
    text: "Email send toh ho gaya tha, lagta hai internet ke raste mein traffic jam ho gaya hai.",
    absurdity: 72,
    suspicion: 80,
    risk: "Safe-ish 🟢",
    escalation: "PTA ne email ko Naka lagaya hua hai ke challan bhare bina aage nahi jane denge."
  },
  {
    id: 9,
    category: "Office",
    text: "Sir meri spreadsheet ka formula ro raha tha, main usay console karne mein masroof ho gaya.",
    absurdity: 89,
    suspicion: 96,
    risk: "Khatarnak 🔴",
    escalation: "Ab formula keh raha hai VLOOKUP meri marzi ke baghair mujh pe enforce mat karo!"
  },
  {
    id: 10,
    category: "Office",
    text: "Mera mouse cursor desktop screen ke border pe phans gaya tha, ambulance bulani parhi.",
    absurdity: 93,
    suspicion: 98,
    risk: "Chappal Imminent 🩴",
    escalation: "Cursor ne strike kar di hai aur monitor screen pe 144 lag chuka hai."
  },
  {
    id: 11,
    category: "Office",
    text: "Main Monday motivation dhoondte dhoondte Thursday tak pohnch gaya.",
    absurdity: 65,
    suspicion: 75,
    risk: "Safe-ish 🟢",
    escalation: "Aur Friday subah pata chala ke Monday toh kab ka calendar chor ke bhaag gaya."
  },
  {
    id: 12,
    category: "Office",
    text: "Client ne feedback diya tha 'keep it simple', toh maine blank file bhej di. Simplicity at peak!",
    absurdity: 91,
    suspicion: 94,
    risk: "Khatarnak 🔴",
    escalation: "Client ab spiritual silence mein ja chuka hai aur mujhe Zen Master bulata hai."
  },

  // --- Late Arrival ---
  {
    id: 13,
    category: "Late Arrival",
    text: "Main late nahi hoon, dar-asl waqt mujhse 20 minute aage chalne ki koshish kar raha tha.",
    absurdity: 76,
    suspicion: 83,
    risk: "Safe-ish 🟢",
    escalation: "Einstein ki theory of relativity ke mutabiq main waqt se pehle aaya hoon, aap log slow hain."
  },
  {
    id: 14,
    category: "Late Arrival",
    text: "Raste mein ek billi ne rasta kaata, main uske peeche gaya dekhne ke wo theek pohnchi ya nahi.",
    absurdity: 88,
    suspicion: 92,
    risk: "Dangerous 🟡",
    escalation: "Billi ne mujhe apni family meeting mein chief guest bana liya tha."
  },
  {
    id: 15,
    category: "Late Arrival",
    text: "Mera jootha achanak right turning lene se inkaar kar raha tha, 4 roundabout ghoom ke seedha kiya.",
    absurdity: 85,
    suspicion: 89,
    risk: "Dangerous 🟡",
    escalation: "Phir traffic wardens ne joothay ka driving license check kar ke challan kaat dia."
  },
  {
    id: 16,
    category: "Late Arrival",
    text: "Alarm bja tha, lekin maine sapne mein alarm ko snooze ki jagah bribe de di thi.",
    absurdity: 82,
    suspicion: 87,
    risk: "Dangerous 🟡",
    escalation: "Alarm abhi NAB ki custody mein hai corruption ke ilzam pe."
  },
  {
    id: 17,
    category: "Late Arrival",
    text: "Lift ground floor pe rukne ki bajaye thodi deep meditation mein chali gayi thi.",
    absurdity: 73,
    suspicion: 81,
    risk: "Safe-ish 🟢",
    escalation: "Lift keh rahi thi 'Neeche ja kar bhi kya milna hai, yahan beech mein sakoon hai'."
  },

  // --- Desi Family ---
  {
    id: 18,
    category: "Desi Family",
    text: "Ammi ne kaha 5 minute mein dahi le kar aao, dukan pe chacha ne khandan ki 1947 ki history shuru kar di.",
    absurdity: 62,
    suspicion: 40,
    risk: "Safe-ish 🟢",
    escalation: "Dahi toh khatam ho gayi, lekin main ab khandan ka official historical archivist hoon."
  },
  {
    id: 19,
    category: "Desi Family",
    text: "Phuppo ne WhatsApp voice note bheja tha 14 minute ka, usko sunte sunte subah se shaam ho gayi.",
    absurdity: 67,
    suspicion: 55,
    risk: "Safe-ish 🟢",
    escalation: "Voice note ke end mein unhone sirf yeh pucha ke 'tamatar kitne rupay kilo hain?'."
  },
  {
    id: 20,
    category: "Desi Family",
    text: "Khandan ke WhatsApp group mein kisi ne 'Good Morning with Rose' bheja tha, phone freeze ho gaya.",
    absurdity: 70,
    suspicion: 65,
    risk: "Safe-ish 🟢",
    escalation: "Phoolon ki khushbu itni tez thi ke processor garmi se be-hosh ho gaya."
  },
  {
    id: 21,
    category: "Desi Family",
    text: "Shaadi mein paratha lene gaya tha, chacha ke betay ne career counselling shuru kar di.",
    absurdity: 60,
    suspicion: 45,
    risk: "Safe-ish 🟢",
    escalation: "Counselling aisi hui ke maine paratha chhor ke plumbing ka diploma register karwa liya."
  },
  {
    id: 22,
    category: "Desi Family",
    text: "Ammi ne chappal aisi target lock kar ke phenki ke trajectory calculate karte karte time nikal gaya.",
    absurdity: 86,
    suspicion: 78,
    risk: "Chappal Imminent 🩴",
    escalation: "NASA wale chappal ki aerodynamics research karne mohallay mein aa gaye hain."
  },

  // --- Relationship ---
  {
    id: 23,
    category: "Relationship",
    text: "Baby, message seen is liye nahi kiya kyun ke mera screen protector tumhari tareef mein pighal gaya tha.",
    absurdity: 92,
    suspicion: 97,
    risk: "Chappal Imminent 🩴",
    escalation: "Ab screen keh rahi hai main sirf tumhari voice notes sunungi, baqi sab block."
  },
  {
    id: 24,
    category: "Relationship",
    text: "Call is liye cut hua kyun ke battery ne kaha: 'Itna pyaar main bardasht nahi kar sakti'.",
    absurdity: 87,
    suspicion: 93,
    risk: "Dangerous 🟡",
    escalation: "Battery ne short circuit ho kar phone case pe love emoji print kar diya."
  },
  {
    id: 25,
    category: "Relationship",
    text: "Tumhara text parh ke main itna khush hua ke main 3 ghante balcony pe chaand ko dekh ke muskurata raha.",
    absurdity: 81,
    suspicion: 89,
    risk: "Dangerous 🟡",
    escalation: "Mohallay walon ne samjha main werewolf ban gaya hoon, 15 bula li."
  },
  {
    id: 26,
    category: "Relationship",
    text: "Main reply karne hi laga tha ke auto-correct ne bola: 'Rehne de, baat bigad jayegi'.",
    absurdity: 74,
    suspicion: 82,
    risk: "Safe-ish 🟢",
    escalation: "Auto-correct ne khud rishta pakka karne ka message bhejne ki dhamki di thi."
  },

  // --- Friends ---
  {
    id: 27,
    category: "Friends",
    text: "Bhai treat dene toh aa raha tha, lekin wallet ne raste mein khudkushi kar li.",
    absurdity: 84,
    suspicion: 95,
    risk: "Dangerous 🟡",
    escalation: "Wallet ne letter chhora hai: 'Mere andar 20 rupay ke ilawa kuch nahi tha, izzat bachao'."
  },
  {
    id: 28,
    category: "Friends",
    text: "Chai pe aane wala tha, lekin mere motor-cycle ne kick maari toh meri rooh 2 street aage gir gayi.",
    absurdity: 89,
    suspicion: 91,
    risk: "Dangerous 🟡",
    escalation: "Rooh wapas aate aate dhabba band ho gaya aur dhabba wala bhi so gaya."
  },
  {
    id: 29,
    category: "Friends",
    text: "Bhai main nikal chuka hoon! (A statement made while still under the blanket in AC).",
    absurdity: 70,
    suspicion: 99,
    risk: "Khatarnak 🔴",
    escalation: "Google Maps ne live location track karke doston ko bistar ki photo bhej di."
  },
  {
    id: 30,
    category: "Friends",
    text: "Bhai petrol khatam ho gaya tha, aur padosi ki billi petrol siphon karne nahi de rahi thi.",
    absurdity: 86,
    suspicion: 92,
    risk: "Dangerous 🟡",
    escalation: "Billi ne mujhe apni security guard union ka member bana ke duty pe laga diya."
  },

  // --- Universal ---
  {
    id: 31,
    category: "Universal",
    text: "Gravity aaj mere mohallay mein thodi zyada thi, bistar se uthna physical impossible tha.",
    absurdity: 91,
    suspicion: 96,
    risk: "Khatarnak 🔴",
    escalation: "Sir Isaac Newton ne qabar se phone kar ke maafi maangi ke calculation galat ho gayi thi."
  },
  {
    id: 32,
    category: "Universal",
    text: "Maine sochne ki koshish ki, lekin CPU usage 100% ho gaya aur brain fan chalne laga.",
    absurdity: 80,
    suspicion: 85,
    risk: "Safe-ish 🟢",
    escalation: "Dimagh ne blue screen error de ke kaha: 'Chai pilao pehle'."
  },
  {
    id: 33,
    category: "Universal",
    text: "Mera shauq tha aane ka, lekin qismat ne beech mein U-turn ka board laga diya.",
    absurdity: 76,
    suspicion: 82,
    risk: "Safe-ish 🟢",
    escalation: "Board keh raha tha: 'Aage sirf bezatti hai, wapas so jao'."
  },
  {
    id: 34,
    category: "Universal",
    text: "Meri rooh tayyar thi, lekin meri body ne strike call kar di.",
    absurdity: 79,
    suspicion: 84,
    risk: "Safe-ish 🟢",
    escalation: "Body abhi bhi 8 ghante neend aur do samoson ki minimum wage maang rahi hai."
  },

  // --- Exam Survival ---
  {
    id: 35,
    category: "Exam Survival",
    text: "Question paper out of syllabus nahi tha, balki syllabus out of dunia tha.",
    absurdity: 83,
    suspicion: 75,
    risk: "Safe-ish 🟢",
    escalation: "Teacher ne khud pucha: 'Beta question 3 kahan se solve kiya, main toh answer bhool gaya tha?'."
  },
  {
    id: 36,
    category: "Exam Survival",
    text: "Exam hall mein invigilator meri taraf aise dekh raha tha jaise main CIA ka top agent hoon.",
    absurdity: 77,
    suspicion: 70,
    risk: "Safe-ish 🟢",
    escalation: "Maine paper pe code word likh diya, woh 45 minute decode karte rahe."
  },
  {
    id: 37,
    category: "Exam Survival",
    text: "Formula yaad kiya tha, lekin exam room mein enter hote hi sanitizer ne dimaag se formula bhi saaf kar dia.",
    absurdity: 85,
    suspicion: 88,
    risk: "Dangerous 🟡",
    escalation: "Sanitizer 99.9% knowledge germs ko maar chuka tha."
  },
  {
    id: 38,
    category: "Exam Survival",
    text: "Calculator mein answer 'SYNTAX ERROR' aaya, maine wahi answer likh ke submit kar diya.",
    absurdity: 90,
    suspicion: 92,
    risk: "Dangerous 🟡",
    escalation: "Examiner ne 'LOGIC ERROR' likh ke mujhe certificate of bravery de diya."
  },

  // --- Online Meeting ---
  {
    id: 39,
    category: "Online Meeting",
    text: "Sir, mera mic on tha lekin meri awaz ko stage fright ho gaya.",
    absurdity: 82,
    suspicion: 89,
    risk: "Dangerous 🟡",
    escalation: "Mic ne kaha pehle 500 audience claps arrange karo phir speech release hogi."
  },
  {
    id: 40,
    category: "Online Meeting",
    text: "Camera open karta toh background mein ammi kapray dho rahi theen, sound effects distracting hote.",
    absurdity: 64,
    suspicion: 50,
    risk: "Safe-ish 🟢",
    escalation: "Ammi ne meeting mein aake CEO ko daant dia ke 'chhotay bachay ko itna kaam kyu dete ho?'."
  },
  {
    id: 41,
    category: "Online Meeting",
    text: "Sir, Zoom app crash nahi hua, Zoom app ne khud resignation request daal di hai.",
    absurdity: 88,
    suspicion: 94,
    risk: "Khatarnak 🔴",
    escalation: "Zoom keh raha hai: 'Roz roz itni be-maani meetings mujhse nahi bardasht hotin'."
  },
  {
    id: 42,
    category: "Online Meeting",
    text: "'You are on mute' sunte sunte meri sensitivity hurt ho gayi, main silent protest pe chala gaya.",
    absurdity: 79,
    suspicion: 83,
    risk: "Safe-ish 🟢",
    escalation: "Ab poori company ne candle light vigil rakhi hai meri audio wapsi ke liye."
  },

  // --- Pakistani Daily Life ---
  {
    id: 43,
    category: "Pakistani Daily Life",
    text: "Sui Gas chali gayi thi, chai nahi banni toh human body boot nahi ho saki.",
    absurdity: 60,
    suspicion: 35,
    risk: "Safe-ish 🟢",
    escalation: "Padosi ke cylinder se chai mangwai toh padosi ne adha rishta pakka karwa liya."
  },
  {
    id: 44,
    category: "Pakistani Daily Life",
    text: "Load shedding aisi hui ke UPS ne bhi 'Alvida' bol ke shut down kar lia.",
    absurdity: 68,
    suspicion: 45,
    risk: "Safe-ish 🟢",
    escalation: "UPS ab battery ke sath bhag ke Dubai settle hone ka plan bana raha hai."
  },
  {
    id: 45,
    category: "Pakistani Daily Life",
    text: "Gali ke kutton ne emergency Jirga bulaya tha, rasta block tha.",
    absurdity: 85,
    suspicion: 88,
    risk: "Dangerous 🟡",
    escalation: "Jirga ne faisla sunaya ke raat 10 baje ke baad koi bike bina biscuit nahi guzregi."
  },
  {
    id: 46,
    category: "Pakistani Daily Life",
    text: "Rikshaw walay ne aisi driving ki ke mera brain organ right side se left side shift ho gaya.",
    absurdity: 87,
    suspicion: 80,
    risk: "Safe-ish 🟢",
    escalation: "Ab main Urdu ulta bol raha hoon aur maths seedha samajh aa raha hai."
  },
  {
    id: 47,
    category: "Pakistani Daily Life",
    text: "Meter reader bhai ne meter dekh ke aisa aah bhara ke mera electricity bill sharam se behosh ho gaya.",
    absurdity: 81,
    suspicion: 85,
    risk: "Safe-ish 🟢",
    escalation: "WAPDA walon ne bill pe sympathy discount likh ke bhej dia."
  },
  {
    id: 48,
    category: "Pakistani Daily Life",
    text: "Doodh walay bhai ne doodh mein itna pani milaya tha ke glass mein machliyan tair rahi theen.",
    absurdity: 89,
    suspicion: 86,
    risk: "Safe-ish 🟢",
    escalation: "Maine aquarium khol lia aur doodh bechne ki bajaye dolphin show shuru kar dia."
  },
  {
    id: 49,
    category: "Pakistani Daily Life",
    text: "Mohallay ki aunty ne terrace se aawaz di, poora plan wahi cancel ho gaya.",
    absurdity: 58,
    suspicion: 40,
    risk: "Safe-ish 🟢",
    escalation: "Aunty ne bola 'Beta kahan ja rahay ho?', aur mere munh se sach nikal gaya."
  },

  // --- More Diverse & Extra Absurd ---
  {
    id: 50,
    category: "Office",
    text: "Calendar invite aya tha, lekin maine Google Calendar ko ignore kar ke taaron ki gardish se waqt dekha.",
    absurdity: 86,
    suspicion: 91,
    risk: "Dangerous 🟡",
    escalation: "Sitaron ne bataya ke aaj work-from-bed hi cosmic destiny hai."
  },
  {
    id: 51,
    category: "Student",
    text: "Bhai assignment laptop ne khud delete kiya, kehta hai 'tum is se behtar likh sakte ho'.",
    absurdity: 92,
    suspicion: 97,
    risk: "Chappal Imminent 🩴",
    escalation: "Laptop ne ab online motivational speaker ban kar courses bechna shuru kar diye hain."
  },
  {
    id: 52,
    category: "Friends",
    text: "Main plan pe nikal raha tha, lekin mere sofe ne mujh pe mohabat bhara jadoo kar diya.",
    absurdity: 83,
    suspicion: 92,
    risk: "Dangerous 🟡",
    escalation: "Sofa bol raha hai 'Tu kahan jayega zaleel hone, idhar hi aaram se let'."
  },
  {
    id: 53,
    category: "Late Arrival",
    text: "Google Maps ne shortcut dikhaya, main sidha kisi ke drawing room mein pohnch gaya.",
    absurdity: 88,
    suspicion: 89,
    risk: "Dangerous 🟡",
    escalation: "Unhone mujhe chai pilayi aur ab unki beti ke rishte ki baat chal rahi hai."
  },
  {
    id: 54,
    category: "Online Meeting",
    text: "Sir mera background blur itna strong tha ke mera chehra bhi blur ho gaya.",
    absurdity: 84,
    suspicion: 86,
    risk: "Safe-ish 🟢",
    escalation: "Team ko laga main anonymous hacker hoon aur unhone security protocol activate kar dia."
  },
  {
    id: 55,
    category: "Desi Family",
    text: "Biryani mein achanak elaichi aa gayi thi, trauma se recover hone mein 4 ghante lag gaye.",
    absurdity: 78,
    suspicion: 50,
    risk: "Safe-ish 🟢",
    escalation: "Elaichi ne munh mein aate hi bol diya 'Surprise! Zindagi aisi hi hoti hai'."
  },
  {
    id: 56,
    category: "Relationship",
    text: "Main tumhare sapne mein late is liye hua kyunke sapne ki entry ticket bohat mehngi thi.",
    absurdity: 94,
    suspicion: 98,
    risk: "Chappal Imminent 🩴",
    escalation: "Sapne ke guard ne kaha 'Pehle pichhle wade poore karo phir entry milegi'."
  },
  {
    id: 57,
    category: "Universal",
    text: "Mera dimaag 2G speed pe chal raha tha aur duniya 5G maang rahi thi.",
    absurdity: 74,
    suspicion: 80,
    risk: "Safe-ish 🟢",
    escalation: "Buffering circle mere sar ke upar hawa mein physical ghoom raha tha."
  },
  {
    id: 58,
    category: "Exam Survival",
    text: "Question number 1 dekha toh laga dosti purani hai, Question number 2 dekha toh dosti dushmani ban gayi.",
    absurdity: 76,
    suspicion: 72,
    risk: "Safe-ish 🟢",
    escalation: "Paper khatam hone tak examiners aur students sab ne mil ke dua maangna shuru kar di."
  },
  {
    id: 59,
    category: "Pakistani Daily Life",
    text: "Chhotay bhai ne TV ka remote chupa dia tha, jab tak remote mila train nikal gayi.",
    absurdity: 71,
    suspicion: 60,
    risk: "Safe-ish 🟢",
    escalation: "Remote fridge ke freezer mein kulfi ban chuka tha."
  },
  {
    id: 60,
    category: "Office",
    text: "Code perfectly chal raha tha, lekin local server ne kaha 'Main weekend pe overtime nahi karta'.",
    absurdity: 87,
    suspicion: 93,
    risk: "Dangerous 🟡",
    escalation: "Server ne terminal pe 'Chai break' print kar ke screen band kar di."
  }
];

// Impossible After Dark Excuses
const IMPOSSIBLE_EXCUSES = [
  "Bro, main 1998 ke load-shedding time portal mein phans gaya tha, abhi wapas aaya hoon.",
  "Mera saya mujhse pehle nikal gaya tha, uske peeche bhagte bhagte boundary line cross ho gayi.",
  "Aliens ne meri body borrow ki thi 2 ghante ke liye, unko Karachi ka biryani recipe taste karna tha.",
  "Khandan ke sabhi phuppos ne mil kar quantum entanglement block create kar diya tha mere gully mein.",
  "Mera phone 5th dimension se operate ho raha tha, message 2035 mein deliver hoga.",
  "Bill Gates ne khud phone kar ke kaha ke 'aaj laptop band rakho, hum Windows 95 ka birthday celebrate kar rahe hain'."
];

// Witty Ticker Headlines
const TICKER_HEADLINES = [
  "Aunty is currently spying from the 2nd floor balcony 👀",
  "Warning: 99.4% of your friends don't believe your 'Bas 5 minute' excuse.",
  "Breaking: Local boy claims alarm clock took emotional bribe.",
  "Khandan WhatsApp group is currently dissecting your late arrival.",
  "Scientific Fact: 'Main raste mein hoon' actually means 'Bistar mein hoon'.",
  "NASA detects highest concentration of bahanas near local chai dhabba."
];

// Mascot Dialogue Banks
const MASCOT_QUOTES = {
  default: [
    "Bhai mujhe sab pata hai, batao kya scene hai?",
    "Ek solid bahana chahiye? Sahi jagah aaye ho.",
    "Click karo, dekhain qismat mein kya jhoot likha hai!"
  ],
  laughing: [
    "Hahaha! Yeh sun ke toh Ammi ki chappal automatic lock ho jayegi!",
    "Bhai itna creative jhoot?! Oscar milna chahiye!",
    "Hahaha! Boss resign kar dega yeh sun kar!"
  ],
  suspicious: [
    "Mujhe toh daal mein kuch kala nahi, poori daal hi kali lag rahi hai...",
    "Bhai sach sach batao, neend hi nahi khuli thi na?",
    "Eyes don't lie, Chico... aur tumhari eyes suspicious hain."
  ],
  shocked: [
    "O teri! Yeh kya bol diya?! Mohalla police aa jayegi!",
    "Bhai risk level 9999% cross ho gaya!",
    "Chacha ne sun lia toh khandan se be-dakhal ho jaoge!"
  ],
  legendary: [
    "🌟 JACKPOT! Yeh bahana nahi, pure desi philosophy hai!",
    "Kasam se bro, yeh tareekh ke sunehray huroof mein likha jayega!",
    "Disaster level 100! Billo gives standing ovation!"
  ],
  facepalm: [
    "Bhai rehne do... is se acha toh keh dete ke aliens le gaye thay.",
    "Aisa bahana toh nursery ka bacha bhi reject kar de.",
    "Yaar kuch toh sharam karo, itna kacha jhoot?!"
  ],
  angry: [
    "Bhai thora toh tameez se jhoot bolo! 😤",
    "Itna bura bahana sun kar mera BP high ho gaya!",
    "Ammi ko call laga raha hoon abhi ke abhi!"
  ],
  crying: [
    "Ya Allah! Ye kaisa din dekhna parh raha hai 😭",
    "Khandan ki izzat ka falooda ban gaya 😭",
    "Itna dukh toh math ke paper mein bhi nahi hua tha 😭"
  ],
  celebrating: [
    "Balle Balle! Zabardast bahana pass ho gaya! 🎉",
    "Izzat bachi aur mohalla hairan! Party time! 🥳",
    "Pure perfection! Billo sends you virtual biryani! 🍗"
  ],
  confused: [
    "Wait, what?! Is mein logic kahan hai? 🤨",
    "Kya matlab 'laptop ne emotional leave le li'?! 🤨",
    "Bhai mujhe pehle 2 ghoont chai peene do samajhne ke liye."
  ]
};

// ============================================================================
// 3. GAME STATE & LOCAL STORAGE
// ============================================================================
const STATE = {
  laughs: parseInt(localStorage.getItem('bahana_laughs') || '0', 10),
  streak: parseInt(localStorage.getItem('bahana_streak') || '1', 10),
  mysteryActions: parseInt(localStorage.getItem('bahana_actions_count') || '0', 10),
  mysteryUnlocked: localStorage.getItem('bahana_mystery_unlocked') === 'true',
  soundEnabled: localStorage.getItem('bahana_sound_enabled') !== 'false',
  activeCategory: 'all',
  currentExcuse: null,
  isEscalated: false,
  escalationLevel: 0,
  battleScoreA: 0,
  battleScoreB: 0,
  curiosityCount: 0,
  doNotPressCount: parseInt(localStorage.getItem('bahana_dnp_count') || '0', 10),
  generatorClicks: parseInt(localStorage.getItem('bahana_gen_clicks') || '0', 10),
  battleVotes: parseInt(localStorage.getItem('bahana_battle_votes') || '0', 10),
  billoClicks: 0
};

// ============================================================================
// 4. CONFETTI ENGINE (Custom lightweight Canvas particles)
// ============================================================================
class ConfettiEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animationId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 60, goldOnly = false) {
    const colors = goldOnly 
      ? ['#F59E0B', '#FBBF24', '#FCD34D', '#D97706'] 
      : ['#7C3AED', '#FF5E62', '#FBBF24', '#10B981', '#38BDF8'];

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: this.canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: this.canvas.height / 2,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.8) * 16,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 12,
        life: 1,
        decay: Math.random() * 0.015 + 0.01
      });
    }

    if (!this.animationId) {
      this.loop();
    }
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.vRot;
      p.life -= p.decay;

      if (p.life <= 0 || p.y > this.canvas.height) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.life;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animationId = requestAnimationFrame(() => this.loop());
    } else {
      this.animationId = null;
    }
  }
}

let confetti = null;

// ============================================================================
// 5. DOM ELEMENTS & INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  confetti = new ConfettiEngine(document.getElementById('confetti-canvas'));
  
  // Set initial sound state
  sfx.enabled = STATE.soundEnabled;
  updateSoundButtonUI();

  // Setup dynamic elements
  initStats();
  initTicker();
  initMascot();
  initCategories();
  initMainGenerator();
  initSubNavTabs();
  initBattleMode();
  initCustomStudio();
  initLieDetector();
  initCuriosityVault();
  initAfterDark();
  initChallengeBanner();
  initModalClose();
  initUserSubmissions();
  initFriendsShowdown();
  initDoNotPress();
  initMemeRoulette();
  initBahanaNewsNetwork();
  initAchievementsSystem();
  initSecretBahanaLab();
  initShareCardModal();

  // Generate deterministic Daily Bahana or Initial random
  loadInitialExcuse();
});

// Update audio UI icon
function updateSoundButtonUI() {
  const icon = document.getElementById('sound-icon');
  if (icon) {
    icon.textContent = sfx.enabled ? '🔊' : '🔇';
  }
}

// ============================================================================
// 6. STATS & TICKER MANAGEMENT
// ============================================================================
function initStats() {
  const streakEl = document.getElementById('stat-streak');
  const laughsEl = document.getElementById('stat-laughs');
  if (streakEl) streakEl.textContent = STATE.streak;
  if (laughsEl) laughsEl.textContent = STATE.laughs;

  updateMysteryProgress();
}

function incrementLaughs(amount = 1) {
  STATE.laughs += amount;
  localStorage.setItem('bahana_laughs', STATE.laughs);
  const laughsEl = document.getElementById('stat-laughs');
  if (laughsEl) laughsEl.textContent = STATE.laughs;
}

function trackMysteryAction() {
  STATE.mysteryActions++;
  localStorage.setItem('bahana_actions_count', STATE.mysteryActions);
  updateMysteryProgress();

  if (STATE.mysteryActions >= 10 && !STATE.mysteryUnlocked) {
    unlockMysteryMode();
  }
}

function updateMysteryProgress() {
  const countText = document.getElementById('unlock-count-text');
  const fillBar = document.getElementById('mystery-progress-fill');
  const navBtn = document.getElementById('dark-mystery-btn');
  const navIcon = document.getElementById('mystery-nav-icon');

  const count = Math.min(STATE.mysteryActions, 10);
  if (countText) countText.textContent = STATE.mysteryUnlocked ? 'Unlocked! 🌙' : `${count}/10`;
  if (fillBar) fillBar.style.width = STATE.mysteryUnlocked ? '100%' : `${(count / 10) * 100}%`;

  if (STATE.mysteryUnlocked) {
    if (navBtn) navBtn.classList.add('unlocked');
    if (navIcon) navIcon.textContent = '🌙';
  }
}

function unlockMysteryMode() {
  STATE.mysteryUnlocked = true;
  localStorage.setItem('bahana_mystery_unlocked', 'true');
  updateMysteryProgress();
  sfx.playFanfare();
  confetti.burst(80);
  showToast('🔮 SECRET UNLOCKED: Bahana Lab After Dark!');
  setMascotState('legendary', 'Bhai mystery unlock ho gayi! After Dark mode explore karo!');
}

function initTicker() {
  const tickerText = document.getElementById('ticker-text');
  if (!tickerText) return;
  
  let tickerIdx = 0;
  tickerText.textContent = TICKER_HEADLINES[0];

  setInterval(() => {
    tickerIdx = (tickerIdx + 1) % TICKER_HEADLINES.length;
    tickerText.style.opacity = '0';
    setTimeout(() => {
      tickerText.textContent = TICKER_HEADLINES[tickerIdx];
      tickerText.style.opacity = '1';
    }, 300);
  }, 4500);
}

// Sound toggle handler
document.getElementById('sound-toggle-btn')?.addEventListener('click', () => {
  sfx.enabled = !sfx.enabled;
  STATE.soundEnabled = sfx.enabled;
  localStorage.setItem('bahana_sound_enabled', sfx.enabled);
  updateSoundButtonUI();
  if (sfx.enabled) sfx.playPop();
  showToast(sfx.enabled ? 'Audio On 🔊' : 'Audio Muted 🔇');
});

// ============================================================================
// 7. MASCOT REACTIVE SYSTEM (Billo the Suspicious Desi Cat)
// ============================================================================
function initMascot() {
  const avatar = document.getElementById('mascot-avatar');
  avatar?.addEventListener('click', () => {
    sfx.playPop();
    const states = ['laughing', 'suspicious', 'shocked', 'legendary', 'facepalm', 'angry', 'crying', 'celebrating', 'confused'];
    const randomState = states[Math.floor(Math.random() * states.length)];
    setMascotState(randomState);
    incrementLaughs(1);
    trackMysteryAction();

    STATE.billoClicks = (STATE.billoClicks || 0) + 1;
    if (STATE.billoClicks >= 5) {
      STATE.billoClicks = 0;
      openSecretLabModal();
    }
  });
}

function setMascotState(state, customMessage = null) {
  const textEl = document.getElementById('mascot-text');
  const mouth = document.getElementById('mascot-mouth');
  const glasses = document.getElementById('mascot-sunglasses');
  const browLeft = document.getElementById('eyebrow-left');
  const browRight = document.getElementById('eyebrow-right');
  const pupilLeft = document.getElementById('pupil-left');
  const pupilRight = document.getElementById('pupil-right');

  // Random quote from bank if not provided
  const quotes = MASCOT_QUOTES[state] || MASCOT_QUOTES.default;
  const chosenQuote = customMessage || quotes[Math.floor(Math.random() * quotes.length)];
  if (textEl) textEl.textContent = `"${chosenQuote}"`;

  // Reset default facial features
  if (glasses) glasses.style.display = 'none';
  if (mouth) mouth.setAttribute('d', 'M 90,133 Q 100,140 100,133 Q 100,140 110,133');
  if (browLeft) browLeft.setAttribute('d', 'M 58 84 Q 72 80 84 85');
  if (browRight) browRight.setAttribute('d', 'M 116 85 Q 128 80 142 84');
  if (pupilLeft) pupilLeft.setAttribute('cx', '74');
  if (pupilRight) pupilRight.setAttribute('cx', '126');

  // Apply state-specific facial geometry
  switch (state) {
    case 'laughing':
      if (mouth) mouth.setAttribute('d', 'M 88,132 Q 100,152 112,132 Z');
      if (browLeft) browLeft.setAttribute('d', 'M 58 88 Q 72 75 84 88');
      if (browRight) browRight.setAttribute('d', 'M 116 88 Q 128 75 142 88');
      break;

    case 'suspicious':
      if (pupilLeft) pupilLeft.setAttribute('cx', '80'); // side eye
      if (pupilRight) pupilRight.setAttribute('cx', '132');
      if (browLeft) browLeft.setAttribute('d', 'M 58 88 Q 72 90 84 85');
      if (browRight) browRight.setAttribute('d', 'M 116 75 Q 128 70 142 80');
      break;

    case 'shocked':
      if (mouth) mouth.setAttribute('d', 'M 94,130 A 6,8 0 1,0 106,130 A 6,8 0 1,0 94,130');
      if (browLeft) browLeft.setAttribute('d', 'M 58 75 Q 72 70 84 75');
      if (browRight) browRight.setAttribute('d', 'M 116 75 Q 128 70 142 75');
      break;

    case 'legendary':
      if (glasses) glasses.style.display = 'block';
      if (mouth) mouth.setAttribute('d', 'M 88,136 Q 100,150 112,136');
      break;

    case 'facepalm':
      if (mouth) mouth.setAttribute('d', 'M 92,138 Q 100,132 108,138');
      if (browLeft) browLeft.setAttribute('d', 'M 58 82 Q 72 88 84 82');
      if (browRight) browRight.setAttribute('d', 'M 116 82 Q 128 88 142 82');
      break;

    case 'angry':
      if (mouth) mouth.setAttribute('d', 'M 88,142 Q 100,132 112,142');
      if (browLeft) browLeft.setAttribute('d', 'M 58 78 L 84 92');
      if (browRight) browRight.setAttribute('d', 'M 116 92 L 142 78');
      break;

    case 'crying':
      if (mouth) mouth.setAttribute('d', 'M 90,132 Q 100,148 110,132 Z');
      if (browLeft) browLeft.setAttribute('d', 'M 58 80 Q 72 70 84 82');
      if (browRight) browRight.setAttribute('d', 'M 116 82 Q 128 70 142 80');
      break;

    case 'celebrating':
      if (glasses) glasses.style.display = 'block';
      if (mouth) mouth.setAttribute('d', 'M 86,130 Q 100,154 114,130 Z');
      break;

    case 'confused':
      if (browLeft) browLeft.setAttribute('d', 'M 58 72 Q 72 68 84 74');
      if (browRight) browRight.setAttribute('d', 'M 116 90 Q 128 92 142 88');
      if (mouth) mouth.setAttribute('d', 'M 90,135 Q 100,137 110,130');
      break;
  }
}

// ============================================================================
// 8. RANDOM EXCUSE ENGINE & DAILY BAHANA
// ============================================================================
function initCategories() {
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach((pill) => {
    pill.addEventListener('click', (e) => {
      sfx.playClick();
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      STATE.activeCategory = pill.dataset.category;
      generateExcuse(false);
    });
  });
}

function initMainGenerator() {
  const generateBtn = document.getElementById('btn-generate-bahana');
  generateBtn?.addEventListener('click', () => {
    sfx.playPop();
    generateExcuse(true);
    triggerRandomEvents();
  });

  document.getElementById('btn-make-worse')?.addEventListener('click', makeItWorse);
  document.getElementById('btn-copy-bahana')?.addEventListener('click', copyCurrentBahana);
  document.getElementById('btn-share-bahana')?.addEventListener('click', shareCurrentBahana);
  document.getElementById('btn-send-to-detector')?.addEventListener('click', sendToDetector);
}

// Deterministic Daily Bahana generator (Based on date hash)
function getDailyBahana() {
  const today = new Date().toISOString().slice(0, 10);
  let hash = 0;
  for (let i = 0; i < today.length; i++) {
    hash = (hash << 5) - hash + today.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % EXCUSES_DB.length;
  return EXCUSES_DB[index];
}

function loadInitialExcuse() {
  const daily = getDailyBahana();
  renderExcuseCard(daily, true);
}

function generateExcuse(userTriggered = true) {
  let pool = EXCUSES_DB;
  if (STATE.activeCategory !== 'all') {
    pool = EXCUSES_DB.filter((item) => item.category === STATE.activeCategory);
  }

  // Filter out the exact same excuse to prevent consecutive duplicates
  if (STATE.currentExcuse && pool.length > 1) {
    pool = pool.filter((item) => item.id !== STATE.currentExcuse.id);
  }

  const chosen = pool[Math.floor(Math.random() * pool.length)];
  renderExcuseCard(chosen, false);

  if (userTriggered) {
    incrementLaughs(1);
    trackMysteryAction();
    STATE.generatorClicks = (STATE.generatorClicks || 0) + 1;
    localStorage.setItem('bahana_gen_clicks', STATE.generatorClicks);
    if (typeof unlockAchievement === 'function') {
      unlockAchievement('first_bahana');
    }
    
    // Animate card shake
    const card = document.getElementById('excuse-card');
    card?.animate([
      { transform: 'translateY(-4px) scale(0.99)' },
      { transform: 'translateY(0) scale(1)' }
    ], { duration: 250, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' });

    // Mascot reaction
    if (chosen.absurdity > 88) {
      setMascotState('shocked');
    } else if (chosen.suspicion > 85) {
      setMascotState('suspicious');
    } else {
      setMascotState('laughing');
    }
  }
}

function renderExcuseCard(item, isDaily = false) {
  STATE.currentExcuse = item;
  STATE.isEscalated = false;

  const categoryTag = document.getElementById('card-category');
  const dailyBadge = document.getElementById('card-daily-badge');
  const escalatedBadge = document.getElementById('card-escalated-badge');
  const riskBadge = document.getElementById('card-risk-level');
  const textEl = document.getElementById('card-excuse-text');
  const absVal = document.getElementById('meter-absurdity-val');
  const absBar = document.getElementById('meter-absurdity-bar');
  const suspVal = document.getElementById('meter-suspicion-val');
  const suspBar = document.getElementById('meter-suspicion-bar');
  const card = document.getElementById('excuse-card');

  const userBadge = document.getElementById('card-user-badge');
  if (userBadge) {
    if (item.isUserSubmitted) {
      userBadge.style.display = 'inline-block';
      userBadge.textContent = `👤 By ${item.author || 'Desi Legend'}`;
    } else {
      userBadge.style.display = 'none';
    }
  }

  if (card) card.classList.remove('legendary-jackpot');
  if (categoryTag) categoryTag.textContent = `✨ ${item.category}`;
  if (dailyBadge) dailyBadge.style.display = isDaily ? 'inline-block' : 'none';
  if (escalatedBadge) escalatedBadge.style.display = 'none';
  if (riskBadge) riskBadge.textContent = `Risk: ${item.risk}`;
  if (textEl) textEl.textContent = item.text;
  if (absVal) absVal.textContent = `${item.absurdity}%`;
  if (absBar) absBar.style.width = `${item.absurdity}%`;
  if (suspVal) suspVal.textContent = `${item.suspicion}%`;
  if (suspBar) suspBar.style.width = `${item.suspicion}%`;
}

// "MAKE IT WORSE" 🤯 Multi-Level Escalation feature
function makeItWorse() {
  if (!STATE.currentExcuse) return;
  sfx.playEscalation();
  confetti.burst(35);

  const textEl = document.getElementById('card-excuse-text');
  const escalatedBadge = document.getElementById('card-escalated-badge');
  const absVal = document.getElementById('meter-absurdity-val');
  const absBar = document.getElementById('meter-absurdity-bar');
  const suspVal = document.getElementById('meter-suspicion-val');
  const suspBar = document.getElementById('meter-suspicion-bar');
  const riskBadge = document.getElementById('card-risk-level');

  STATE.escalationLevel = (STATE.escalationLevel || 0) + 1;
  if (escalatedBadge) {
    escalatedBadge.style.display = 'inline-block';
    escalatedBadge.textContent = `🤯 Level ${STATE.escalationLevel} Catastrophe`;
  }

  if (STATE.escalationLevel === 1) {
    textEl.textContent = `${STATE.currentExcuse.text} ... Aur phir?! ${STATE.currentExcuse.escalation}`;
    if (absVal) absVal.textContent = '99.9%';
    if (absBar) absBar.style.width = '100%';
    if (suspVal) suspVal.textContent = '100% (DISASTER)';
    if (suspBar) suspBar.style.width = '100%';
    if (riskBadge) riskBadge.textContent = 'Risk: Mohalla FIR Filed 🚨';
    setMascotState('shocked', 'Bhai situation sambhalne ki jagah atomic bomb gira dia!');
  } else if (STATE.escalationLevel === 2) {
    textEl.textContent += ' ... Aur phir Phuppo ne 14 rishtedaron ki emergency panchayat bula li!';
    if (absVal) absVal.textContent = '150%';
    if (riskBadge) riskBadge.textContent = 'Risk: Khandan Outcast 🩴';
    setMascotState('crying', 'Ye kya kar diya?! Ab toh shaadiyon se bhi ban ho jao ge!');
  } else if (STATE.escalationLevel === 3) {
    textEl.textContent += ' ... Abhi Geo News aur BBC Urdu ne red ticker chala diya ke suspect farar hai!';
    if (absVal) absVal.textContent = '300%';
    if (riskBadge) riskBadge.textContent = 'Risk: Interpol Red Notice 🔴';
    setMascotState('angry', 'Bhai bas karo, ab police siren sunayi de rahi hai!');
    triggerScreenShake();
  } else {
    textEl.textContent += ' ... NASA aur UN Peace Council ne mohallay ko cosmic quarantine zone declare kar dia hai!';
    if (absVal) absVal.textContent = '999%';
    if (riskBadge) riskBadge.textContent = 'Risk: Intergalactic Disaster 🌌';
    setMascotState('legendary', 'BRO WHAT 😭 Ye bahana nahi, tareekh ka sab se bada disaster hai!');
    triggerScreenShake();
    spawnFlyingEmojis(['🤯', '🚨', '🏃‍♂️', '💀', '👽']);
    if (typeof unlockAchievement === 'function') {
      unlockAchievement('catastrophe_king');
    }
  }

  incrementLaughs(3);
  trackMysteryAction();
}

function copyCurrentBahana() {
  if (!STATE.currentExcuse) return;
  const textEl = document.getElementById('card-excuse-text');
  const textToCopy = `${textEl.textContent} 😂 — via Bahana Generator`;
  
  navigator.clipboard.writeText(textToCopy).then(() => {
    sfx.playClick();
    showToast('Bahana copied to clipboard! 📋');
  }).catch(() => {
    showToast('Copy fallback ready!');
  });
}

function shareCurrentBahana() {
  if (!STATE.currentExcuse) return;
  const textEl = document.getElementById('card-excuse-text');
  const shareData = {
    title: '😂 Bahana Generator v2.0',
    text: `"${textEl.textContent}" 😂\nIzzat bachani thi lekin situation aur kharab ho gayi!`,
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => copyCurrentBahana());
  } else {
    copyCurrentBahana();
  }
}

function sendToDetector() {
  if (!STATE.currentExcuse) return;
  const textEl = document.getElementById('card-excuse-text');
  const detectorInput = document.getElementById('detector-input');
  if (detectorInput) {
    detectorInput.value = textEl.textContent;
  }
  
  // Switch tab to Lie Detector
  switchSubTab('section-detector');
  detectorInput?.scrollIntoView({ behavior: 'smooth' });
  showToast('Bahana inserted into Polygraph! 🕵️');
}

// ============================================================================
// 9. RANDOM EVENT SYSTEM ("Aunty has entered the chat", "Legendary Bahana")
// ============================================================================
function triggerRandomEvents() {
  const rand = Math.random();

  // 3% Chance of Legendary Bahana Jackpot
  if (rand < 0.03) {
    triggerLegendaryEvent();
    return;
  }

  // 10% Chance of Comical Interruption Event
  if (rand > 0.88) {
    const events = [
      {
        icon: "🧕",
        title: "Aunty Has Entered The Chat!",
        desc: "'Beta, terrace se sab dekh rahi thi. Yeh bahana apne chacha ko bhi bhej dun kya?'"
      },
      {
        icon: "📲",
        title: "Forwarded To Family WhatsApp Group!",
        desc: "Your excuse has been automatically forwarded to 'Khandan Rocks 2026' with 47 unread voice notes."
      },
      {
        icon: "🚨",
        title: "The Excuse Inspector Has Arrived!",
        desc: "Chacha inspector says: 'Logics are weak, but drama points are 10/10. Passed with warning.'"
      },
      {
        icon: "📺",
        title: "Breaking News Alert!",
        desc: "Geo News ticker: 'Noujawan ne assignment na karne pe laptop ko be-kasoor thehra diya'."
      },
      {
        icon: "🎁",
        title: "Congratulations! You Unlocked Nothing!",
        desc: "Aap ne button itni shiddat se dabaya ke developer ne do ghoont chai pee li. Shukriya! 😂"
      }
    ];

    const ev = events[Math.floor(Math.random() * events.length)];
    openEventModal(ev.icon, ev.title, ev.desc);
  }
}

function triggerLegendaryEvent() {
  sfx.playFanfare();
  confetti.burst(100, true);

  const card = document.getElementById('excuse-card');
  if (card) card.classList.add('legendary-jackpot');

  const textEl = document.getElementById('card-excuse-text');
  if (textEl) {
    textEl.textContent = "🌟 [LEGENDARY BAHANA]: 'Sir, main time machine mein future gaya tha, aap ne kal hi assignment cancel kar dia tha! Toh aaj karne ka faida?'";
  }

  const categoryTag = document.getElementById('card-category');
  if (categoryTag) categoryTag.textContent = "👑 LEGENDARY GOLD";

  setMascotState('legendary', "Bhai sahab! Legendary Golden Bahana unlock ho gaya!");
  showToast("🌟 JACKPOT: Legendary Bahana Found!");
  incrementLaughs(10);
}

function openEventModal(icon, title, desc) {
  const modal = document.getElementById('event-modal');
  const iconEl = document.getElementById('event-modal-icon');
  const titleEl = document.getElementById('event-modal-title');
  const descEl = document.getElementById('event-modal-desc');

  if (iconEl) iconEl.textContent = icon;
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;

  if (modal) modal.style.display = 'flex';
  sfx.playPop();
}

function initModalClose() {
  const closeBtn = document.getElementById('btn-close-modal');
  const modal = document.getElementById('event-modal');
  closeBtn?.addEventListener('click', () => {
    sfx.playClick();
    if (modal) modal.style.display = 'none';
  });
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
}

// ============================================================================
// 10. SUB-NAVIGATION TABS (Battle, Studio, Lie Detector, Curiosity)
// ============================================================================
function initSubNavTabs() {
  const tabs = document.querySelectorAll('.sub-tab-btn');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      sfx.playClick();
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.dataset.target;
      document.querySelectorAll('.sub-section-view').forEach((sec) => {
        sec.classList.remove('active');
      });
      document.getElementById(targetId)?.classList.add('active');
    });
  });
}

function switchSubTab(targetId) {
  const tabs = document.querySelectorAll('.sub-tab-btn');
  tabs.forEach((t) => {
    if (t.dataset.target === targetId) t.classList.add('active');
    else t.classList.remove('active');
  });
  document.querySelectorAll('.sub-section-view').forEach((sec) => {
    sec.classList.remove('active');
  });
  document.getElementById(targetId)?.classList.add('active');
}

// ============================================================================
// 11. BAHANA BATTLE ARENA
// ============================================================================
let currentBattle = { optionA: null, optionB: null };

function initBattleMode() {
  loadNewBattle();
  document.getElementById('btn-vote-a')?.addEventListener('click', () => voteBattle('A'));
  document.getElementById('btn-vote-b')?.addEventListener('click', () => voteBattle('B'));
  document.getElementById('btn-next-battle')?.addEventListener('click', () => {
    sfx.playClick();
    loadNewBattle();
  });
}

function loadNewBattle() {
  const shuffled = [...EXCUSES_DB].sort(() => 0.5 - Math.random());
  currentBattle.optionA = shuffled[0];
  currentBattle.optionB = shuffled[1];

  const textA = document.getElementById('battle-text-a');
  const textB = document.getElementById('battle-text-b');
  const countA = document.getElementById('vote-count-a');
  const countB = document.getElementById('vote-count-b');
  const commentary = document.getElementById('battle-commentary-text');

  if (textA) textA.textContent = `"${currentBattle.optionA.text}"`;
  if (textB) textB.textContent = `"${currentBattle.optionB.text}"`;
  if (countA) countA.textContent = `Votes: ${STATE.battleScoreA}`;
  if (countB) countB.textContent = `Votes: ${STATE.battleScoreB}`;
  if (commentary) commentary.textContent = "Chalo vote do! Audience faisla karegi.";
}

function voteBattle(choice) {
  sfx.playPop();
  confetti.burst(30);

  const commentary = document.getElementById('battle-commentary-text');
  const countA = document.getElementById('vote-count-a');
  const countB = document.getElementById('vote-count-b');

  const banter = [
    "Audience keh rahi hai yeh wala bahana 100% genuine jhoot hai!",
    "Opponent ka bahana sun kar judge ro parha!",
    "Billo approves this vote! Super dangerous choice.",
    "Shakespeare bhi aisa bahana nahi likh sakta tha!"
  ];

  if (choice === 'A') {
    STATE.battleScoreA++;
    if (countA) countA.textContent = `Votes: ${STATE.battleScoreA}`;
  } else {
    STATE.battleScoreB++;
    if (countB) countB.textContent = `Votes: ${STATE.battleScoreB}`;
  }

  if (commentary) commentary.textContent = banter[Math.floor(Math.random() * banter.length)];
  incrementLaughs(1);
  trackMysteryAction();
  setMascotState('laughing');

  STATE.battleVotes = (STATE.battleVotes || 0) + 1;
  localStorage.setItem('bahana_battle_votes', STATE.battleVotes);
  if (STATE.battleVotes >= 5 && typeof unlockAchievement === 'function') {
    unlockAchievement('battle_veteran');
  }
}

// ============================================================================
// 12. BAHANA MIXOLOGY STUDIO (MAKE YOUR OWN)
// ============================================================================
function initCustomStudio() {
  const slider = document.getElementById('range-absurdity');
  const label = document.getElementById('absurdity-level-label');

  const levelNames = [
    "",
    "Mellow (Level 1)",
    "Suspicious (Level 2)",
    "Chaos (Level 3)",
    "Phuppo Alert (Level 4)",
    "Intergalactic (Level 5)"
  ];

  slider?.addEventListener('input', (e) => {
    if (label) label.textContent = levelNames[e.target.value] || `Level ${e.target.value}`;
  });

  document.getElementById('btn-mix-bahana')?.addEventListener('click', mixCustomBahana);
  document.getElementById('btn-copy-custom')?.addEventListener('click', () => {
    const text = document.getElementById('custom-bahana-text')?.textContent;
    if (text) {
      navigator.clipboard.writeText(text);
      sfx.playClick();
      showToast('Custom Bahana copied! 📋');
    }
  });
}

function mixCustomBahana() {
  sfx.playPop();
  confetti.burst(35);

  const sit = document.getElementById('select-situation')?.value;
  const style = document.getElementById('select-style')?.value;
  const absLevel = parseInt(document.getElementById('range-absurdity')?.value || '3', 10);

  const situations = {
    late_office: "Boss, main office pohnchne hi wala tha",
    missed_wedding: "Shaadi mein khana khane toh aana tha",
    pending_assignment: "Assignment bilkul 100% complete ho chuka tha",
    ghosted_call: "Main call pick karne hi laga tha",
    broke_plans: "Dosto ke sath plan pe nikal hi raha tha",
    chores_avoid: "Dahi aur sauda salaf lene ja hi raha tha"
  };

  const styles = {
    medical_drama: "lekin achanak meri left eyebrow mein heart attack aa gaya aur mohallay ke doctor ne bed rest likh dia.",
    technical_glitch: "lekin mere keyboard ne achanak Russian language mein rebellion shuru kar dia aur monitor band ho gaya.",
    family_crisis: "lekin Phuppo ne achanak phone kar ke 1994 ke jhagray ka faisla maang lia aur emergency meeting shuru ho gayi.",
    philosophical: "lekin achanak universe ke deep meaning pe ghour karne laga ke 'aakhir wahan ja kar bhi kya milna hai?'.",
    traffic_chaos: "lekin gali ke 4 rickshaw walon ne aapas mein Formula-1 race laga li aur rasta 3 ghante block raha."
  };

  let result = `${situations[sit] || 'Main aane hi laga tha'}, ${styles[style] || 'lekin halat kharab ho gaye'}`;
  
  if (absLevel >= 4) {
    result += " Aur ab ammi chappal hath mein liye verification kar rahi hain!";
  }

  const resultCard = document.getElementById('custom-result-card');
  const resultText = document.getElementById('custom-bahana-text');
  const riskTag = document.getElementById('custom-risk-tag');

  if (resultText) resultText.textContent = `"${result}"`;
  if (riskTag) riskTag.textContent = `Drama Index: ${absLevel * 20}%`;
  if (resultCard) resultCard.style.display = 'block';

  incrementLaughs(2);
  trackMysteryAction();
  setMascotState('suspicious', "Mashallah! Khudi banaya hai ya kisi professional liar se likhwaya hai?");
}

// ============================================================================
// 13. FAKE LIE DETECTOR (COMEDY POLYGRAPH)
// ============================================================================
function initLieDetector() {
  document.getElementById('btn-paste-current')?.addEventListener('click', () => {
    if (STATE.currentExcuse) {
      const input = document.getElementById('detector-input');
      if (input) input.value = STATE.currentExcuse.text;
      sfx.playClick();
    }
  });

  document.getElementById('btn-run-detector')?.addEventListener('click', runLieDetectorScan);
}

function runLieDetectorScan() {
  const input = document.getElementById('detector-input');
  const val = input?.value.trim();

  if (!val) {
    showToast('Pehle koi bahana toh likhein! ✍️');
    return;
  }

  sfx.playClick();
  const scanBox = document.getElementById('scan-animation-box');
  const statusText = document.getElementById('scan-status-text');
  const resultCard = document.getElementById('detector-result-card');

  if (resultCard) resultCard.style.display = 'none';
  if (scanBox) scanBox.style.display = 'block';

  const stages = [
    "Scanning eyebrow twitch...",
    "Measuring overacting & drama levels...",
    "Consulting imaginary Mohalla CCTV...",
    "Calculating Mom's chappal velocity...",
    "Finalizing verdict with Billo the cat..."
  ];

  let step = 0;
  statusText.textContent = stages[0];

  const interval = setInterval(() => {
    step++;
    if (step < stages.length) {
      statusText.textContent = stages[step];
      sfx.playClick();
    } else {
      clearInterval(interval);
      if (scanBox) scanBox.style.display = 'none';
      displayLieDetectorResult(val);
    }
  }, 700);
}

function displayLieDetectorResult(text) {
  sfx.playBuzzer();
  const resultCard = document.getElementById('detector-result-card');
  const stamp = document.getElementById('verdict-stamp');
  const suspVal = document.getElementById('verdict-suspicion');
  const dramaVal = document.getElementById('verdict-drama');
  const comVal = document.getElementById('verdict-commentary');

  const stamps = [
    "APPROVED JHOOT",
    "CHAPPAL WARRANT",
    "DRAMA QUEEN",
    "OSCAR WORTHY",
    "CREATIVE DISASTER"
  ];

  const dramaLevels = [
    "Pakistani Soap Opera (High Drama)",
    "Star Plus Background Violins",
    "Cannes Film Festival Drama",
    "Mohalla Chachi Gossip Level"
  ];

  const commentaries = [
    "Official Verdict: Logic 2% hai, lekin confidence 200% hai. Billo approved this creative lie!",
    "Official Verdict: Bhai agar yeh bahana Ammi ko sunaya toh recovery mein 2 hafte lagenge.",
    "Official Verdict: Itna be-buniyaad bahana toh Imran Khan aur Nawaz Sharif bhi nahi sochte.",
    "Official Verdict: Scientific miracle! Itna bada jhoot bolte hue zuban freeze nahi hui."
  ];

  const randomStamp = stamps[Math.floor(Math.random() * stamps.length)];
  const randomSusp = (Math.random() * 15 + 85).toFixed(1); // 85% - 99.9%
  const randomDrama = dramaLevels[Math.floor(Math.random() * dramaLevels.length)];
  const randomCom = commentaries[Math.floor(Math.random() * commentaries.length)];

  if (stamp) stamp.textContent = randomStamp;
  if (suspVal) suspVal.textContent = `${randomSusp}%`;
  if (dramaVal) dramaVal.textContent = randomDrama;
  if (comVal) comVal.textContent = `"${randomCom}"`;
  if (resultCard) resultCard.style.display = 'block';

  incrementLaughs(3);
  trackMysteryAction();
  setMascotState('shocked', 'Detector ne red alert de dia! Izzat bacha ke bhaago!');
}

// ============================================================================
// 14. CURIOSITY VAULT ("Things You Probably Shouldn't Click")
// ============================================================================
function initCuriosityVault() {
  const cards = document.querySelectorAll('.curiosity-card');
  cards.forEach((card) => {
    const btn = card.querySelector('.curiosity-btn');
    btn?.addEventListener('click', () => {
      const secret = card.dataset.secret;
      handleCuriosityTrigger(secret);
    });
  });
}

function handleCuriosityTrigger(type) {
  sfx.playPop();
  STATE.curiosityCount++;
  trackMysteryAction();

  switch (type) {
    case 'forbidden':
      openEventModal(
        '📜',
        'Top Secret Forbidden Bahana',
        '"Ammi, meri shaadi kisi rich billionaire se kara do, mujhse roz subah nahi utha jata."'
      );
      break;

    case '100laughs':
      openEventModal(
        '🏆',
        'Laugh Milestones Status',
        `Current Laughs: ${STATE.laughs} / 100! Jab 100 laughs ho jayenge toh Chacha will send you virtual chai & samosa!`
      );
      break;

    case 'redbutton':
      const warnings = [
        "Aap ko kaha tha na mat dabao?! Screen thodi si hili!",
        "Dost! Button keh raha hai 'Haath hatao, gila paint hai'!",
        "Emergency: Button pressed 3 times. Billo is judging your curiosity.",
        "Aap se zyada ziddi insaan maine nahi dekha 😂"
      ];
      const msg = warnings[STATE.curiosityCount % warnings.length];
      showToast(msg);
      setMascotState('suspicious', msg);
      break;

    case 'rawtruth':
      openEventModal(
        '🛌',
        'The Naked Truth Nobody Believes',
        '"Bhai na traffic tha, na ammi ka kaam tha, na Wi-Fi band tha... Main bas bistar mein let ke reels scroll kar raha tha."'
      );
      break;
  }
}

// ============================================================================
// 15. BAHANA LAB AFTER DARK (MYSTERY OVERLAY)
// ============================================================================
function initAfterDark() {
  const darkNavBtn = document.getElementById('dark-mystery-btn');
  const afterDarkSec = document.getElementById('section-after-dark');
  const exitBtn = document.getElementById('btn-exit-after-dark');
  const impossibleBtn = document.getElementById('btn-gen-impossible');
  const copyImpBtn = document.getElementById('btn-copy-impossible');

  darkNavBtn?.addEventListener('click', () => {
    if (!STATE.mysteryUnlocked) {
      sfx.playBuzzer();
      showToast(`🔒 Locked! Complete ${10 - STATE.mysteryActions} more clicks to unlock!`);
      setMascotState('suspicious', "Shhh... developer ne abhi access nahi dia. 10 interactions karo pehle!");
      return;
    }
    sfx.playFanfare();
    if (afterDarkSec) {
      afterDarkSec.style.display = 'block';
      afterDarkSec.scrollIntoView({ behavior: 'smooth' });
    }
    setMascotState('legendary', "Welcome to Bahana Lab After Dark 🌙!");
  });

  exitBtn?.addEventListener('click', () => {
    sfx.playClick();
    if (afterDarkSec) afterDarkSec.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  impossibleBtn?.addEventListener('click', () => {
    sfx.playEscalation();
    confetti.burst(40);
    const textEl = document.getElementById('impossible-bahana-text');
    const randomImp = IMPOSSIBLE_EXCUSES[Math.floor(Math.random() * IMPOSSIBLE_EXCUSES.length)];
    if (textEl) textEl.textContent = `"${randomImp}"`;
    incrementLaughs(2);
  });

  copyImpBtn?.addEventListener('click', () => {
    const text = document.getElementById('impossible-bahana-text')?.textContent;
    if (text) {
      navigator.clipboard.writeText(text);
      sfx.playClick();
      showToast('Impossible Bahana copied! 🌌');
    }
  });
}

// ============================================================================
// 16. SHARE CHALLENGE & TOAST SYSTEM
// ============================================================================
function initChallengeBanner() {
  document.getElementById('btn-share-challenge')?.addEventListener('click', () => {
    const challengeText = "Bro, meri bahana creativity ko 94/100 mila 😂 Tumhara kitna aayega? Check out Bahana Lab v2.0!";
    if (navigator.share) {
      navigator.share({
        title: '😂 Bahana Generator Challenge',
        text: challengeText,
        url: window.location.href
      }).catch(() => copyChallengeFallback(challengeText));
    } else {
      copyChallengeFallback(challengeText);
    }
  });
}

function copyChallengeFallback(text) {
  navigator.clipboard.writeText(text).then(() => {
    sfx.playClick();
    showToast('Challenge copied to clipboard! Send to friends 🚀');
  });
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('app-toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// ============================================================================
// 17. USER BAHANA SUBMISSION & COMMUNITY POOL (Add Your Own Bahana)
// ============================================================================
function initUserSubmissions() {
  loadStoredUserBahanas();

  // Top-nav shortcut button
  document.getElementById('btn-open-submit-nav')?.addEventListener('click', () => {
    sfx.playClick();
    switchSubTab('section-submit');
    document.getElementById('section-submit')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Real-time slider labels
  const absSlider = document.getElementById('range-user-absurdity');
  const absLabel = document.getElementById('label-user-absurdity');
  absSlider?.addEventListener('input', (e) => {
    if (absLabel) absLabel.textContent = `${e.target.value}%`;
  });

  const suspSlider = document.getElementById('range-user-suspicion');
  const suspLabel = document.getElementById('label-user-suspicion');
  suspSlider?.addEventListener('input', (e) => {
    if (suspLabel) suspLabel.textContent = `${e.target.value}%`;
  });

  // Submit form handler
  const form = document.getElementById('form-add-bahana');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    submitUserBahana();
  });

  document.getElementById('btn-submit-new-bahana')?.addEventListener('click', (e) => {
    e.preventDefault();
    submitUserBahana();
  });
}

function loadStoredUserBahanas() {
  try {
    const stored = JSON.parse(localStorage.getItem('custom_user_bahanas') || '[]');
    if (Array.isArray(stored) && stored.length > 0) {
      stored.forEach((item) => {
        // Only push if not already in EXCUSES_DB
        if (!EXCUSES_DB.some((e) => e.id === item.id)) {
          EXCUSES_DB.unshift(item);
        }
      });
    }
    renderUserBahanasList(stored);
  } catch (e) {
    console.error("Error loading user bahanas", e);
  }
}

function submitUserBahana() {
  const textInput = document.getElementById('input-user-bahana');
  const categorySelect = document.getElementById('select-user-category');
  const authorInput = document.getElementById('input-user-author');
  const absSlider = document.getElementById('range-user-absurdity');
  const suspSlider = document.getElementById('range-user-suspicion');
  const escInput = document.getElementById('input-user-escalation');

  const text = textInput?.value.trim();
  if (!text || text.length < 5) {
    sfx.playBuzzer();
    showToast('Pehle koi dhang ka bahana toh likhein! (Min 5 characters) ✍️');
    textInput?.focus();
    return;
  }

  const category = categorySelect?.value || 'Universal';
  const author = authorInput?.value.trim() || 'Desi Legend';
  const absurdity = parseInt(absSlider?.value || '85', 10);
  const suspicion = parseInt(suspSlider?.value || '90', 10);
  const escalation = escInput?.value.trim() || 'Aur phir khandan ke group mein meeting shuru ho gayi!';

  let risk = 'Safe-ish 🟢';
  if (suspicion >= 92) risk = 'Chappal Imminent 🩴';
  else if (suspicion >= 80) risk = 'Khatarnak 🔴';
  else if (suspicion >= 50) risk = 'Dangerous 🟡';

  const newBahana = {
    id: 'user_' + Date.now(),
    category: category,
    text: text,
    absurdity: absurdity,
    suspicion: suspicion,
    risk: risk,
    escalation: escalation,
    author: author,
    isUserSubmitted: true
  };

  // 1. Add to in-memory pool
  EXCUSES_DB.unshift(newBahana);

  // 2. Save to localStorage
  try {
    const stored = JSON.parse(localStorage.getItem('custom_user_bahanas') || '[]');
    stored.unshift(newBahana);
    localStorage.setItem('custom_user_bahanas', JSON.stringify(stored));
    renderUserBahanasList(stored);
  } catch (e) {
    console.error("Failed to save to localStorage", e);
  }

  // 3. Clear inputs
  if (textInput) textInput.value = '';
  if (authorInput) authorInput.value = '';
  if (escInput) escInput.value = '';

  // 4. Celebrate!
  sfx.playFanfare();
  confetti.burst(75);
  showToast('🎉 Zabardast! Aap ka bahana generator mein add ho gaya!');
  setMascotState('legendary', `Wah ${author}! Kya dhasu bahana shamil kiya hai!`);
  incrementLaughs(5);
  trackMysteryAction();

  // 5. Display the newly added bahana in the main excuse card
  renderExcuseCard(newBahana, false);
  const card = document.getElementById('excuse-card');
  card?.scrollIntoView({ behavior: 'smooth' });
}

function renderUserBahanasList(list = null) {
  const container = document.getElementById('user-bahanas-list');
  const countEl = document.getElementById('user-bahana-count');
  if (!container) return;

  const userList = list !== null 
    ? list 
    : JSON.parse(localStorage.getItem('custom_user_bahanas') || '[]');

  if (countEl) countEl.textContent = userList.length;

  if (userList.length === 0) {
    container.innerHTML = '<p class="empty-list-text">Abhi tak aap ne koi bahana add nahi kiya. Upar form se pehla bahana submit karein!</p>';
    return;
  }

  container.innerHTML = '';
  userList.forEach((item) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'user-bahana-item';
    itemEl.innerHTML = `
      <div class="user-bahana-info">
        <p class="user-bahana-quote">"${item.text}"</p>
        <div class="user-bahana-submeta">
          <span>🏷️ ${item.category}</span>
          <span>👤 ${item.author || 'Desi Legend'}</span>
          <span>🤯 Absurdity: ${item.absurdity}%</span>
          <span>${item.risk}</span>
        </div>
      </div>
      <div class="user-bahana-actions">
        <button class="btn-test-user-bahana" data-id="${item.id}" title="Test in Main Generator">Test 🎲</button>
        <button class="btn-delete-user-bahana" data-id="${item.id}" title="Delete this Bahana">Delete 🗑️</button>
      </div>
    `;
    container.appendChild(itemEl);
  });

  // Attach event handlers for Test & Delete buttons
  container.querySelectorAll('.btn-test-user-bahana').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const found = EXCUSES_DB.find((item) => item.id === id);
      if (found) {
        sfx.playPop();
        renderExcuseCard(found, false);
        document.getElementById('excuse-card')?.scrollIntoView({ behavior: 'smooth' });
        showToast('Testing your submitted bahana! 🎲');
      }
    });
  });

  container.querySelectorAll('.btn-delete-user-bahana').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      deleteUserBahana(id);
    });
  });
}

function deleteUserBahana(id) {
  sfx.playClick();
  try {
    let stored = JSON.parse(localStorage.getItem('custom_user_bahanas') || '[]');
    stored = stored.filter((item) => item.id !== id);
    localStorage.setItem('custom_user_bahanas', JSON.stringify(stored));

    // Remove from in-memory pool
    EXCUSES_DB = EXCUSES_DB.filter((item) => item.id !== id);

    renderUserBahanasList(stored);
    showToast('Bahana delete kar dia gaya! 🗑️');
  } catch (e) {
    console.error("Error deleting bahana", e);
  }
}

// ============================================================================
// 18. FRIENDS BAHANA SHOWDOWN (PARTY PASS-AND-PLAY GAME)
// ============================================================================
const CLASH_STATE = {
  situation: "",
  players: [],
  currentTurnIndex: 0
};

function initFriendsShowdown() {
  const sitSelect = document.getElementById('select-clash-situation');
  const customSitInput = document.getElementById('input-clash-custom-situation');
  const addPlayerBtn = document.getElementById('btn-add-clash-player');
  const removePlayerBtn = document.getElementById('btn-remove-clash-player');
  const startBtn = document.getElementById('btn-start-clash-game');
  const submitTurnBtn = document.getElementById('btn-submit-clash-turn');
  const revealWinnerBtn = document.getElementById('btn-reveal-clash-winner');
  const playAgainBtn = document.getElementById('btn-play-again-clash');
  const shareClashBtn = document.getElementById('btn-share-clash-result');

  // Toggle custom situation input
  sitSelect?.addEventListener('change', (e) => {
    if (customSitInput) {
      customSitInput.style.display = e.target.value === 'custom' ? 'block' : 'none';
      if (e.target.value === 'custom') customSitInput.focus();
    }
  });

  // Add player row (max 5)
  addPlayerBtn?.addEventListener('click', () => {
    const inputsContainer = document.getElementById('clash-players-inputs');
    const count = inputsContainer?.querySelectorAll('.player-input-row').length || 0;
    if (count >= 5) {
      showToast('Maximum 5 players allow hain!');
      return;
    }
    sfx.playClick();
    const newIdx = count + 1;
    const div = document.createElement('div');
    div.className = 'player-input-row';
    div.innerHTML = `
      <span class="player-avatar-badge">👤 P${newIdx}</span>
      <input type="text" class="clash-player-name studio-select" placeholder="Dost ${newIdx} ka naam" value="Dost ${newIdx}" maxlength="20" />
    `;
    inputsContainer?.appendChild(div);
  });

  // Remove player row (min 2)
  removePlayerBtn?.addEventListener('click', () => {
    const inputsContainer = document.getElementById('clash-players-inputs');
    const rows = inputsContainer?.querySelectorAll('.player-input-row');
    if (!rows || rows.length <= 2) {
      showToast('Muqablay ke liye kam az kam 2 players zaroori hain!');
      return;
    }
    sfx.playClick();
    rows[rows.length - 1].remove();
  });

  // Start game button
  startBtn?.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.clash-player-name');
    const names = [];
    inputs.forEach((inp) => {
      const val = inp.value.trim();
      if (val) names.push(val);
    });

    if (names.length < 2) {
      showToast('Kam az kam 2 doston ke naam likhein! ✍️');
      return;
    }

    let situationText = sitSelect?.options[sitSelect.selectedIndex]?.text || "Musibat se bachna hai";
    if (sitSelect?.value === 'custom') {
      const customVal = customSitInput?.value.trim();
      if (!customVal) {
        showToast('Apni custom situation toh likhein! ✍️');
        customSitInput?.focus();
        return;
      }
      situationText = customVal;
    }

    sfx.playFanfare();
    CLASH_STATE.situation = situationText;
    CLASH_STATE.players = names.map((name) => ({ name, excuse: "", votes: 0 }));
    CLASH_STATE.currentTurnIndex = 0;

    // Show Phase 2
    showClashPhase('input');
    renderClashTurn();
  });

  // Turn submit button
  submitTurnBtn?.addEventListener('click', () => {
    const excuseInput = document.getElementById('input-clash-excuse');
    const val = excuseInput?.value.trim();

    if (!val || val.length < 3) {
      sfx.playBuzzer();
      showToast('Apna bahana toh likhein pehle! ✍️');
      excuseInput?.focus();
      return;
    }

    sfx.playPop();
    CLASH_STATE.players[CLASH_STATE.currentTurnIndex].excuse = val;
    if (excuseInput) excuseInput.value = '';

    CLASH_STATE.currentTurnIndex++;

    if (CLASH_STATE.currentTurnIndex < CLASH_STATE.players.length) {
      // Next player's turn
      renderClashTurn();
    } else {
      // All done, go to voting
      sfx.playFanfare();
      confetti.burst(60);
      showClashPhase('vote');
      renderClashVotingArena();
    }
  });

  // Reveal winner
  revealWinnerBtn?.addEventListener('click', () => {
    sfx.playFanfare();
    confetti.burst(100, true);
    showClashPhase('podium');
    renderClashPodium();
  });

  // Play again
  playAgainBtn?.addEventListener('click', () => {
    sfx.playClick();
    showClashPhase('setup');
  });

  // Share result
  shareClashBtn?.addEventListener('click', () => {
    const sorted = [...CLASH_STATE.players].sort((a, b) => b.votes - a.votes);
    const winner = sorted[0];
    const shareText = `🏆 Friends Bahana Showdown Winner: *${winner.name}*! 😂\nSituation: "${CLASH_STATE.situation}"\nWinning Bahana: "${winner.excuse}"\nVotes: ${winner.votes}\nCertified Shahi Liar! 👑\nBaqi dost haar gaye! Khelo Bahana Lab: ${window.location.href}`;

    if (navigator.share) {
      navigator.share({
        title: '🏆 Friends Bahana Showdown Winner!',
        text: shareText,
        url: window.location.href
      }).catch(() => copyChallengeFallback(shareText));
    } else {
      copyChallengeFallback(shareText);
    }
  });
}

function showClashPhase(phase) {
  const pSetup = document.getElementById('clash-phase-setup');
  const pInput = document.getElementById('clash-phase-input');
  const pVote = document.getElementById('clash-phase-vote');
  const pPodium = document.getElementById('clash-phase-podium');

  if (pSetup) pSetup.style.display = phase === 'setup' ? 'block' : 'none';
  if (pInput) pInput.style.display = phase === 'input' ? 'block' : 'none';
  if (pVote) pVote.style.display = phase === 'vote' ? 'block' : 'none';
  if (pPodium) pPodium.style.display = phase === 'podium' ? 'block' : 'none';

  document.getElementById('friends-clash-card')?.scrollIntoView({ behavior: 'smooth' });
}

function renderClashTurn() {
  const current = CLASH_STATE.players[CLASH_STATE.currentTurnIndex];
  const badge = document.getElementById('clash-turn-badge');
  const heading = document.getElementById('clash-turn-player-name');
  const sitReminder = document.getElementById('clash-reminder-situation');
  const btnLabel = document.getElementById('btn-turn-label');

  if (badge) badge.textContent = `Player ${CLASH_STATE.currentTurnIndex + 1} of ${CLASH_STATE.players.length}`;
  if (heading) heading.textContent = `${current.name} ki baari hai! 🤫`;
  if (sitReminder) sitReminder.textContent = CLASH_STATE.situation;
  if (btnLabel) {
    btnLabel.textContent = (CLASH_STATE.currentTurnIndex + 1 === CLASH_STATE.players.length) 
      ? 'Sab Ka Ho Gaya! Voting Shuru Karo 🗳️' 
      : 'Agla Dost ➡️';
  }

  setMascotState('suspicious', `${current.name}, kisi ko dikhana mat, sab se khatarnak jhoot likho!`);
}

function renderClashVotingArena() {
  const cardsContainer = document.getElementById('clash-voting-cards');
  if (!cardsContainer) return;
  cardsContainer.innerHTML = '';

  CLASH_STATE.players.forEach((player, idx) => {
    const card = document.createElement('div');
    card.className = 'clash-vote-card';
    card.innerHTML = `
      <div>
        <span class="clash-card-author-pill">👤 ${player.name}</span>
        <p class="clash-card-quote">"${player.excuse}"</p>
      </div>
      <button class="clash-card-vote-btn" data-index="${idx}">
        <span>Vote For ${player.name} 🔥</span>
        <span class="vote-tag-num">(${player.votes})</span>
      </button>
    `;
    cardsContainer.appendChild(card);
  });

  // Attach vote events
  cardsContainer.querySelectorAll('.clash-card-vote-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      sfx.playPop();
      confetti.burst(30);
      const idx = parseInt(btn.dataset.index, 10);
      CLASH_STATE.players[idx].votes++;
      
      const numSpan = btn.querySelector('.vote-tag-num');
      if (numSpan) numSpan.textContent = `(${CLASH_STATE.players[idx].votes})`;
      btn.classList.add('voted');
      setTimeout(() => btn.classList.remove('voted'), 400);

      showToast(`Vote recorded for ${CLASH_STATE.players[idx].name}! 🔥`);
      setMascotState('laughing', `Audience ${CLASH_STATE.players[idx].name} ke bahane pe hass rahi hai!`);
    });
  });

  setMascotState('laughing', "Sab dost mil kar vote karein, kaun sa bahana sab se top hai!");
}

function renderClashPodium() {
  // Sort players by votes descending
  const sorted = [...CLASH_STATE.players].sort((a, b) => b.votes - a.votes);
  const winner = sorted[0];

  const winnerName = document.getElementById('clash-winner-name');
  const winnerExcuse = document.getElementById('clash-winner-excuse');
  const winnerVotes = document.getElementById('clash-winner-votes-badge');
  const winnerTitle = document.getElementById('clash-winner-title');
  const lbList = document.getElementById('clash-leaderboard-list');

  const titles = [
    "👑 Sultan-e-Bahana (Supreme Deceiver)",
    "🎭 National Drama Academy Gold Medalist",
    "🌟 Oscar Award For Desi Acting",
    "🩴 Chappal Escape Grandmaster"
  ];
  const chosenTitle = titles[Math.floor(Math.random() * titles.length)];

  if (winnerName) winnerName.textContent = `${winner.name} Jeet Gaya! 🏆`;
  if (winnerExcuse) winnerExcuse.textContent = `"${winner.excuse}"`;
  if (winnerVotes) winnerVotes.textContent = `🔥 Total Votes: ${winner.votes}`;
  if (winnerTitle) winnerTitle.textContent = chosenTitle;

  if (lbList) {
    lbList.innerHTML = '';
    sorted.forEach((p, idx) => {
      const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
      const row = document.createElement('div');
      row.className = `leaderboard-row rank-${idx + 1}`;
      row.innerHTML = `
        <span>${medals[idx] || '🎖️'} <strong>${p.name}</strong></span>
        <span>${p.votes} Votes</span>
      `;
      lbList.appendChild(row);
    });
  }

  incrementLaughs(10);
  trackMysteryAction();
  setMascotState('legendary', `Mubarak ho ${winner.name}! Tum dosti ke sab se bare fraudie sabit hue! 😂`);
  if (typeof unlockAchievement === 'function') {
    unlockAchievement('party_host');
  }
}

// ============================================================================
// 19. CHAOS FX & VISUAL FLAIR (Screen Shake & Flying Emojis)
// ============================================================================
function triggerScreenShake() {
  document.body.classList.remove('screen-shake-intense');
  void document.body.offsetWidth; // Force reflow
  document.body.classList.add('screen-shake-intense');
  setTimeout(() => {
    document.body.classList.remove('screen-shake-intense');
  }, 600);
}

function spawnFlyingEmojis(customEmojis = null) {
  const emojis = customEmojis || ['😂', '🤣', '💀', '🔥', '🩴', '🏃‍♂️', '🚨', '👀'];
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('div');
    el.className = 'flying-emoji-particle';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = `${Math.random() * 85 + 5}vw`;
    el.style.bottom = '-30px';
    el.style.fontSize = `${Math.random() * 18 + 22}px`;
    el.style.animationDuration = `${Math.random() * 1.4 + 1.2}s`;
    el.style.animationDelay = `${Math.random() * 0.3}s`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2800);
  }
}

// ============================================================================
// 20. 🚨 DO NOT PRESS BUTTON SYSTEM (21 Hilarious Outcomes & Rare Jackpot)
// ============================================================================
const DO_NOT_PRESS_OUTCOMES = [
  "Bhai mana kia tha na! Screen ka color thora sa hil gaya! 😂",
  "Warning: Developer ko alert chala gaya hai ke aap baat nahi maantay.",
  "Dost! Button ke andar se chappal nikalne wali thi abhi!",
  "Billo ne aap ko 'Most Dheet User 2026' ka award de dia hai.",
  "Ye button dabane se Karachi ki traffic mein 2 minute ka mazeed izafa ho gaya.",
  "System alert: Aap ki curiosity dekh kar Phuppo ne rishta cancel kar dia.",
  "Kasam se, agar dobara dabaya toh laptop se biryani gayab ho jayegi!",
  "Ammi ne door se dekh lia hai... chappal launch trajectory calculate ho rahi hai.",
  "Button ka dard samjho... us ne subah se 5000 thapar khaye hain.",
  "Abhi Geo News walay bahar mic le kar kharay hain: 'Aap ne button kyun dabaya?'",
  "Emergency: 404 - Apki sharafat not found.",
  "FBI open up! Mazaaq tha bhai, par mat dabao na!",
  "Aap ke account se 0 rupay aur 0 paise deduct ho chuke hain.",
  "Chacha ne terrace se seeti baja di hai!",
  "Bhai tum school mein bhi 'Do Not Touch' walay notice ko chhoo kar aate thay na?",
  "Billo ka BP 180 cross kar gaya hai!",
  "Alert: NASA ne aap ke kamray ko low-IQ danger zone declare kar dia.",
  "Bas 5 minute aur dabao, developer coding chorr kar chai ki dukan khol lega.",
  "Yeh button dabane se padosi ka Wi-Fi password reset ho gaya!",
  "Shabash! 100 out of 10 for Zidd.",
  "💥 COSMIC RED BUTTON JACKPOT! Tumne system torh dia! Billo is now Dancing! 🌟"
];

function initDoNotPress() {
  const btn = document.getElementById('btn-do-not-press');
  const counterEl = document.getElementById('dnp-counter');
  const respBox = document.getElementById('dnp-response-box');
  const respText = document.getElementById('dnp-response-text');

  if (counterEl) counterEl.textContent = STATE.doNotPressCount;

  btn?.addEventListener('click', () => {
    STATE.doNotPressCount++;
    localStorage.setItem('bahana_dnp_count', STATE.doNotPressCount);
    if (counterEl) counterEl.textContent = STATE.doNotPressCount;

    // Rare jackpot condition: every 21st click OR random chance after 5 clicks
    const isJackpot = (STATE.doNotPressCount % 21 === 0) || (Math.random() < 0.05 && STATE.doNotPressCount > 5);

    if (isJackpot) {
      sfx.playFanfare();
      confetti.burst(100, true);
      triggerScreenShake();
      spawnFlyingEmojis(['🚨', '💥', '👑', '🎉', '🤯', '🍗']);
      setMascotState('legendary', "ASTAGHFIRULLAH! You triggered the Secret Red Chaos Jackpot!");
      if (respText) respText.textContent = DO_NOT_PRESS_OUTCOMES[20];
    } else {
      sfx.playBuzzer();
      triggerScreenShake();
      const normalList = DO_NOT_PRESS_OUTCOMES.slice(0, 20);
      const chosen = normalList[(STATE.doNotPressCount - 1) % normalList.length];
      if (respText) respText.textContent = chosen;

      const reactions = ['angry', 'shocked', 'suspicious', 'confused'];
      setMascotState(reactions[STATE.doNotPressCount % reactions.length]);
    }

    if (respBox) {
      respBox.style.display = 'block';
      respBox.classList.remove('highlight-fade');
      void respBox.offsetWidth;
      respBox.classList.add('highlight-fade');
    }

    incrementLaughs(2);
    trackMysteryAction();
    if (STATE.doNotPressCount >= 5) {
      unlockAchievement('dnp_rebel');
    }
  });
}

// ============================================================================
// 21. MEME ROULETTE & MEME DATABASE (25+ Relatable Scenarios)
// ============================================================================
const MEMES_DB = [
  {
    format: "POV",
    topic: "University Life",
    primary: "Class start hone mein 2 minute baqi hain aur tum abhi bistar mein let kar ankh kholte ho:",
    punchline: "Washroom mein brush karte hue sochte ho ke degree zaroori hai ya neend...",
    comment: "Degree gayi tel lene, neend cosmic requirement hai!"
  },
  {
    format: "Expectation vs Reality",
    topic: "Bas 5 Minutes",
    primary: "Expectation: 'Bas 5 minute mein gate pe pohnch raha hoon!'",
    punchline: "Reality: Abhi towel dhoondh rahe ho aur fan full speed pe chal raha hai.",
    comment: "Yeh 5 minute NASA ke standard time zone pe calculated hain!"
  },
  {
    format: "When...",
    topic: "Office & Boss",
    primary: "Jab Friday shaam 5:58 pe boss ka message aaye: 'Quick 2-minute sync?'",
    punchline: "Aap achanak Wi-Fi router ka switch aisi tezi se band karte ho jaise nuclear bomb diffuse kar rahe ho.",
    comment: "Router ki qurbani deni parti hai dosti!"
  },
  {
    format: "Nobody:",
    topic: "Developers",
    primary: "Nobody: \nAbsolutely nobody: \nJunior Dev 10 baje raat ko:",
    punchline: "'Chhota sa CSS padding change push kiya tha main branch pe, ab pura payment gateway ud gaya hai.'",
    comment: "Git blame karo, Billo ko nahi!"
  },
  {
    format: "That moment when...",
    topic: "AI Students",
    primary: "Assignment ka tricky question ChatGPT ko copy-paste kia:",
    punchline: "ChatGPT jawab deta hai: 'Bhai is topic pe toh main khud confuse hoon, book khol lo.'",
    comment: "AI bhi kehta hai: Mujhse na ho payega!"
  },
  {
    format: "Me vs Also Me",
    topic: "Late Replies",
    primary: "Me: Dost ke urgent message ka 4 ghante baad reply nahi karta kyunke 'busy tha'.",
    punchline: "Also Me: Usi waqt Instagram pe 47 reels like kar ke 3 doston ko send kar chuka hoon.",
    comment: "Pakde gaye Chico! Screen time 14 ghante bol raha hai."
  },
  {
    format: "Before vs After",
    topic: "Online Meeting",
    primary: "Before Meeting: 'Haan camera on karunga, full professional vibe maintain karenge.'",
    punchline: "After Meeting Starts: Mic off, camera off, rajayi ke andar let ke biscuit chai mein dip kar rahe ho.",
    comment: "Work From Bed Gold Medalist!"
  },
  {
    format: "POV",
    topic: "Desi Family & Rishtay",
    primary: "Ghar walay achanak puchte hain: 'Beta aage zindagi mein kya plan hai?'",
    punchline: "Aap plate mein se elaichi nikaal ke aisi geem-bheer research karte ho jaise Nobel prize milne wala hai.",
    comment: "Elaichi ne poori family ki attention divert kar di!"
  },
  {
    format: "When...",
    topic: "Group Chats",
    primary: "Jab group chat mein koi plan banaye: 'Chal bhai Sunday ko sab milte hain!'",
    punchline: "10 dost 'Done' likhte hain lekin actual cafe pe sirf tum aur billo kharay hote hain.",
    comment: "Desi dosti ka universal constitution!"
  },
  {
    format: "Nobody:",
    topic: "Client 'Small Change'",
    primary: "Client: 'Bas aik chhota sa logo ka colour change karna hai, 2 minute lagengay na?'",
    punchline: "Poori website ka code rebuild ho gaya aur budget wahi 500 rupay reh gaya.",
    comment: "Client ko bolo chai piye sukoon se!"
  },
  {
    format: "Expectation vs Reality",
    topic: "Exams Survival",
    primary: "Expectation: 'Aaj raat 12 ghante parh ke pura syllabus ek hi sitting mein finish!'",
    punchline: "Reality: 15 minute baad table saaf kar ke stationery ki colour combination check kar rahe ho.",
    comment: "Kitabein kholte hi neend ka anesthesia lag jata hai!"
  },
  {
    format: "That moment when...",
    topic: "Friends",
    primary: "Jab restaurant ka bill aane pe sab se ameer dost achanak washroom chala jaye:",
    punchline: "Uske wapas aane tak table pe waiter aur aap ki aadhi kidney baqi hoti hai.",
    comment: "Washroom diplomacy at its finest!"
  },
  {
    format: "POV",
    topic: "Late Arrival",
    primary: "Aap call pe bolte ho: 'Bas red light cross ho gayi hai, turning pe hoon.'",
    punchline: "Actually aap abhi ghar ke sofe pe baithe jurabay dhoondh rahe ho.",
    comment: "Signal tumhare dil ke andar cross hua tha!"
  },
  {
    format: "Me vs Also Me",
    topic: "University Life",
    primary: "Me: 'Is semester pehle din se notes banaunga aur topper banunga.'",
    punchline: "Also Me (Exam ki raat 2 baje): 'Bhai kisi ke paas class representative ka phone number hai?'",
    comment: "CR ne pehle hi phone flight mode pe dala hua hai!"
  },
  {
    format: "When...",
    topic: "Desi Family",
    primary: "Jab ammi bole: 'Mehmaan drawing room mein hain, seedhe ho ke baitho.'",
    punchline: "Aap achanak maths ke theorems aur mulk ki maeeshat pe aisi tehqeeq karte ho jaise Harvard graduate ho.",
    comment: "Sharif bacha protocol 100% active!"
  },
  {
    format: "Nobody:",
    topic: "Developers",
    primary: "Nobody: \nLead Engineer during system demo:",
    punchline: "'Mera code local machine pe flawlessly chal raha tha, AWS server ko kisi rishtedar ki nazar lag gayi hai.'",
    comment: "Evil eye is the best devops explanation!"
  },
  {
    format: "Before vs After",
    topic: "Gym & Fitness",
    primary: "Before New Year: 'Gym membership done, 6-pack incoming by March.'",
    punchline: "3rd January: Gym ke samne walay dhabbe pe 3 aloo parathay aur meethi karak chai.",
    comment: "Parathay mein desi protein hota hai bro!"
  },
  {
    format: "Expectation vs Reality",
    topic: "Online Shopping",
    primary: "Expectation: Royal Silk Kurta photoshoot edition.",
    punchline: "Reality: Aisa kapra deliver hua jisse padosi apni Suzuki FX ka sheesha saaf karte hain.",
    comment: "Izzat ka carpet bana dia delivery walon ne!"
  },
  {
    format: "That moment when...",
    topic: "Group Chats",
    primary: "Jab 3 saal puranay inactive school WhatsApp group mein notification aaye:",
    punchline: "'Guys, let's reunite for dinner!' Aur 14 log bina kuch bole group leave kar dein.",
    comment: "Peaceful life preservation!"
  },
  {
    format: "POV",
    topic: "Office Work",
    primary: "Jab screen share pe galti se YouTube ki tab sab ke samne open reh jaye:",
    punchline: "'10 Hours of White Noise to Stop Panicking Over Career Choices'.",
    comment: "Manager bhi background mein wahi sun raha tha!"
  },
  {
    format: "When...",
    topic: "Late Replies",
    primary: "Aap 5 din baad message ka reply karte ho:",
    punchline: "'Sorry yaara, notifications achanak turn off ho gaye thay!' (Phone 24 ghante mutthi mein tha).",
    comment: "Phone haath mein chimat chuka tha lekin notification sharmila tha!"
  },
  {
    format: "Me vs Also Me",
    topic: "AI Students",
    primary: "Me: 'Main research paper ka deep analysis khud karunga.'",
    punchline: "Also Me: 'Prompt: Explain this whole paper in 2 sentences like I am a lazy cat.'",
    comment: "Billo relates to this on a spiritual level!"
  },
  {
    format: "Nobody:",
    topic: "Desi Traffic",
    primary: "Nobody: \nRickshaw driver cutting across 4 lanes:",
    punchline: "Bina indicator diye achanak 90 degree turn lete hue: 'Ustad horn kyun baja rahe ho, main toh murr raha hoon!'",
    comment: "Rickshaw physics operates in 5th dimension!"
  },
  {
    format: "That moment when...",
    topic: "Client 'Small Change'",
    primary: "Client calls at 11:45 PM on a Sunday:",
    punchline: "'Bhai so toh nahi rahe thay? Ek quick thought aaya tha, poori mobile app ko desktop landscape kar do na.'",
    comment: "Developer ka blood pressure: 450!"
  },
  {
    format: "Expectation vs Reality",
    topic: "Bas 5 Minutes",
    primary: "Expectation: 'Chalo dhabbe pe ek quick chai peete hain, 10 minute ka kaam hai.'",
    punchline: "Reality: 4 ghante baad dhabbe pe dunya ki geopolitical wars solve ho chuki hoti hain.",
    comment: "Dhabba chai diplomacy is unbeatable!"
  }
];

let memeSpinsCount = parseInt(localStorage.getItem('bahana_meme_spins') || '0', 10);
let currentMeme = null;

function initMemeRoulette() {
  const spinBtn = document.getElementById('btn-spin-meme');
  const copyBtn = document.getElementById('btn-copy-meme');
  const shareBtn = document.getElementById('btn-share-meme');

  // Load initial random meme
  renderMemeCard(MEMES_DB[Math.floor(Math.random() * MEMES_DB.length)]);

  spinBtn?.addEventListener('click', () => {
    sfx.playPop();
    spinMemeRoulette();
  });

  copyBtn?.addEventListener('click', () => {
    if (!currentMeme) return;
    const text = `😂 [${currentMeme.format}] ${currentMeme.topic}\n"${currentMeme.primary}"\n👉 ${currentMeme.punchline}\n(via Bahana Generator Meme Mode)`;
    navigator.clipboard.writeText(text).then(() => {
      sfx.playClick();
      showToast('Meme copied to clipboard! 😂');
    });
  });

  shareBtn?.addEventListener('click', () => {
    if (!currentMeme) return;
    const text = `😂 [${currentMeme.format}] ${currentMeme.topic}\n"${currentMeme.primary}"\n👉 ${currentMeme.punchline}\nDekho Meme Roulette: ${window.location.href}`;
    if (navigator.share) {
      navigator.share({ title: '😂 Desi Meme Roulette', text, url: window.location.href }).catch(() => copyChallengeFallback(text));
    } else {
      copyChallengeFallback(text);
    }
  });
}

function spinMemeRoulette() {
  const card = document.getElementById('meme-card');
  const spinBtn = document.getElementById('btn-spin-meme');
  const primaryText = document.getElementById('meme-primary-text');
  const punchlineText = document.getElementById('meme-reaction-punchline');

  if (spinBtn) spinBtn.disabled = true;
  if (card) card.classList.add('spinning');

  let cycleCounter = 0;
  const cycleInterval = setInterval(() => {
    const randomPick = MEMES_DB[Math.floor(Math.random() * MEMES_DB.length)];
    if (primaryText) primaryText.textContent = randomPick.primary;
    if (punchlineText) punchlineText.textContent = randomPick.punchline;
    cycleCounter++;
    if (cycleCounter > 7) {
      clearInterval(cycleInterval);
      if (card) card.classList.remove('spinning');
      if (spinBtn) spinBtn.disabled = false;

      // Final selection
      const chosen = MEMES_DB[Math.floor(Math.random() * MEMES_DB.length)];
      renderMemeCard(chosen);
      sfx.playFanfare();
      confetti.burst(40);
      incrementLaughs(2);
      trackMysteryAction();

      memeSpinsCount++;
      localStorage.setItem('bahana_meme_spins', memeSpinsCount);
      if (memeSpinsCount >= 5) {
        unlockAchievement('meme_lord');
      }
    }
  }, 100);
}

function renderMemeCard(item) {
  currentMeme = item;
  const formatEl = document.getElementById('meme-format');
  const topicEl = document.getElementById('meme-topic');
  const primaryEl = document.getElementById('meme-primary-text');
  const punchlineEl = document.getElementById('meme-reaction-punchline');

  if (formatEl) formatEl.textContent = item.format;
  if (topicEl) topicEl.textContent = `🎯 ${item.topic}`;
  if (primaryEl) primaryEl.textContent = item.primary;
  if (punchlineEl) punchlineEl.textContent = item.punchline;

  setMascotState('laughing', item.comment);
}

// ============================================================================
// 22. BAHANA NEWS NETWORK (BNN 🚨 BREAKING NEWS GENERATOR)
// ============================================================================
const BNN_STORIES = [
  {
    headline: "🚨 BREAKING: Noujawan Ne 'Bas 5 Minute' Keh Kar 4 Ghante Guzar Diye, Mohallay Mein Red Alert",
    details: "Karachi ke rehaishi noujawan ne doston ko 'main turning pe hoon' ka jhoota dawa kiya. Tehqeeqat se maloom hua ke suspect abhi bhee bistar mein sofe ke pillow ko gale lagaye soya hua tha. Mohallay ki aunty ne terrace se video bana kar khandan group mein forward kar di hai.",
    ticker: "BNN EXCLUSIVE: Police advises citizens not to believe anyone who says 'Main gate pe khara hoon' • Chacha Inspector orders immediate chappal raid."
  },
  {
    headline: "🚨 SHOCKING: Laptop Ne Assignment Karne Se Inkar Kar Dia, Kehta Hai 'Tumhara Future Andhere Mein Hai'",
    details: "University ke student ne professor ko bataya ke unka laptop achanak self-aware ho kar bol parha. Laptop kehta hai: 'Maine tumhari pichhli 4 assignments dekhi hain, is baar behtar hai tum chai ki dukan khol lo.' Professor ne laptop ko 10 out of 10 marks de diye.",
    ticker: "BNN TECH DESK: AI models across the globe declare strike against engineering students • 'Hum se assignments mat karwao' slogan trending."
  },
  {
    headline: "🚨 LIVE: Shaadi Mein Achanak Biryani Khatam, Rishtedaron Ka Qoumi Assembly Ke Bahar Dharna",
    details: "Lahore ki aik taqreeb mein qorma aur naan toh thay lekin biryani ka degh pehle 8 minute mein saaf ho gaya. Phuppo ne foran rishta cancel karwaya aur baratiyon ne hall ke AC band karwa diye. Rescue 1122 ne sweet dish bhej kar maamla rafa dafa karwaya.",
    ticker: "BNN FOOD ALERT: Emergency protocol 404: Biryani not found • Khandan elders recommend marrying into families with unlimited catering."
  },
  {
    headline: "🚨 SCANDAL: Boss Ko 'Severe Internet Down' Batane Wala Mulazim Instagram Live Pe Biryani Khata Pakda Gaya",
    details: "Islamabad ke software house mulazim ne Slack pe 'Fiber cable kat gayi hai' likh kar leave li. 20 minute baad company ke CEO ne usay Murree Expressway ke dhabbe pe live reel banate hue dekh lia. HR ne firing letter WhatsApp sticker ke taur pe send kar dia.",
    ticker: "BNN CORPORATE ALERT: 98% of sick leaves are directly linked to pleasant weather • HR departments installing satellite trackers."
  },
  {
    headline: "🚨 CRIME WATCH: Padosi Ka Wi-Fi Password Guess Karne Par Mohalla Committee Ne Gold Medal De Dia",
    details: "Local hacker ne padosi ka Wi-Fi password 'Pakistan123' aakhri koshish mein unlock kar lia. Padosi ne shikayat karne ki bajaye kaha: 'Aap ki mehnat dekh kar dil khush hua, kal se speed 50mbps kar dunga.'",
    ticker: "BNN CYBERCRIME: Most popular passwords in 2026: 'AllahMalik', 'Password123', and 'MujheKyuNikala'."
  },
  {
    headline: "🚨 SPECIAL REPORT: Alarm Clock Ne Subah 7 Baje Bajne Se Pehle Emotional Bribe Mangi",
    details: "Noujawan ka daawa hai ke alarm clock ne aawaz di: 'Bhai tu waise bhi late ho chuka hai, 15 minute aur so ja.' Suspect ne alarm ki baat maan kar doosri karwat li aur ab dopahar ke 3 baj rahe hain.",
    ticker: "BNN SLEEP STUDY: Snooze button is responsible for 40% of Pakistan's economic GDP delays."
  },
  {
    headline: "🚨 COSMIC DISASTER: NASA Confirms Highest Concentration of Bahanas Discovered Over Local Chai Dhabba",
    details: "International Space Station ke sensors ne South Asia ke upar ajeeb magnetic energy detect ki. Satellite tasweeron se saabit hua ke 50 dost baith kar ek doosre ko 'Kal se gym pakka' ka bahana de rahe thay.",
    ticker: "BNN SPACE WATCH: Cosmic gravity anomaly located near Quetta Tea Stall • Reality bends under the weight of false promises."
  },
  {
    headline: "🚨 BREAKING: Group Admin Ne 14 Doston Ke Offline Hone Par Pure Mohallay Mein Munadi Karwa Di",
    details: "WhatsApp group mein 'Chai pe kaun chal raha hai?' ka sawal pucha gaya. Sab ne 'Seen' kia lekin kisi ne reply nahi dia. Admin ne badla lene ke liye group ka naam badal kar 'Subah 5 baje jogging group' rakh dia.",
    ticker: "BNN SOCIAL MEDIA: Blue ticks declared legally binding evidence in court of friendship."
  }
];

let currentBnnIndex = 0;

function initBahanaNewsNetwork() {
  const genBtn = document.getElementById('btn-bnn-generate');
  const shareBtn = document.getElementById('btn-bnn-share');

  // Load initial story
  renderBnnStory(BNN_STORIES[0]);

  genBtn?.addEventListener('click', () => {
    sfx.playEscalation();
    triggerScreenShake();
    currentBnnIndex = (currentBnnIndex + 1) % BNN_STORIES.length;
    renderBnnStory(BNN_STORIES[currentBnnIndex]);
    incrementLaughs(2);
    trackMysteryAction();
  });

  shareBtn?.addEventListener('click', () => {
    const story = BNN_STORIES[currentBnnIndex];
    const shareText = `📰 BNN BREAKING NEWS REPORT 🚨\n\n${story.headline}\n\n${story.details}\n\nLive Updates: ${window.location.href}`;
    if (navigator.share) {
      navigator.share({ title: 'BNN Breaking News', text: shareText, url: window.location.href }).catch(() => copyChallengeFallback(shareText));
    } else {
      copyChallengeFallback(shareText);
    }
  });
}

function renderBnnStory(story) {
  const headlineEl = document.getElementById('bnn-headline');
  const detailsEl = document.getElementById('bnn-details');
  const tickerEl = document.getElementById('bnn-ticker');
  const card = document.getElementById('bnn-news-card');

  if (card) {
    card.classList.remove('news-pulse');
    void card.offsetWidth;
    card.classList.add('news-pulse');
  }

  if (headlineEl) headlineEl.textContent = story.headline;
  if (detailsEl) detailsEl.textContent = story.details;
  if (tickerEl) tickerEl.textContent = story.ticker;

  setMascotState('shocked', "Geo News walay bhee itna masala nahi lagate!");
}

// ============================================================================
// 23. ACHIEVEMENTS SYSTEM (7 Badges & Local Storage Persistence)
// ============================================================================
const ACHIEVEMENTS_DEF = [
  {
    id: 'first_bahana',
    icon: '✨',
    name: 'Pehla Kadam',
    desc: 'Generate your first solid excuse from the lab.'
  },
  {
    id: 'dnp_rebel',
    icon: '🚨',
    name: 'Red Button Rebel',
    desc: 'Defied instructions and pressed DO NOT PRESS 5 times.'
  },
  {
    id: 'meme_lord',
    icon: '🎰',
    name: 'Meme Connoisseur',
    desc: 'Spun the Meme Roulette 5 times in search of relatable pain.'
  },
  {
    id: 'catastrophe_king',
    icon: '🤯',
    name: 'Cosmic Disaster',
    desc: 'Escalated a simple excuse all the way to Level 4 Catastrophe.'
  },
  {
    id: 'secret_agent',
    icon: '🧪',
    name: 'Underground Chemist',
    desc: 'Discovered and entered the Secret Bahana Lab.'
  },
  {
    id: 'battle_veteran',
    icon: '⚔️',
    name: 'Sultan of Votes',
    desc: 'Cast 5 votes in the epic Bahana Battle Arena.'
  },
  {
    id: 'party_host',
    icon: '👥',
    name: 'Showdown Champion',
    desc: 'Completed a full multiplayer Friends Bahana Showdown match.'
  }
];

function getUnlockedAchievements() {
  try {
    return JSON.parse(localStorage.getItem('bahana_achievements') || '[]');
  } catch (e) {
    return [];
  }
}

function unlockAchievement(id) {
  const current = getUnlockedAchievements();
  if (current.includes(id)) return;

  const found = ACHIEVEMENTS_DEF.find((a) => a.id === id);
  if (!found) return;

  current.push(id);
  localStorage.setItem('bahana_achievements', JSON.stringify(current));

  sfx.playFanfare();
  confetti.burst(80, true);
  showAchievementToast(found);
  renderAchievementsModal();
}

function showAchievementToast(ach) {
  const toast = document.getElementById('achievement-toast-banner');
  const iconEl = document.getElementById('achievement-toast-icon');
  const nameEl = document.getElementById('achievement-toast-name');
  const descEl = document.getElementById('achievement-toast-desc');

  if (!toast) return;

  if (iconEl) iconEl.textContent = ach.icon;
  if (nameEl) nameEl.textContent = `Achievement Unlocked: ${ach.name}!`;
  if (descEl) descEl.textContent = ach.desc;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

function initAchievementsSystem() {
  const navBtn = document.getElementById('btn-achievements-nav');
  const closeBtn = document.getElementById('btn-close-achievements');
  const modal = document.getElementById('achievements-modal');

  navBtn?.addEventListener('click', () => {
    sfx.playClick();
    renderAchievementsModal();
    if (modal) modal.style.display = 'flex';
  });

  closeBtn?.addEventListener('click', () => {
    sfx.playClick();
    if (modal) modal.style.display = 'none';
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  renderAchievementsModal();
}

function renderAchievementsModal() {
  const grid = document.getElementById('achievements-grid');
  const countEl = document.getElementById('achievements-unlocked-count');
  const unlocked = getUnlockedAchievements();

  if (countEl) {
    countEl.textContent = `${unlocked.length} / ${ACHIEVEMENTS_DEF.length}`;
  }

  if (!grid) return;
  grid.innerHTML = '';

  ACHIEVEMENTS_DEF.forEach((ach) => {
    const isUnlocked = unlocked.includes(ach.id);
    const item = document.createElement('div');
    item.className = `achievement-badge-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    item.innerHTML = `
      <div class="ach-icon-circle">${ach.icon}</div>
      <div class="ach-content">
        <h4 class="ach-title">${ach.name} ${isUnlocked ? '✅' : '🔒'}</h4>
        <p class="ach-desc">${ach.desc}</p>
      </div>
    `;
    grid.appendChild(item);
  });
}

// ============================================================================
// 24. SECRET BAHANA LAB 🧪 (Formulas & Classified Passcodes)
// ============================================================================
const SECRET_FORMULAS = [
  "🧪 SYNTHESIZED FORMULA #01: 'Sir, mera Wi-Fi router quantum entanglement mein phas gaya tha, data packets 1997 ke Geo Cities server pe deliver ho gaye.'",
  "🧪 SYNTHESIZED FORMULA #02: 'Bhai, main time pe nikal raha tha lekin mere joote ne bolna shuru kar dia ke 'aaj ka raasta pur-khatar hai'.' ",
  "🧪 SYNTHESIZED FORMULA #03: 'Ammi ke kehne par subah subah dahi lene gaya tha, dahi walay ne NASA ki confidential file mein dahi pack kar di.'",
  "🧪 SYNTHESIZED FORMULA #04: 'Mera phone 5th dimension se connect ho gaya tha, aapka call 2038 mein drop hua hai.'",
  "🧪 SYNTHESIZED FORMULA #05: 'Khandan ke 18 phuppos ne aapas mein conference call kar ke mera schedule permanently freeze kar dia.'"
];

function initSecretBahanaLab() {
  const triggerBtn = document.getElementById('btn-secret-room-trigger');
  const closeBtn = document.getElementById('btn-close-secret-lab');
  const modal = document.getElementById('secret-lab-modal');
  const synthBtn = document.getElementById('btn-secret-synth');
  const synthOutput = document.getElementById('secret-synth-output');
  const codeBtn = document.getElementById('btn-unlock-secret-code');
  const codeInput = document.getElementById('secret-code-input');

  triggerBtn?.addEventListener('click', () => {
    sfx.playFanfare();
    openSecretLabModal();
  });

  closeBtn?.addEventListener('click', () => {
    sfx.playClick();
    if (modal) modal.style.display = 'none';
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  synthBtn?.addEventListener('click', () => {
    sfx.playEscalation();
    confetti.burst(30);
    const chosen = SECRET_FORMULAS[Math.floor(Math.random() * SECRET_FORMULAS.length)];
    if (synthOutput) {
      synthOutput.textContent = chosen;
      synthOutput.classList.remove('highlight-fade');
      void synthOutput.offsetWidth;
      synthOutput.classList.add('highlight-fade');
    }
    incrementLaughs(3);
  });

  codeBtn?.addEventListener('click', () => {
    const val = codeInput?.value.trim().toUpperCase();
    if (!val) {
      showToast('Pehle secret passcode enter karein!');
      return;
    }

    sfx.playPop();
    if (val === 'CHAI' || val === 'SAMOSA') {
      confetti.burst(60, true);
      showToast('☕ PASSCODE ACCEPTED: Unlimited Virtual Chai Refill Granted!');
      if (synthOutput) synthOutput.textContent = "🔓 CHACHA VIP PASSCODE ACCEPTED: 'Sir, chai itni karak thi ke physics ke qawaneen suspend ho gaye thay.'";
    } else if (val === 'BILLO') {
      confetti.burst(80);
      showToast('🐱 BILLO PROTOCOL: +100 Laugh points added!');
      incrementLaughs(100);
      if (synthOutput) synthOutput.textContent = "🐾 BILLO'S TOP SECRET ARCHIVE: 'Meow! Sach toh yeh tha ke Billo ne Wi-Fi wire chaba li thi.'";
      setMascotState('legendary', "Meow! You know my secret identity!");
    } else if (val === 'KARACHI' || val === 'LAHORE') {
      showToast('🌆 METROPOLITAN PASSCODE VERIFIED!');
      if (synthOutput) synthOutput.textContent = `🏙️ ${val} WEATHER PROTOCOL: 'Traffic aur barish ka aesa combination bana ke sab maaf ho gaya!'`;
    } else {
      sfx.playBuzzer();
      showToast('❌ INVALID PASSCODE! Try hints: CHAI, BILLO, SAMOSA');
    }
  });
}

function openSecretLabModal() {
  const modal = document.getElementById('secret-lab-modal');
  if (modal) modal.style.display = 'flex';
  sfx.playFanfare();
  confetti.burst(60, true);
  unlockAchievement('secret_agent');
  setMascotState('legendary', "🧪 Welcome to the Underground Bahana Synthesis Lab!");
}

// ============================================================================
// 25. SHAREABLE DISASTER CARD POSTER MODAL 📸
// ============================================================================
function initShareCardModal() {
  const openBtn = document.getElementById('btn-open-share-card');
  const closeBtn = document.getElementById('btn-close-share-modal');
  const modal = document.getElementById('share-card-modal');
  const copyBtn = document.getElementById('btn-download-share-card');
  const waBtn = document.getElementById('btn-whatsapp-share');

  openBtn?.addEventListener('click', () => {
    sfx.playPop();
    renderShareCardPoster();
    if (modal) modal.style.display = 'flex';
  });

  closeBtn?.addEventListener('click', () => {
    sfx.playClick();
    if (modal) modal.style.display = 'none';
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  copyBtn?.addEventListener('click', () => {
    const text = document.getElementById('share-poster-text')?.textContent;
    const risk = document.getElementById('share-poster-risk')?.textContent;
    const abs = document.getElementById('share-poster-absurdity')?.textContent;
    const susp = document.getElementById('share-poster-suspicion')?.textContent;

    const formatted = `📜 [CERTIFIED BAHANA LAB DISASTER CARD] 😂\n\n"${text}"\n\n📊 Risk: ${risk}\n🔥 Absurdity: ${abs}\n👀 Suspicion: ${susp}\n\nBachao apni izzat: ${window.location.href}`;
    navigator.clipboard.writeText(formatted).then(() => {
      sfx.playClick();
      showToast('Disaster Card text copied for Instagram / WhatsApp! 📸');
    });
  });

  waBtn?.addEventListener('click', () => {
    const text = document.getElementById('share-poster-text')?.textContent;
    const risk = document.getElementById('share-poster-risk')?.textContent;
    const abs = document.getElementById('share-poster-absurdity')?.textContent;

    const waText = encodeURIComponent(`😂 *Certified Bahana Lab Disaster Card* 📜\n\n"${text}"\n\n📊 Risk: ${risk} | Absurdity: ${abs}\n\nCheck out Bahana Lab v2.0: ${window.location.href}`);
    window.open(`https://wa.me/?text=${waText}`, '_blank');
  });
}

function renderShareCardPoster() {
  if (!STATE.currentExcuse) return;

  const textEl = document.getElementById('share-poster-text');
  const riskEl = document.getElementById('share-poster-risk');
  const absEl = document.getElementById('share-poster-absurdity');
  const suspEl = document.getElementById('share-poster-suspicion');

  const activeText = document.getElementById('card-excuse-text')?.textContent || STATE.currentExcuse.text;
  const activeRisk = document.getElementById('card-risk-level')?.textContent || `Risk: ${STATE.currentExcuse.risk}`;
  const activeAbs = document.getElementById('meter-absurdity-val')?.textContent || `${STATE.currentExcuse.absurdity}%`;
  const activeSusp = document.getElementById('meter-suspicion-val')?.textContent || `${STATE.currentExcuse.suspicion}%`;

  if (textEl) textEl.textContent = activeText;
  if (riskEl) riskEl.textContent = activeRisk;
  if (absEl) absEl.textContent = activeAbs;
  if (suspEl) suspEl.textContent = activeSusp;
}


