   const sites = [
      { title: "Vercel", description: "Hızlı ve verimli frontend platformu.", url: "https://vercel.com" },
      { title: "Dribbble", description: "Tasarımcılar için bir portföy ve keşif platformu.", url: "https://dribbble.com" },
      { title: "Awwwards", description: "En iyi web tasarımlarını ödüllendiren platform.", url: "https://awwwards.com" },
      { title: "CSS-Tricks", description: "Web geliştirme ve tasarım ipuçları.", url: "https://css-tricks.com" },
      { title: "Adobe Portfolio", description: "Adobe'nin sunduğu portföy oluşturma aracı.", url: "https://portfolio.adobe.com" },
      { title: "Behance", description: "Sanatçılar ve tasarımcılar için portföy platformu.", url: "https://behance.net" },
      { title: "CodePen", description: "Kod paylaşımı ve web tasarımı uygulamaları.", url: "https://codepen.io" },
      { title: "GitHub", description: "Açık kaynak projelerin paylaşıldığı platform.", url: "https://github.com" },
      { title: "Stack Overflow", description: "Geliştiriciler için soru-cevap platformu.", url: "https://stackoverflow.com" },
      { title: "MDN Web Docs", description: "Mozilla'nın web geliştirme dökümantasyonları.", url: "https://developer.mozilla.org" },
      { title: "Smashing Magazine", description: "Web tasarımı ve geliştirmeyle ilgili kaynaklar.", url: "https://smashingmagazine.com" },
      { title: "UX Design", description: "Kullanıcı deneyimi tasarımı kaynakları ve makaleler.", url: "https://uxdesign.cc" },
      { title: "Figma", description: "Web tabanlı tasarım ve prototipleme aracı.", url: "https://figma.com" },
      { title: "Canva", description: "Kullanıcı dostu grafik tasarım aracı.", url: "https://canva.com" },
      { title: "Webflow", description: "Kod yazmadan web tasarımı yapmanı sağlayan platform.", url: "https://webflow.com" },
      { title: "Trello", description: "Proje yönetimi ve görev takibi platformu.", url: "https://trello.com" },
      { title: "Notion", description: "Dijital not alma ve organizasyon platformu.", url: "https://notion.so" },
      { title: "Google Fonts", description: "Web için ücretsiz yazı tipleri.", url: "https://fonts.google.com" },
      { title: "Medium", description: "İçerik paylaşımı ve blog platformu.", url: "https://medium.com" },
      { title: "Envato Market", description: "Web tasarımı ve yazılım kaynakları platformu.", url: "https://envato.com" },
      { title: "W3Schools", description: "Web geliştirme öğrenmek için kapsamlı kaynak.", url: "https://w3schools.com" },
      { title: "Moz", description: "SEO ve dijital pazarlama araçları.", url: "https://moz.com" },
      { title: "Mailchimp", description: "E-posta pazarlama platformu.", url: "https://mailchimp.com" },
      { title: "Zapier", description: "İş akışlarını otomatikleştiren araç.", url: "https://zapier.com" },
      { title: "Shopify", description: "E-ticaret mağazası oluşturma platformu.", url: "https://shopify.com" },
      { title: "DigitalOcean", description: "Bulut sunucuları sağlayan platform.", url: "https://digitalocean.com" },
      { title: "Heroku", description: "Bulut platformu ve uygulama barındırma hizmeti.", url: "https://heroku.com" },
      { title: "WordPress", description: "Dünya çapında popüler içerik yönetim sistemi.", url: "https://wordpress.com" },
      { title: "Quora", description: "Soru-cevap platformu, kullanıcılar sorular sorar ve yanıtlar alır.", url: "https://quora.com" },
      { title: "LinkedIn", description: "Profesyonel ağ kurma ve iş arama platformu.", url: "https://linkedin.com" },
      { title: "Instagram", description: "Görsel ve video paylaşımı platformu.", url: "https://instagram.com" },
      { title: "Pinterest", description: "Fikir paylaşımı ve görsel keşif platformu.", url: "https://pinterest.com" },
      { title: "Reddit", description: "Haber ve topluluk platformu.", url: "https://reddit.com" },
      { title: "Twitter", description: "Kısa mesajlaşma ve haberleşme platformu.", url: "https://twitter.com" },
      { title: "Facebook", description: "Sosyal medya ve haberleşme platformu.", url: "https://facebook.com" },
      { title: "YouTube", description: "Video paylaşım ve yayın platformu.", url: "https://youtube.com" },
      { title: "Netflix", description: "Dijital film ve dizi akış platformu.", url: "https://netflix.com" },
      { title: "Spotify", description: "Müzik dinleme platformu.", url: "https://spotify.com" },
      { title: "Apple", description: "Teknolojik ürünler ve yazılımlar üreten firma.", url: "https://apple.com" },
      { title: "Amazon", description: "E-ticaret ve teknoloji şirketi.", url: "https://amazon.com" },
      { title: "werarew sheet", description: "tablo uyqulamas;", url: "https://theprocramer.github.io/werarew-sheet/" },
       { title: "werarew game engine", description: "create game oyun geliştirme", url: "https://theprocramer.github.io/werarew-game-engine" },
      { title: "Vercel", description: "A fast and efficient frontend platform.", url: "https://vercel.com" },
{ title: "Dribbble", description: "A portfolio and discovery platform for designers.", url: "https://dribbble.com" },
{ title: "Awwwards", description: "A platform that rewards the best web designs.", url: "https://awwwards.com" },
{ title: "CSS-Tricks", description: "Web development and design tips.", url: "https://css-tricks.com" },
{ title: "Adobe Portfolio", description: "Adobe's portfolio creation tool.", url: "https://portfolio.adobe.com" },
{ title: "Behance", description: "A portfolio platform for artists and designers.", url: "https://behance.net" },
{ title: "CodePen", description: "Code sharing and web design applications.", url: "https://codepen.io" },
{ title: "GitHub", description: "A platform for sharing open source projects.", url: "https://github.com" },
{ title: "Stack Overflow", description: "A question-and-answer platform for developers.", url: "https://stackoverflow.com" },
{ title: "MDN Web Docs", description: "Mozilla's web development documentation.", url: "https://developer.mozilla.org" },
{ title: "Smashing Magazine", description: "Resources for web design and development.", url: "https://smashingmagazine.com" },
{ title: "UX Design", description: "User experience design resources and articles.", url: "https://uxdesign.cc" },
{ title: "Figma", description: "Web-based design and prototyping tool.", url: "https://figma.com" },
{ title: "Canva", description: "User-friendly graphic design tool.", url: "https://canva.com" },
{ title: "Webflow", description: "A platform that lets you design websites without writing code.", url: "https://webflow.com" },
{ title: "Trello", description: "Project management and task tracking platform.", url: "https://trello.com" },
{ title: "Notion", description: "Digital note-taking and organization platform.", url: "https://notion.so" },
{ title: "Google Fonts", description: "Free fonts for the web.", url: "https://fonts.google.com" },
{ title: "Medium", description: "Content sharing and blogging platform.", url: "https://medium.com" },
{ title: "Envato Market", description: "Web design and software resource platform.", url: "https://envato.com" },
{ title: "W3Schools", description: "Comprehensive resource for learning web development.", url: "https://w3schools.com" },
{ title: "Moz", description: "SEO and digital marketing tools.", url: "https://moz.com" },
{ title: "Mailchimp", description: "Email marketing platform.", url: "https://mailchimp.com" },
{ title: "Zapier", description: "Workflow automating tool.", url: "https://zapier.com" },
{ title: "Shopify", description: "Platform for building e-commerce stores.", url: "https://shopify.com" },
{ title: "DigitalOcean", description: "Platform that provides cloud servers.", url: "https://digitalocean.com" },
{ title: "Heroku", description: "Cloud platform and application hosting service.", url: "https://heroku.com" },
{ title: "WordPress", description: "Worldwide popular content management system.", url: "https://wordpress.com" },
{ title: "Quora", description: "Question-answer platform, users ask questions and get answers.", url: "https://quora.com" },
{ title: "LinkedIn", description: "Professional networking and job search platform.", url: "https://linkedin.com" },
{ title: "Instagram", description: "Image and video sharing platform.", url: "https://instagram.com" },
{ title: "Pinterest", description: "Idea sharing and visual discovery platform.", url: "https://pinterest.com" },
{ title: "Reddit", description: "News and community platform.", url: "https://reddit.com" },
{ title: "Twitter", description: "Short messaging and communication platform.", url: "https://twitter.com" },
{ title: "Facebook", description: "Social media and communication platform.", url: "https://facebook.com" },
{ title: "YouTube", description: "Video sharing and broadcasting platform.", url: "https://youtube.com" },
{ title: "Netflix", description: "Digital movie and series streaming platform.", url: "https://netflix.com" },
{ title: "Spotify", description: "Music listening platform.", url: "https://spotify.com" },
{ title: "Apple", description: "A company that produces technological products and software.", url: "https://apple.com" },
{ title: "Amazon", description: "E-commerce and technology company.", url: "https://amazon.com" },
{ title: "werarew sheet", description: "table application", url: "https://theprocramer.github.io/werarew-sheet/" },
     
      ];

    const searchInput = document.getElementById("search");
    const results = document.getElementById("results");

    function displayResults(query) {
      results.innerHTML = "";
      const filteredSites = sites.filter(site => site.title.toLowerCase().includes(query.toLowerCase()) || site.description.toLowerCase().includes(query.toLowerCase()));

      if (filteredSites.length === 0) {
        results.innerHTML = "<p>Sonuç bulunamadı...</p>";
      } else {
        filteredSites.forEach(site => {
          const siteCard = document.createElement("div");
          siteCard.classList.add("site-card");
          siteCard.innerHTML = `
            <h2>${site.title}</h2>
            <p>${site.description}</p>
            <a href="${site.url}" target="_blank">Siteyi ziyaret et</a>
          `;
          results.appendChild(siteCard);
        });
      }
    }

    searchInput.addEventListener("input", (event) => {
      displayResults(event.target.value);
    });

    function toggleTheme() {
      document.body.classList.toggle("dark");
    }
