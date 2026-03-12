let currentStep = 0;
const totalSteps = 6;
let currentLang = 'km'; // Default to Khmer

const translations = {
    km: {
        mainTitle: "សាច់មាន់ស៊ូវឡាគី",
        subTitle: "ជាមួយបាយក្រូចឆ្មា",
        ingredientsTitle: "គ្រឿងផ្សំចាំបាច់",
        ingredients: [
            "សាច់មាន់ (ទ្រូង ឬភ្លៅ)",
            "អង្ករ (គ្រាប់វែង ឬបាសម៉ាទី)",
            "ប្រេងអូលីវ និងក្រូចឆ្មា",
            "ខ្ទឹមស និងស្លឹកអូរីហ្គាណូ",
            "នំបុ័ងពីតា និងទឹកជ្រលក់ត្សាត្ស៊ីគី"
        ],
        startLabel: "ចុច \"ចាប់ផ្តើម\" ដើម្បីចាប់ផ្តើម! ↓",
        steps: [
            { title: "រៀបចំសាច់មាន់", desc: "ហាន់សាច់មាន់ជាដុំៗឱ្យប៉ុនគ្នា។ ដាក់វាក្នុងចានធំមួយ។" },
            { title: "ធ្វើទឹកម៉ារីណាត", desc: "លាយប្រេងអូលីវ ១/៤ ពែង, ទឹកក្រូចឆ្មា ១ ផ្លែ, ខ្ទឹមស ២ កំពឹស និងអូរីហ្គាណូឱ្យច្រើន។" },
            { title: "ត្រាំសាច់", desc: "ចាក់ទឹកម៉ារីណាតលើសាច់មាន់។ ទុកវាចោល ៣០ នាទីក្នុងទូទឹកកក។" },
            { title: "ដាំបាយ", desc: "ដាំបាយជាមួយអំបិលបន្តិច និងច្របាច់ក្រូចឆ្មា រហូតដល់ឆ្អិនងំល្អ។" },
            { title: "អាំង", desc: "ដោតសាច់មាន់នឹងឈើ។ អាំងវា ១០ នាទីរហូតដល់ឡើងពណ៌មាស។" },
            { title: "រួចរាល់!", desc: "រៀបសាច់មាន់លើបាយឱ្យស្អាត ជាមួយនំបុ័ងពីតាក្តៅៗ។ រីករាយនឹងអាហារល្ងាច!" }
        ],
        back: "ថយក្រោយ",
        next: "បន្ទាប់",
        start: "ចាប់ផ្តើមធ្វើ",
        finish: "រួចរាល់",
        audioBtn: "🔊 អានឱ្យស្តាប់",
        footer: "បង្កើតឡើងសម្រាប់បទពិសោធន៍ធ្វើម្ហូបដ៏ងាយស្រួល។"
    },
    en: {
        mainTitle: "Chicken Souvlaki",
        subTitle: "with Lemon Rice",
        ingredientsTitle: "The Basics",
        ingredients: [
            "Chicken (Breasts or Thighs)",
            "Rice (Long grain or Basmati)",
            "Olive Oil & Lemon",
            "Garlic & Oregano",
            "Pita Bread & Tzatziki"
        ],
        startLabel: "Tap \"Start\" to begin! ↓",
        steps: [
            { title: "Prep the Chicken", desc: "Cut the chicken into large, even pieces. Put them in a bowl." },
            { title: "Make Marinade", desc: "Mix 1/4 cup olive oil, juice of 1 lemon, 2 cloves garlic, and lots of oregano." },
            { title: "Marinate", desc: "Pour marinade over chicken. Let it sit for 30 minutes in the fridge." },
            { title: "Cook the Rice", desc: "Boil rice with a pinch of salt and a squeeze of lemon until fluffy." },
            { title: "Grill", desc: "Thread chicken on sticks. Grill for 10 minutes until golden brown." },
            { title: "Finished!", desc: "Serve the chicken over a big bed of rice with warm pita bread. Enjoy!" }
        ],
        back: "Back",
        next: "Next",
        start: "Start Cooking",
        finish: "Finish",
        audioBtn: "🔊 Read Aloud",
        footer: "Created for an easy cooking experience."
    }
};

function toggleLanguage() {
    currentLang = (currentLang === 'km') ? 'en' : 'km';
    document.documentElement.lang = currentLang;
    document.getElementById('langBtn').innerHTML = (currentLang === 'km') ? 'English' : 'ភាសាខ្មែរ';
    updateUI();
}

function updateUI() {
    const t = translations[currentLang];
    
    // Header
    document.getElementById('mainTitle').innerText = t.mainTitle;
    document.getElementById('subTitle').innerText = t.subTitle;
    
    // Step 0
    document.getElementById('ingredientsTitle').innerText = t.ingredientsTitle;
    const list = document.getElementById('ingredientsList');
    list.innerHTML = "";
    t.ingredients.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        list.appendChild(li);
    });
    document.getElementById('startLabel').innerText = t.startLabel;
    
    // Steps 1-6
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`step${i}Title`).innerText = t.steps[i-1].title;
        document.getElementById(`step${i}Desc`).innerText = t.steps[i-1].desc;
        const audioBtns = document.querySelectorAll('.btn-audio');
        audioBtns.forEach(btn => btn.innerText = t.audioBtn);
    }
    
    // Footer
    document.getElementById('footerText').innerText = t.footer;
    
    // Navigation
    updateButtons();
}

function changeStep(direction) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep += direction;
    document.getElementById(`step-${currentStep}`).classList.add('active');
    updateButtons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateButtons() {
    const t = translations[currentLang];
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    backBtn.disabled = (currentStep === 0);
    backBtn.innerText = t.back;
    
    if (currentStep === 0) {
        nextBtn.innerText = t.start;
    } else if (currentStep === totalSteps) {
        nextBtn.innerText = t.finish;
    } else {
        nextBtn.innerText = t.next;
    }
}

// Audio Readout Feature
function readStep() {
    if (currentStep === 0) return;
    const t = translations[currentLang];
    const step = t.steps[currentStep - 1];
    const textToSpeak = `${step.title}. ${step.desc}`;
    speakText(textToSpeak, currentLang);
}

function speakText(text, lang) {
    // Cancel any current speaking
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = (lang === 'km') ? 'km-KH' : 'en-US';
    utterance.rate = 0.9; // Slightly slower for seniors
    utterance.pitch = 1.0;
    
    window.speechSynthesis.speak(utterance);
}

function resetSteps() {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep = 0;
    document.getElementById(`step-${currentStep}`).classList.add('active');
    updateButtons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initial update to ensure correct language strings
updateUI();
