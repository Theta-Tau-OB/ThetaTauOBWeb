
function loadFacebookFeed(el) {
    $.getJSON('http://www.facebook.com/feeds/page.php?id=99562085277&format=json',function(data) {
        $(el).html(JSON.stringify(data));
    });
}
