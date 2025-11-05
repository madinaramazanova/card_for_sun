// TUT VOOBSHE TO VIBE CODING, NE SUDI STROGO YA UCHILAS MESYATS CHTO BY SDELAT ETO


  const musicBox = document.getElementById("musicBox");
  const music = document.getElementById("bgMusic");
  musicBox.addEventListener("click", () => {
    music.play();
  });


const scenes = document.querySelectorAll('.scene');

scenes.forEach((scene) => {
  const triggers = scene.querySelectorAll('.trigger');

  triggers.forEach(trigger => {
    const popWords = trigger.classList.contains('pop') ? [
  "Уверенный",
  "Спокойный",
  "Надёжный",
  "Целеустремлённый",
  "Внимательный",
  "Честный",
  "Мягкий",
  "Сильный",
  "Настоящий",
  "Умный",
  "Собранный",
  "Глубокий",
  "Уравновешенный",
  "Альфа",
  "Стойкий",
  "Искренний",
  "Харизматичный",
  "Зрелый",
  "Решительный",
  "Заботливый",
  "Интересный",
  "Трудолюбивый",
  "Сдержанный",
  "Верный",
  "Мудрый",
  "Терпеливый",
  "Настойчивый",
  "Сексуальный",
  "Высокий",
  "Выразительный",
  "Подтянутый",
  "Ухоженный",
  "Аккуратный",
  "Стильный",
  "Привлекательный",
  "Светлый",
  "Соблазнительный",
  "Мужественный",
  "Ладный",
  "Ухмыльчивый",
  "Притягательный",
  "Рациональный",
  "Стратег",
  "Аналитик",
  "Хороший",
  "Целенаправленный",
  "Вызываешь течку",
  "Лидер по натуре",
  "Боженька",
  "Солнышко",
  "Самый Лучший \n(последнее)"
]
 : [];
    let wordIndex = 0;

    trigger.addEventListener('click', () => {
      if (popWords.length > 0 && wordIndex < popWords.length) {
        const wordEl = document.createElement('div');
        wordEl.classList.add('pop-word');
        wordEl.textContent = popWords[wordIndex];

        const randomX = (Math.random() - 0.5) * 200; // px
        const randomY = (Math.random() - 0.5) * 200; // px
        wordEl.style.setProperty('--x', `${randomX}px`);
        wordEl.style.setProperty('--y', `${randomY}px`);

        document.body.appendChild(wordEl);

        setTimeout(() => wordEl.remove(), 2000);

        wordIndex++;
        return; 
      }


      scene.classList.remove('active');

      let nextScene;

      function findNextAfterCurrent(className) {
        let next = scene.nextElementSibling;
        while (next) {
          if (next.classList.contains(className)) return next;
          next = next.nextElementSibling;
        }
        return null;
      }

      if (trigger.classList.contains('OptOne')) {
        nextScene = findNextAfterCurrent('ResOne');
      } else if (trigger.classList.contains('OptTwo')) {
        nextScene = findNextAfterCurrent('ResTwo');
      } 

      else if (scene.classList.contains('ResOne') || scene.classList.contains('ResTwo')) {
        let next = scene.nextElementSibling;
        while (next && (next.classList.contains('ResOne') || next.classList.contains('ResTwo'))) {
          next = next.nextElementSibling; // skip other Res scenes
        }
        nextScene = next;
      } 

      else {
        nextScene = scene.nextElementSibling;
      }

      if (nextScene) nextScene.classList.add('active');

    });
  });
});