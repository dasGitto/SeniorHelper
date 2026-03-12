let currentStep = 0;
const totalSteps = 6;
let currentLang = 'km'; // Default to Khmer

const translations = {
    km: {
        mainTitle: "សាច់មាន់ស៊ូវឡាគី",
        subTitle: "រសជាតិដើមបែប Jimmy The Greek",
        ingredientsTitle: "គ្រឿងផ្សំ (គ្រឿងសម្ងាត់)",
        ingredients: [
            "សាច់មាន់ (ទ្រូង ឬភ្លៅ បកស្បែក)",
            "អង្ករ (គ្រាប់វែង ឬបាសម៉ាទី) សម្រាប់បាយក្រូចឆ្មា",
            "ប្រេងអូលីវគុណភាពខ្ពស់ និងក្រូចឆ្មាស្រស់",
            "ខ្ទឹមស, ស្លឹកអូរីហ្គាណូ, ថាម (Thyme) និងប៉ាព្រីកា",
            "នំបុ័ងពីតា និងទឹកជ្រលក់ត្សាត្ស៊ីគី (Tzatziki)"
        ],
        startLabel: "ត្រៀមខ្លួនសម្រាប់រសជាតិមេឌីទែរ៉ាណេពិតៗ? ↓",
        steps: [
            { 
                title: "១. ការជ្រើសរើស និងរៀបចំសាច់", 
                desc: "ហាន់សាច់មាន់ជាដុំៗឱ្យប៉ុនៗគ្នាបំផុត។ នេះគឺជាអាថ៌កំបាំងដើម្បីឱ្យសាច់ទាំងអស់ឆ្អិនស្មើគ្នា និងរក្សាភាពទន់ល្មើយ។" 
            },
            { 
                title: "២. ការធ្វើទឹកម៉ារីណាតដ៏អស្ចារ្យ", 
                desc: "លាយប្រេងអូលីវ, ទឹកក្រូចឆ្មា, ខ្ទឹមសចិញ្ច្រាំ, អូរីហ្គាណូ, ថាម និងប៉ាព្រីកា។ វាស់ឱ្យត្រូវចំណុះ រួចកូរឱ្យសព្វរហូតដល់ឡើងក្លិនឈ្ងុយ។" 
            },
            { 
                title: "៣. ការត្រាំឱ្យចូលជាតិ (សំខាន់!)", 
                desc: "ចាក់ទឹកម៉ារីណាតលើសាច់ រួចច្របល់ឱ្យសព្វ។ ទុកក្នុងទូទឹកកកយ៉ាងតិច ៣០ នាទី។ កាន់តែយូរ កាន់តែឈ្ងុយដល់ក្នុងសាច់!" 
            },
            { 
                title: "៤. បច្ចេកទេសដោតសាច់", 
                desc: "ប្រសិនបើប្រើឈើដោត ត្រូវត្រាំទឹក ៣០ នាទីមុន។ ដោតសាច់ឆ្លាស់ជាមួយម្ទេសប្លោក និងខ្ទឹមបារាំង ដើម្បីបង្កើនសម្រស់ និងរសជាតិ។" 
            },
            { 
                title: "៥. ការអាំង និងត្រួតពិនិត្យសីតុណ្ហភាព", 
                desc: "អាំងលើកម្ដៅមធ្យម-ខ្ពស់ ១០-១២ នាទី។ ត្រូវប្រាកដថាសាច់ឆ្អិនដល់ ១៦៥°F (៧៤°C) ដើម្បីធានាសុវត្ថិភាព និងភាពឆ្ងាញ់។" 
            },
            { 
                title: "៦. ជំហានចុងក្រោយ និងការរៀបចំ", 
                desc: "ទុកសាច់ឱ្យសម្រាកប៉ុន្មាននាទីសិន។ បន្ថែមស្លឹកជីវ៉ាន់ស៊ុយស្រស់ និងប្រេងអូលីវពីលើ។ រៀបជាមួយបាយក្តៅៗ និងទឹកជ្រលក់!" 
            }
        ],
        back: "ថយក្រោយ",
        next: "បន្ទាប់",
        start: "ចាប់ផ្តើមធ្វើភ្លាម",
        finish: "បញ្ចប់ការធ្វើ",
        audioBtn: "🔊 អានឱ្យស្តាប់",
        footer: "ដកស្រង់ចេញពីអាថ៌កំបាំងដ៏ល្បីរបស់ Jimmy The Greek"
    },
    en: {
        mainTitle: "Chicken Souvlaki",
        subTitle: "Authentic Jimmy The Greek Style",
        ingredientsTitle: "The Essential Ingredients",
        ingredients: [
            "Quality Chicken (Breast or Thigh)",
            "Long-grain or Basmati Rice",
            "Extra Virgin Olive Oil & Fresh Lemons",
            "Garlic, Oregano, Thyme, & Paprika",
            "Pita Bread & Tangy Tzatziki Sauce"
        ],
        startLabel: "Ready to transport your taste buds to Greece? ↓",
        steps: [
            { 
                title: "1. The Art of Prep", 
                desc: "Cut the chicken into perfectly consistent cubes. This 'secret' ensures every piece cooks evenly and stays incredibly succulent." 
            },
            { 
                title: "2. Crafting the Symphony", 
                desc: "Whisk olive oil, lemon juice, garlic, and herbs until fragrant. This blend is the soul of the authentic Greek flavor profile." 
            },
            { 
                title: "3. Marination Mastery", 
                desc: "Submerge the chicken fully. Chill for at least 30 minutes. The longer it rests, the deeper the aromatic flavors will penetrate." 
            },
            { 
                title: "4. Skewering Nuances", 
                desc: "If using wood, soak skewers for 30 minutes to prevent burning. Alternate chicken with colorful peppers and onions for the best result." 
            },
            { 
                title: "5. Grilling to Perfection", 
                desc: "Grill over medium-high heat for 10-12 mins. Aim for an internal temp of 165°F (74°C) to ensure it's safe and juicy." 
            },
            { 
                title: "6. The Final Flourish", 
                desc: "Let the meat rest for 5 minutes! Garnish with fresh parsley, lemon juice, and a drizzle of oil before serving over fluffy rice." 
            }
        ],
        back: "Go Back",
        next: "Next Detail",
        start: "Reveal Secrets",
        finish: "Done!",
        audioBtn: "🔊 Read Aloud",
        footer: "Based on the famous secrets of Jimmy the Greek"
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
