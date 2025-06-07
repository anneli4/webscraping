fetch('/api/scrape')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('comic-container');
    if (data.comics && data.comics.length > 0) {
      container.innerHTML = ''; 
      data.comics.forEach(comic => {
        const comicElem = document.createElement('div');
        comicElem.style.marginBottom = '20px';
        comicElem.innerHTML = `
          <h2>${comic.title}</h2>
          <img src="${comic.image}" alt="${comic.title}" style="max-width: 100%; height: auto;" />
        `;
        container.appendChild(comicElem);
      });
    } else {
      container.textContent = 'Koomikseid ei leitud.';
    }
  })
  .catch(err => {
    console.error('Viga andmete laadimisel:', err);
    const container = document.getElementById('comic-container');
    if (container) {
      container.textContent = 'Viga andmete laadimisel.';
    }
  });
