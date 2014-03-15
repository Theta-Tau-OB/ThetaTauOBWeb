function load(el,url,resource) {
    $.get(resource, function(data) {
        $(el).html(data)
    })
}
var paths = {
    '/':{'fn':load,'arg':'content/about.html'},
    'about':{'fn':load, 'arg':'content/about.html'},
    'contact':{'fn':load, 'arg':'content/contact.html'},
    'events':{'fn':load, 'arg':'content/events.html'},
    'members':{'fn':loadMembers, 'arg':'content/members.json'}
}

function router() {
    var url = location.hash.slice(1) || '/';
    paths[url].fn('#content',url,paths[url].arg)
}
