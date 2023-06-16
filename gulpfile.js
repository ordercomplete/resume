const gulp = require('gulp');
const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
var concat = ('gulp-concat');




task('templates', function (done) {
    src('src/**/*.hbs')
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'MyApp.templates',
            noRedeclare: true // Avoid duplicate declarations Уникайте дублікатів декларацій
        }))
        .pipe(dest('build/js/'))
    done();
});



// Задача для опрацювання стилів
task('styles', function () {
    return src('public/css/**/*.css') // збираємо CSS файли з папки src/container і всіх вкладених папок
        .pipe(concat('index.css')) // збираємо усі файли в один
        .pipe(dest('dist/css')) // зберігаємо новий файл у папку dist/css
});

// Задача для спостереження за змінами
task('watch', function (done) {
    watch('public/css/**/*.css', series('styles')) // вкаємо задачу styles після змін CSS файлів у папці src/container
    done();
});