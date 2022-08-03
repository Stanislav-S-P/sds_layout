function onToggle(event) {
    if (event.target.open) {
      document.querySelectorAll(".services__info > details[open]").forEach((el) => {
        // Исключаем из перебора елемент который мы только что открыли
        if (el === event.target) {
          return;
        }

        // Закрываем все остальные елементы <details>
        el.open = false;
      });
    }
  }

  // Вешаем наблюдатель на все елементы <details> внутри акордиона
  document
    .querySelectorAll(".services__info > details")
    .forEach((el) => el.addEventListener("toggle", onToggle));

function onToggletwo(event) {
  if (event.target.open) {
  document.querySelectorAll(".dop__item > details[open]").forEach((el) => {
    if (el === event.target) {
      return;
    }

          // Закрываем все остальные елементы <details>
          el.open = false;
        });
      }
    }

    // Вешаем наблюдатель на все елементы <details> внутри акордиона
    document
      .querySelectorAll(".dop__item > details")
      .forEach((el) => el.addEventListener("toggle", onToggletwo));


