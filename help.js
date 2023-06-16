$(function () {
    $('.alert').each(function () {
        var alertText = $(this).text();
        var textLength = alertText.length;

        var width = Math.max(200, textLength * 10);
        var height = Math.max(100, textLength / 10 * 20);

        $(this).css({ width: width + 'px', height: height + 'px' });
    });
});