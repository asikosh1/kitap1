(() => {
    const TOTAL = 5;
    let current = 1;

    const img = document.getElementById('page-img');
    const counter = document.getElementById('counter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function render() {
      img.src = `images/${current}.jpg`;
      img.alt = `Бет ${current}`;
      counter.textContent = `${current}/${TOTAL}`;
      prevBtn.disabled = current === 1;
      nextBtn.disabled = current === TOTAL;
    }

    prevBtn.addEventListener('click', () => { if(current > 1) { current--; render(); } });
    nextBtn.addEventListener('click', () => { if(current < TOTAL) { current++; render(); } });

    // Пернетақтамен де ауыстыру
    document.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowLeft' && current > 1) { current--; render(); }
      if(e.key === 'ArrowRight' && current < TOTAL) { current++; render(); }
    });

    render();
  })();