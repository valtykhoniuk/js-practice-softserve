// Знайдіть теги <div>, які стоять безпосередньо після <h3>
// і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.

// Завдання виділене вставкою Task3

$(document).ready(function () {
  $(".elements-direction h3 + div").each(function () {
    $(this).insertBefore($(this).prev());
  });
});
