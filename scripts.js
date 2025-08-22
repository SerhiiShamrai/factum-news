let offset = 0;
 const slider = document.querySelector(".slider-line");
 const bigNews = document.querySelector('.big-news');

document.querySelector(".slider-next").addEventListener('click', function () {
     bigNews.innerHTML = '<div class="container">\n' +
         '          <img\n' +
         '            src="img/bunker_putin.jpg"\n' +
         '            alt="Бункер"\n' +
         '            title="Застряг"\n' +
         '          />\n' +
         '          <h2>Диктатор заблокував себе в бункері через оновлення Windows</h2>\n' +
         '          <p>\n' +
         '            У ніч на п’ятницю, під час планового перегляду архівних відео з самим собою, путін випадково натиснув «Оновити та перезавантажити» на старому ноутбуці з Windows Vista. Система зависла, а двері бункера — автоматично заблокувалися через інтеграцію з Microsoft SmartLock™.\n' +
         '          </p>\n' +
         '        </div>';
});

document.querySelector('.slider-previous').addEventListener('click', function () {
    bigNews.innerHTML = '<div class="container">\n' +
        '          <img\n' +
        '            src="img/tramp_dissapointed.jpg"\n' +
        '            alt="Трамп"\n' +
        '            title="Розчарований"\n' +
        '          />\n' +
        '          <h2>Трамп заявив, що дуже розчарований війною в Україні</h2>\n' +
        '          <p>\n' +
        '            "Я чесно кажу — думав, буде красиво. Дрони, лазери, вибухи — все як\n' +
        '            у кіно. А тут — багно, санкції, якісь нудні брифінги, і Зеленський\n' +
        '            постійно в худі. Ну не серйозно", — заявив Трамп під час інтерв’ю\n' +
        '            телеканалу Fox Dream.\n' +
        '          </p>\n' +
        '        </div>';
});

