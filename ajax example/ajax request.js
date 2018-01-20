$(document).ready(function() {
    var url = 'https://hn.algolia.com/api/v1/search?query=javascript';

    $.getJSON(url, function(data) {
        var allNews = data.hits; // 20 hits
        console.log(allNews);
        var eachNews = '';

        allNews.map(function(item, index, array) {
            $('.question').on('click', function() {
                eachNews += '<div>';
                eachNews += item.title;
                eachNews += '</div>';
                $('.answer').html(eachNews);
            });
        });
    });
});
