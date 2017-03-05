$(document).ready(function() {

    var colors = ["#ff0000", "#00ff00", "#0000ff", "#472e32", "#2c3e50", "#342224"];

    var getQuote = function() {
        //通过api获得内容
        $.ajax({
            headers: {
                "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
            success: function(jsonResponse) {
                var json = JSON.parse(jsonResponse);
                var currentText = json.quote;
                var currentAuthor = json.author;

                console.log(currentText);
                console.log(currentAuthor);
                $('#twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentText + '" ' + currentAuthor));
                $('#weibo').attr('href', 'http://service.weibo.com/share/share.php?title=' + encodeURIComponent(currentText + currentAuthor));
                $('.content').animate({
                    opacity: 0
                }, 500, function() {
                    //quote隐藏动画完成后,调用回调函数
                    // 回调函数先添加内容,再改变颜色,最后显示(单线程执行)

                    $('.text span').text(currentText);
                    $('.author span').text(currentAuthor);
                    changeColor();

                    $(this).animate({
                        opacity: 1.0
                    }, 500);

                })

            }
        });

    };

    var changeColor = function() {
        //改变背景色和文本颜色
        //改变文本内容
        var colorIndex = Math.floor(Math.random() * colors.length);
        var color = colors[colorIndex] || "darkblue";
        $('html body').css({
            'backgroundColor': color,
            'color': color
        });
        $('.btn').css('backgroundColor', color);
    };
    //为newquote按钮绑定click事件
    $("#quote").on("click", function() {
        getQuote();
    });

});