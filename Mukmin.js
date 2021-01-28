var dbRef = new Firebase("https://mukminun.firebase.com/");
var chatsRef = dbRef.child('chats');
chatsRef.on("child_added", function(snap) {
    console.log("added", snap.key(), snap.val());
    document.querySelector('#message_box').innerHTML +=(chatHtmlFromobject(snap.val()))
});
function chatHtmlFromobject(chat){
    console.log(chat);
    var bubble = (chat.name == document.querySelector('#name').value ? "bubble-right" : "bubble-left");
    var html = '<div class="'+ bubble + '"><p><span class="name">' + chat.name + '</span><span class="mgsc">' + chat.message + '</span><span class"date">'+ chat.date + '</span></p></div>;
    return html;
}
