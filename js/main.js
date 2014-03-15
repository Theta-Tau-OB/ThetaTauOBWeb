function load(el,url,callback,resource) {
    $.get(resource, function(data) {
        $(el).html(data)
        callback()
    })
}
var paths = {
    '/':{'fn':load,'arg':'content/about.html'},
    'about':{'fn':load, 'arg':'content/about.html'},
    'contact':{'fn':load, 'arg':'content/contact.html'},
    'events':{'fn':load, 'arg':'content/events.html'},
    'members':{'fn':loadMembers, 'arg':'content/members.json'}
}

function router(callback) {
    var url = location.hash.slice(1) || '/';
    paths[url].fn('#content',url,callback,paths[url].arg)
}

function makeemails() {
    $('.umdthetatauemail').each(function(i) {
        $(this).html($(this).html() + '@umdthetatau.org')
    })
}
