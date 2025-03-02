// Statik veri listesi (Daha fazla site eklendi!)
const staticData = [
    { name: "Google", link: "https://www.google.com", description: "Dünyanın en popüler arama motoru.", keywords: ["arama", "internet", "bilgi", "search"] },
    { name: "YouTube", link: "https://www.youtube.com", description: "Video paylaşım platformu.", keywords: ["video", "müzik", "film", "eğitim"] },
    { name: "Wikipedia", link: "https://www.wikipedia.org", description: "Özgür ansiklopedi.", keywords: ["bilgi", "tarih", "ansiklopedi", "öğrenme"] },
    { name: "Twitter", link: "https://www.twitter.com", description: "Mikroblog platformu.", keywords: ["haber", "sosyal medya", "tweet", "gündem"] },
    { name: "Facebook", link: "https://www.facebook.com", description: "Dünyanın en büyük sosyal ağı.", keywords: ["sosyal", "arkadaş", "topluluk", "iletişim"] },
    { name: "Instagram", link: "https://www.instagram.com", description: "Fotoğraf ve video paylaşım platformu.", keywords: ["fotoğraf", "selfie", "görsel", "hikaye"] },
    { name: "Reddit", link: "https://www.reddit.com", description: "Topluluk tabanlı platform.", keywords: ["forum", "topluluk", "tartışma", "bilgi"] },
    { name: "GitHub", link: "https://www.github.com", description: "Kod paylaşım platformu.", keywords: ["kod", "yazılım", "programlama", "repo"] },
    { name: "Stack Overflow", link: "https://stackoverflow.com", description: "Yazılım geliştirme için soru-cevap platformu.", keywords: ["kod", "sorular", "hata", "programlama"] },
    { name: "LinkedIn", link: "https://www.linkedin.com", description: "İş ağı platformu.", keywords: ["iş", "kariyer", "cv", "bağlantı"] },
    { name: "Netflix", link: "https://www.netflix.com", description: "Dizi ve film izleme platformu.", keywords: ["film", "dizi", "eğlence", "stream"] },
    { name: "Amazon", link: "https://www.amazon.com", description: "E-ticaret devi, alışveriş yapın.", keywords: ["alışveriş", "e-ticaret", "market", "ürün"] },
    { name: "eBay", link: "https://www.ebay.com", description: "Açık artırma ve ikinci el ürün platformu.", keywords: ["alışveriş", "ikinci el", "pazar", "ürün"] },
    { name: "AliExpress", link: "https://www.aliexpress.com", description: "Çin merkezli online alışveriş sitesi.", keywords: ["alışveriş", "ucuz", "kargo", "indirim"] },
    { name: "Discord", link: "https://www.discord.com", description: "Sesli ve yazılı sohbet platformu.", keywords: ["sohbet", "topluluk", "gamer", "arkadaş"] },
    { name: "Telegram", link: "https://www.telegram.org", description: "Güvenli mesajlaşma uygulaması.", keywords: ["mesaj", "gizlilik", "şifreleme", "grup"] },
    { name: "WhatsApp", link: "https://www.whatsapp.com", description: "Popüler mesajlaşma uygulaması.", keywords: ["mesaj", "çağrı", "iletişim", "grup"] },
    { name: "Spotify", link: "https://www.spotify.com", description: "Müzik dinleme platformu.", keywords: ["müzik", "şarkı", "albüm", "playlist"] },
    { name: "SoundCloud", link: "https://www.soundcloud.com", description: "Bağımsız müzisyenler için platform.", keywords: ["müzik", "şarkı", "sanatçı", "prodüksiyon"] },
    { name: "Twitch", link: "https://www.twitch.tv", description: "Canlı yayın platformu.", keywords: ["oyun", "yayın", "stream", "esports"] },
    { name: "Steam", link: "https://store.steampowered.com", description: "Dijital oyun platformu.", keywords: ["oyun", "indirim", "store", "pc"] },
    { name: "Epic Games", link: "https://www.epicgames.com", description: "Ücretsiz oyunlar sunan platform.", keywords: ["oyun", "ücretsiz", "fortnite", "store"] },
    { name: "Udemy", link: "https://www.udemy.com", description: "Online eğitim platformu.", keywords: ["kurs", "öğrenme", "eğitim", "sertifika"] },
    { name: "Coursera", link: "https://www.coursera.org", description: "Üniversite destekli online eğitim.", keywords: ["eğitim", "ders", "sertifika", "öğrenme"] }
];

// Arama sonuçlarını gösteren fonksiyon
function displayResults() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const resultsList = document.getElementById('searchResultsList');
    resultsList.innerHTML = ''; // Önceki sonuçları temizle

    // Arama sorgusunu site adı, açıklama veya anahtar kelimelerde arayacak şekilde filtreleme
    const filteredData = staticData.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.keywords.some(keyword => keyword.includes(query))
    );

    if (filteredData.length > 0) {
        filteredData.forEach(result => {
            const li = document.createElement('li');
            li.classList.add('list-item');
            li.innerHTML = `
                <a href="${result.link}" target="_blank">${result.name}</a>
                <p>${result.description}</p>
            `;
            resultsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.textContent = 'Arama sonuçları bulunamadı.';
        resultsList.appendChild(li);
    }
}

// Arama sonuçlarını tetikleyen fonksiyon
function searchResults() {
    displayResults();
}
