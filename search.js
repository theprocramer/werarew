  let currentTheme = 'dark';

    function toggleTheme() {
      if (currentTheme === 'dark') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        currentTheme = 'light';
      } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        currentTheme = 'dark';
      }
    }

    // Burada statik verileri entegre ediyoruz
    const staticData = [
      {
        name: "AI-WERAREW AI",
        link: "",
        description: "AI"
      },
      {
        name: "Add Web Site - Werarew",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSePOaAtydT6o0xYTVBVm7mKtBFmcoWOrAeYCFw8RJsSEtIWUw/viewform?usp=dialog",
        description: "export site"
      },
      {
        name: "Web Game Engine - werarew Game Engine",
        link: "https://theprocramer.github.io/werarew-game-engine",
        description: "create game"
      },
      {
        name: "sheet-werarew sheet",
        link: "https://theprocramer.github.io/werarew-sheet",
        description: "sheet"
      }
    ];

    function displayResults() {
      const query = document.getElementById('searchBar').value.toLowerCase();
      const resultsList = document.getElementById('searchResultsList');
      resultsList.innerHTML = ''; // Önceki sonuçları temizle

      const filteredData = staticData.filter(item => item.name.toLowerCase().includes(query));

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

    // Arama yapılırken sonuçları listele
    function searchResults() {
      displayResults();
    }
