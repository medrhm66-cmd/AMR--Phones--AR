// قاعدة بيانات متكاملة تحتوي على الشركات، الفئات، والهواتف بمواصفاتها ومزايا وعيوب
const phoneDatabase = {
    "سامسونج (Samsung)": {
        logo: "📱",
        phones: [
            {
                name: "Galaxy S24 Ultra",
                category: "فئة الهواتف الرائدة (Flagship)",
                specs: {
                    screen: "6.8 بوصة AMOLED (120Hz)",
                    processor: "Snapdragon 8 Gen 3",
                    camera: "خلفية رباعية 200+50+10+12 م.ب",
                    battery: "5000 ميللي أمبير (شحن 45 واط)",
                    storage: "256/512 جيجابايت مع 12 جيجا رام"
                },
                pros: ["أقوى أداء معالج حالياً", "قلم S-Pen مدمج ورائع للاستخدام", "دعم تحديثات نظام تصل لـ 7 سنوات", "شاشة ممتازة تحت أشعة الشمس"],
                cons: ["السعر مرتفع جداً", "سرعة الشحن ليست الأسرع مقارنة بالمنافسين الصينيين"]
            },
            {
                name: "Galaxy A55",
                category: "الفئة المتوسطة العالية (Mid-Range)",
                specs: {
                    screen: "6.6 بوصة Super AMOLED (120Hz)",
                    processor: "Exynos 1480",
                    camera: "خلفية ثلاثية 50+12+5 م.ب",
                    battery: "5000 ميللي أمبير (شحن 25 واط)",
                    storage: "128/256 جيجابايت مع 8 جيجا رام"
                },
                pros: ["خامات تصنيع زجاجية فخمة مقاومة للماء", "بطارية تدوم طويلاً", "دعم جيد للتحديثات"],
                cons: ["الشاحن غير مرفق في العلبة", "حواف الشاشة عريضة نسبياً"]
            },
            {
                name: "Galaxy S25 Ultra",
                category: "فئة الهواتف الرائدة (Flagship)",
                specs: {
                    screen: "6.9 بوصة AMOLED",
                    processor: "Snapdragon 8 Elite",
                    camera: "خلفية 200 ميجابكسل",
                    battery: "5000 ميللي أمبير",
                    storage: "256/512 جيجابايت"
                },
                pros: ["أداء معالج قوي جداً", "كاميرا ممتازة"],
                cons: ["السعر مرتفع"]
            }
        ]
    },
    "آبل (Apple)": {
        logo: "🍏",
        phones: [
            {
                name: "iPhone 15 Pro Max",
                category: "فئة الهواتف الرائدة (Flagship)",
                specs: {
                    screen: "6.7 بوصة Super Retina XDR (120Hz)",
                    processor: "Apple A17 Pro",
                    camera: "خلفية ثلاثية 48+12+12 م.ب",
                    battery: "4422 ميللي أمبير",
                    storage: "256/512GB/1TB مع 8 جيجا رام"
                },
                pros: ["إطار تيتانيوم يجعل الهاتف خفيف الوزن نسبياً", "أفضل تصوير فيديو في الهواتف الذكية", "أداء جبار في الألعاب الثقيلة"],
                cons: ["سعر باهظ جداً", "سرعة الشحن بطيئة مقارنة بعالم الأندرويد"]
            }
        ]
    },
    "شاومي (Xiaomi)": {
        logo: "⚡",
        phones: [
            {
                name: "Xiaomi 14 Ultra",
                category: "فئة الهواتف الرائدة (Flagship)",
                specs: {
                    screen: "6.73 بوصة AMOLED (120Hz)",
                    processor: "Snapdragon 8 Gen 3",
                    camera: "كاميرات Leica احترافية بدقة 50 م.ب",
                    battery: "5000 ميللي أمبير (شحن سريع 90 واط)",
                    storage: "512 جيجا / 1 تيرابايت مع 16 جيجا رام"
                },
                pros: ["قدرات تصوير خارقة بشراكة مع لايكا", "شاحن صاروخي 90 واط مرفق بالعلبة", "أداء مذهل وذاكرة عشوائية ضخمة"],
                cons: ["واجهة النظام تحتوي على إعلانات أحياناً", "بارز جداً لمنطقة الكاميرات الخلفية"]
            }
        ]
    },
    "Google Pixel": {
        logo: "📱",
        phones: [
            {
                name: "Google Pixel 8 Pro",
                category: "فئة الهواتف الرائدة (Flagship)",
                specs: {
                    screen: "6.7 بوصة OLED (120Hz)",
                    processor: "Google Tensor G3",
                    camera: "خلفية رباعية 50 + 48 + 48 ميجابكسل",
                    battery: "5050 ميللي أمبير (شحن 30 واط)",
                    storage: "128 / 256 / 512 جيجابايت مع 12 جيجا رام"
                },
                pros: [
                    "شاشة ممتازة جداً تحت أشعة الشمس",
                    "دعم تحديثات نظام تصل إلى 7 سنوات",
                    "كاميرات احترافية مع مميزات ذكاء اصطناعي"
                ],
                cons: [
                    "سرعة الشحن ليست الأسرع مقارنة بالمنافسين",
                    "السعر مرتفع نسبياً عند الإطلاق"
                ]
            }
        ]
    }
}
// عناصر واجهة المستخدم
const companiesSection = document.getElementById('companies-section');
const phonesSection = document.getElementById('phones-section');
const detailsSection = document.getElementById('details-section');

const companiesGrid = document.getElementById('companies-grid');
const phonesGrid = document.getElementById('phones-grid');
const phoneDetailsCard = document.getElementById('phone-details-card');
const companyTitle = document.getElementById('company-title');
const searchInput = document.getElementById('searchInput');

// 1. عرض الشركات في الصفحة الرئيسية
function renderCompanies() {
    companiesGrid.innerHTML = '';
    for (let companyName in phoneDatabase) {
        const companyData = phoneDatabase[companyName];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="font-size: 40px; margin-bottom: 10px;">${companyData.logo}</div>
            <h3>${companyName}</h3>
            <p>يحتوي على ${companyData.phones.length} هواتف متاحة</p>
            <span class="badge">استعرض الفئات والهواتف</span>
        `;
        card.onclick = () => renderPhones(companyName);
        companiesGrid.appendChild(card);
    }
}
// 2. عرض الهواتف والفئات الخاصة بالشركة المحددة
function renderPhones(companyName) {
    companiesSection.classList.add('hidden');
    phonesSection.classList.remove('hidden');
    detailsSection.classList.add('hidden');
    companyTitle.innerText = `هواتف شركة ${companyName}`;
    phonesGrid.innerHTML = '';

    const phonesList = phoneDatabase[companyName].phones;
    phonesList.forEach((phone, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${phone.name}</h3>
            <span class="badge">${phone.category}</span>
            <p style="margin-top: 15px;">انقر لعرض المواصفات والمزايا والعيوب 🔍</p>
        `;
        card.onclick = () => renderPhoneDetails(companyName, index);
        phonesGrid.appendChild(card);
    });
}

// 3. عرض المواصفات الكاملة، المزايا، والعيوب لهاتف معين
function renderPhoneDetails(companyName, phoneIndex) {
    phonesSection.classList.add('hidden');
    detailsSection.classList.remove('hidden');

    const phone = phoneDatabase[companyName].phones[phoneIndex];

    phoneDetailsCard.innerHTML = `
        <h2>${phone.name}</h2>
        <span class="badge">${phone.category}</span>
        
        <div class="specs-grid">
            <div class="spec-item">
                <span>الشاشة</span>
                <strong>${phone.specs.screen}</strong>
            </div>
            <div class="spec-item">
                <span>المعالج</span>
                <strong>${phone.specs.processor}</strong>
            </div>
            <div class="spec-item">
                <span>الكاميرات</span>
                <strong>${phone.specs.camera}</strong>
            </div>
            <div class="spec-item">
                <span>البطارية والشحن</span>
                <strong>${phone.specs.battery}</strong>
            </div>
            <div class="spec-item">
                <span>الذاكرة والتخزين</span>
                <strong>${phone.specs.storage}</strong>
            </div>
        </div>

        <div class="pros-cons-container">
            <div class="box-pros">
                <h4>✅ المزايا والإيجابيات</h4>
                <ul>
                    ${phone.pros.map(pro => `<li>${pro}</li>`).join('')}
                </ul>
            </div>
            <div class="box-cons">
                <h4>❌ العيوب والسلبيات</h4>
                <ul>
                    ${phone.cons.map(con => `<li>${con}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// أزرار التنقل للخلف
function goBackToCompanies() {
    phonesSection.classList.add('hidden');
    companiesSection.classList.remove('hidden');
}

function goBackToPhones() {
    detailsSection.classList.add('hidden');
    phonesSection.classList.remove('hidden');
}

// ميزة البحث السريع عن الهواتف
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    if (term === '') {
        renderCompanies();
        return;
    }

    companiesSection.classList.remove('hidden');
    phonesSection.classList.add('hidden');
    detailsSection.classList.add('hidden');

    companiesGrid.innerHTML = '';
    let found = false;

    for (let companyName in phoneDatabase) {
        const matchedPhones = phoneDatabase[companyName].phones.filter(p => p.name.toLowerCase().includes(term));
        if (matchedPhones.length > 0 || companyName.toLowerCase().includes(term)) {
            found = true;
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${companyName}</h3>
                <p>نتائج مطابقة للبحث</p>
                <span class="badge">اضغط لعرض الهواتف</span>
            `;
            card.onclick = () => renderPhones(companyName);
            companiesGrid.appendChild(card);
        }
    }

    if (!found) {
        companiesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #94a3b8;">عذراً، لم يتم العثور على نتائج تطابق "${term}"</p>`;
    }
});

// بدء التشغيل
renderCompanies();