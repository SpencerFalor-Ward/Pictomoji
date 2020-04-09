
var queryURL = `https://www.emojidex.com/api/v1/utf_emoji`;
$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

    var emojiList = JSON.parse(response);
      creates an array of all emoji codes
    for (let i = 0; i < emojiList.length; i++) {
        emojiCodeArray.push(emojiList[i].unicode);
    };
    for (let i = 0; i < emojiList.length; i++) {
        emojiNameArray.push(emojiList[i].code);
    };
    for (let i = 0; i < emojiList.length; i++) {
        emojiCategoryArray.push(emojiList[i].category);
    };
});
 
