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
     
