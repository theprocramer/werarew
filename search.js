   const websites = [
      { name: "Trello", link: "https://www.trello.com", description: "Proje yönetimi ve işbirliği platformu.", keywords: ["proje yönetimi", "işbirliği", "görev", "takım"] },
      { name: "Asana", link: "https://www.asana.com", description: "Proje yönetimi ve görev takibi platformu.", keywords: ["proje yönetimi", "işbirliği", "görev", "takım"] },
      { name: "Slack", link: "https://www.slack.com", description: "Takım iletişimi ve işbirliği platformu.", keywords: ["takım", "iletişim", "işbirliği"] },
        { name: "Slack", link: "https://www.slack.com", description: "Takım iletişimi ve işbirliği platformu.", keywords: ["takım", "iletişim", "işbirliği"] },
    { name: "Monday.com", link: "https://www.monday.com", description: "Proje yönetimi ve işbirliği platformu.", keywords: ["proje yönetimi", "işbirliği", "görev", "takım"] },
    { name: "Basecamp", link: "https://www.basecamp.com", description: "Proje yönetimi ve takım iletişimi platformu.", keywords: ["proje yönetimi", "işbirliği", "görev", "takım"] },
    { name: "Notion", link: "https://www.notion.so", description: "Dijital not alma ve organizasyon platformu.", keywords: ["not", "organizasyon", "iş", "görev"] },
    { name: "Evernote", link: "https://www.evernote.com", description: "Not alma ve organizasyon platformu.", keywords: ["not", "organize", "iş", "görev"] },
    { name: "Google Drive", link: "https://www.drive.google.com", description: "Bulut tabanlı dosya depolama ve paylaşma platformu.", keywords: ["bulut", "dosya", "depolama", "paylaşım"] },
    { name: "Dropbox", link: "https://www.dropbox.com", description: "Bulut tabanlı dosya depolama ve paylaşma platformu.", keywords: ["bulut", "dosya", "depolama", "paylaşım"] },
    { name: "Box", link: "https://www.box.com", description: "Kurumsal bulut depolama platformu.", keywords: ["bulut", "depolama", "iş", "paylaşım"] },
    { name: "OneDrive", link: "https://www.onedrive.com", description: "Microsoft'un bulut depolama platformu.", keywords: ["bulut", "depolama", "dosya", "paylaşım"] },
    { name: "Google Photos", link: "https://www.photos.google.com", description: "Fotoğraf depolama ve paylaşma platformu.", keywords: ["fotoğraf", "depolama", "paylaşım", "bulut"] },
    { name: "Flickr", link: "https://www.flickr.com", description: "Fotoğraf paylaşımı ve depolama platformu.", keywords: ["fotoğraf", "paylaşım", "depolama", "sanat"] },
    { name: "500px", link: "https://www.500px.com", description: "Profesyonel fotoğraf paylaşım platformu.", keywords: ["fotoğraf", "paylaşım", "sanat", "portföy"] },
    { name: "Instagram", link: "https://www.instagram.com", description: "Fotoğraf ve video paylaşım platformu.", keywords: ["fotoğraf", "video", "paylaşım", "sosyal medya"] },
    { name: "Pinterest", link: "https://www.pinterest.com", description: "İlham almak için görsel paylaşım platformu.", keywords: ["görsel", "ilham", "paylaşım", "sanat"] },
    { name: "Snapchat", link: "https://www.snapchat.com", description: "Fotoğraf ve video paylaşımı üzerine kurulu sosyal medya platformu.", keywords: ["fotoğraf", "video", "paylaşım", "sosyal medya"] },
    { name: "TikTok", link: "https://www.tiktok.com", description: "Kısa video içerikleri paylaşma platformu.", keywords: ["video", "paylaşım", "sosyal medya", "müzik"] },
    { name: "Vimeo", link: "https://www.vimeo.com", description: "Video barındırma ve paylaşma platformu.", keywords: ["video", "paylaşım", "sanat", "film"] },
    { name: "YouTube", link: "https://www.youtube.com", description: "Video izleme ve paylaşma platformu.", keywords: ["video", "paylaşım", "eğlence"] },
    { name: "SoundCloud", link: "https://www.soundcloud.com", description: "Müzik dinleme ve paylaşma platformu.", keywords: ["müzik", "paylaşım", "dinleme"] },
    { name: "Spotify", link: "https://www.spotify.com", description: "Müzik dinleme platformu.", keywords: ["müzik", "dinleme", "paylaşım"] },
    { name: "Deezer", link: "https://www.deezer.com", description: "Müzik dinleme ve keşfetme platformu.", keywords: ["müzik", "dinleme", "keşfetme"] },
    { name: "Apple Music", link: "https://www.apple.com/music", description: "Müzik dinleme platformu.", keywords: ["müzik", "dinleme", "keşfetme"] },
    { name: "Bandcamp", link: "https://www.bandcamp.com", description: "Bağımsız sanatçılar için müzik paylaşım platformu.", keywords: ["müzik", "paylaşım", "bağımsız sanatçılar"] },
    { name: "Reddit", link: "https://www.reddit.com", description: "Topluluk tabanlı sosyal medya platformu.", keywords: ["forum", "topluluk", "paylaşım", "tartışma"] },
    { name: "Quora", link: "https://www.quora.com", description: "Soru ve cevap platformu.", keywords: ["soru", "cevap", "tartışma"] },
    { name: "Medium", link: "https://www.medium.com", description: "Yazı ve blog paylaşım platformu.", keywords: ["yazı", "blog", "paylaşım", "makale"] },
    { name: "Stack Overflow", link: "https://www.stackoverflow.com", description: "Programlama soruları ve cevapları platformu.", keywords: ["programlama", "soru", "cevap"] },
    { name: "GitHub", link: "https://www.github.com", description: "Yazılım geliştirme ve sürüm kontrol platformu.", keywords: ["yazılım", "geliştirme", "kod", "repo"] },
    { name: "GitLab", link: "https://www.gitlab.com", description: "Yazılım geliştirme ve DevOps platformu.", keywords: ["yazılım", "geliştirme", "DevOps"] },
    { name: "Bitbucket", link: "https://www.bitbucket.org", description: "Yazılım geliştirme ve sürüm kontrol platformu.", keywords: ["yazılım", "geliştirme", "kod", "repo"] },
    { name: "CodePen", link: "https://www.codepen.io", description: "Web tasarımı ve frontend geliştirme platformu.", keywords: ["web tasarımı", "frontend", "geliştirme"] },
    { name: "Replit", link: "https://www.replit.com", description: "Çevrimiçi kodlama ve yazılım geliştirme platformu.", keywords: ["yazılım", "geliştirme", "kodlama"] },
    { name: "Stack Exchange", link: "https://www.stackexchange.com", description: "Soru ve cevap platformları ağı.", keywords: ["soru", "cevap", "topluluk"] },
    { name: "HackerRank", link: "https://www.hackerrank.com", description: "Programlama alıştırmaları ve mülakat soruları platformu.", keywords: ["programlama", "alıştırma", "mülakat"] },
    { name: "LeetCode", link: "https://www.leetcode.com", description: "Kodlama ve algoritma çözme platformu.", keywords: ["kodlama", "algoritma", "test"] },
    { name: "Khan Academy", link: "https://www.khanacademy.org", description: "Eğitim videoları ve ders platformu.", keywords: ["eğitim", "ders", "video", "öğrenme"] },
    { name: "Coursera", link: "https://www.coursera.org", description: "Çevrimiçi kurslar ve eğitim platformu.", keywords: ["eğitim", "kurs", "öğrenme"] },
    { name: "Udemy", link: "https://www.udemy.com", description: "Çevrimiçi kurslar ve eğitim platformu.", keywords: ["eğitim", "kurs", "öğrenme"] },
    { name: "edX", link: "https://www.edx.org", description: "Üniversite düzeyinde çevrimiçi kurslar platformu.", keywords: ["eğitim", "üniversite", "kurs"] },
    { name: "Skillshare", link: "https://www.skillshare.com", description: "Çevrimiçi eğitim ve kurs platformu.", keywords: ["eğitim", "kurs", "öğrenme"] },
    { name: "Duolingo", link: "https://www.duolingo.com", description: "Dil öğrenme platformu.", keywords: ["dil", "öğrenme", "kurs"] },
    { name: "Tandem", link: "https://www.tandem.net", description: "Dil öğrenme ve pratik yapma platformu.", keywords: ["dil", "öğrenme", "pratik"] },
    { name: "Memrise", link: "https://www.memrise.com", description: "Dil öğrenme platformu.", keywords: ["dil", "öğrenme"] },
    { name: "Wolfram Alpha", link: "https://www.wolframalpha.com", description: "Bilgi sorgulama ve hesaplama motoru.", keywords: ["hesaplama", "bilgi", "sorgulama"] },
    { name: "Kaggle", link: "https://www.kaggle.com", description: "Veri bilimi yarışmaları ve veri setleri platformu.", keywords: ["veri", "bilim", "yarışma"] },
    { name: "Behance", link: "https://www.behance.net", description: "Tasarımcılar için portföy ve ilham platformu.", keywords: ["tasarım", "portföy", "ilham"] },
    { name: "Dribbble", link: "https://www.dribbble.com", description: "Tasarımcılar için görsel portföy platformu.", keywords: ["tasarım", "portföy", "görsel"] },
    { name: "Envato", link: "https://www.envato.com", description: "Dijital ürünler ve içerik satış platformu.", keywords: ["dijital", "ürün", "satış"] },
    { name: "Canva", link: "https://www.canva.com", description: "Grafik tasarım ve düzenleme platformu.", keywords: ["grafik", "tasarım", "düzenleme"] },
    { name: "Figma", link: "https://www.figma.com", description: "Çevrimiçi tasarım ve prototip oluşturma platformu.", keywords: ["tasarım", "prototip", "çevrimiçi"] },
    { name: "InVision", link: "https://www.invisionapp.com", description: "Tasarım prototipleme ve işbirliği platformu.", keywords: ["tasarım", "prototip", "işbirliği"] },
    { name: "GIMP", link: "https://www.gimp.org", description: "Ücretsiz açık kaynaklı grafik tasarım yazılımı.", keywords: ["grafik", "tasarım", "ücretsiz"] },
    { name: "Blender", link: "https://www.blender.org", description: "3D modelleme ve animasyon yazılımı.", keywords: ["3D", "modelleme", "animasyon"] },
    { name: "Autodesk", link: "https://www.autodesk.com", description: "Tasarım ve mühendislik yazılımı platformu.", keywords: ["tasarım", "mühendislik", "yazılım"] },
    { name: "Sketch", link: "https://www.sketch.com", description: "Web ve mobil tasarım yazılımı.", keywords: ["tasarım", "mobil", "web"] }
    ];

    function searchResults() {
      const query = document.getElementById("searchBar").value.toLowerCase();
      const results = websites.filter(website =>
        website.name.toLowerCase().includes(query) ||
        website.description.toLowerCase().includes(query) ||
        website.keywords.some(keyword => keyword.toLowerCase().includes(query))
      );

      const resultList = document.getElementById("searchResultsList");
      resultList.innerHTML = ""; // Temizleme

      if (results.length === 0) {
        document.getElementById("errorMessage").style.display = "block";
      } else {
        document.getElementById("errorMessage").style.display = "none";
        results.forEach(result => {
          const listItem = document.createElement("li");
          listItem.classList.add("list-item");

          listItem.innerHTML = `
            <a href="${result.link}" target="_blank">${result.name}</a>
            <p>${result.description}</p>
          `;

          resultList.appendChild(listItem);
        });
      }
    }

    function toggleTheme() {
      const body = document.body;
      body.classList.toggle("dark-theme");
      body.classList.toggle("light-theme");
    }
