// window.setInterval(getCorrectQuestions, 3000)
getCorrectQuestions();
function getCorrectQuestions(){
    var data = $.ajax( {
        type: 'GET',     
        url: 'http://vp7.pythonanywhere.com/scrape/scrape_result/?format=json',
        data: {},
        success: function(data) {
            var obj = JSON.parse;
            var x = data;
            // now we need to add data of element key to keyth box
            // console.log(x)
            //array of all .mySlides
            var box = $(".mySlides")
            // console.log(box);
            for (var i = 0 ; i < box.length ; i++){
                // //url to a in box
                $("a.link").eq(i).attr("href",data[i].article_link);
                // console.log($("a.link").eq(i));

                // img in box
                $("a.link img").eq(i).attr("src",data[i].image_link);

                //text in newcontent in box
                $(".newscontent").eq(i).text(data[i].title);
                
            }


        }


    });
    return data;
}