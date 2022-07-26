# vue-test-task
2022 Иван Каширин. Тестовое задание на Vue, Tailwind, Axios, OpenLibrary, SheetJS

https://frontend200tb.github.io/vue-test-task/

## Решение
https://codesandbox.io/s/vue-test-task-kgymy5

## Тестовое задание 
По ссылке https://codesandbox.io/s/vue-test-task-origin-9e2bom находится тестовый проект, который запрашивает книги по API и выдает на экран массив.

Задачи:
1. Форкнуть проект на codesandbox (кнопка на верхней панели)
2. Сверстать результат выдачи, в формате Обложка, Название, Авторы (Обложку можно получить используя первое значение массива isbn объекта книги, подставив это значение в адрес https://covers.openlibrary.org/b/isbn/XXXXXXXX-M.jpg)
3. Создать кнопку переключения порядка сортировки по алфавиту. A-Z, Z-A по полю title.
4. Создать input для ввода текста и кнопку «Загрузить». По нажанию кнопки «Загрузить» сделать запрос к API https://openlibrary.org/search.json?q=XXXXXXX. Обновить список книг.
5. Сделать кнопку выгрузить в Excel. По нажатию на кнопку должен скачаться файл формата xlsx, следующего вида (с соблюдением выравнивания) с результатами выборки:

№ |	Автор	Имя	Фамилия | Название книги	| Год публикации

			

6. Прислать нам ссылку на рабочий проект на codesandbox (кнопка на верхней панели)


## Дополнительно:

Было бы неплохо, если бы верстка была выполнена с помощью CSS-фреймворка Tailwind
(https://v2.tailwindcss.com/docs/installation#using-tailwind-via-cdn)


Документация OpenLib API:
1. https://openlibrary.org/dev/docs/api/search
2. https://openlibrary.org/dev/docs/api/covers

Ресурсы в помощь и для ознакомления:
1. https://ru.vuejs.org/v2/guide/
2. https://github.com/axios/axios
3. https://v2.tailwindcss.com/docs
4. https://github.com/SheetJS/sheetjs
5. https://github.com/gitbrent/xlsx-js-style
6. https://docs.sheetjs.com/docs
