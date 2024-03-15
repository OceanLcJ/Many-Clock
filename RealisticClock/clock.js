(function(){
    window.onload=initNumXY(200, 160, 40, 40);
    var hour_line = document.getElementById("hour-line");
    var minute_line = document.getElementById("minute-line");
    var second_line = document.getElementById("second-line");
    var date_info = document.getElementById("date-info");
    /*
    var week_day = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    */
    var week_day = [
        'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'
    ];
    var hour_time = document.getElementById("hour-time");
    var minute_time = document.getElementById("minute-time");
    var second_time = document.getElementById("second-time");
    function setTime(){
        var this_day = new Date();
        var hour = (this_day.getHours() >= 12) ?
            (this_day.getHours() - 12) : this_day.getHours();
        var minute = this_day.getMinutes();
        var second = this_day.getSeconds();
        var hour_rotate = (hour*30-90) + (Math.floor(minute / 12) * 6);
        var year = this_day.getFullYear();
        var month = ((this_day.getMonth() + 1) < 10 ) ?
            "0"+(this_day.getMonth() + 1) : (this_day.getMonth() + 1);
        var date = (this_day.getDate() < 10 ) ?
            "0"+this_day.getDate() : this_day.getDate();
        var day = this_day.getDay();
        hour_line.style.transform = 'rotate(' + hour_rotate + 'deg)';
        minute_line.style.transform = 'rotate(' + (minute*6 - 90) + 'deg)';
        second_line.style.transform = 'rotate(' + (second*6 - 90)+'deg)';
        date_info.innerHTML =
            year + "-" + month + "-" + date + " " + week_day[day];
        hour_time.innerHTML = (this_day.getHours() < 10) ?
            "0" + this_day.getHours() : this_day.getHours();
        minute_time.innerHTML = (this_day.getMinutes() < 10) ?
            "0" + this_day.getMinutes() : this_day.getMinutes();
        second_time.innerHTML = (this_day.getSeconds() < 10) ?
            "0" + this_day.getSeconds():this_day.getSeconds();
    }
    setInterval(setTime, 1000);
    function initNumXY(R, r, w, h){
        var numXY = [
            {
                "left" : R + 0.5 * r - 0.5 * w,
                "top" : R - 0.5 * r * 1.73205 - 0.5 * h
            },
            {
                "left" : R + 0.5 * r * 1.73205 - 0.5 * w,
                "top" : R - 0.5 * r - 0.5 * h
            },
            {
                "left" : R + r - 0.5 * w,
                "top" : R - 0.5 * h
            },
            {
                "left" : R + 0.5 * r * 1.73205 - 0.5 * w,
                "top" : R + 0.5 * r - 0.5 * h
            },
            {
                "left" : R + 0.5 * r - 0.5 * w,
                "top" : R + 0.5 * r * 1.732 - 0.5 * h
            },
            {
                "left" : R - 0.5 * w,
                "top" : R + r - 0.5 * h
            },
            {
                "left" : R - 0.5 * r - 0.5 * w,
                "top" : R + 0.5 * r * 1.732 - 0.5 * h
            },
            {
                "left" : R - 0.5 * r * 1.73205 - 0.5 * w,
                "top" : R + 0.5 * r - 0.5 * h
            },
            {
                "left" : R - r - 0.5 * w,
                "top" : R - 0.5 * h
            },
            {
                "left" : R - 0.5 * r * 1.73205 - 0.5 * w,
                "top" : R - 0.5 * r - 0.5 * h
            },
            {
                "left" : R - 0.5 * r - 0.5 * w,
                "top": R - 0.5 * r * 1.73205 - 0.5 * h
            },
            {
                "left" : R - 0.5 * w,
                "top" : R - r - 0.5 * h
            }
        ];
        var clock = document.getElementById("clock");
        for(var i = 1; i <= 12; i++){
            if(i%3 == 0) {
                clock.innerHTML += "<div class='clock-num em_num'>"+i+"</div>";
            } else {
                clock.innerHTML += "<div class='clock-num'>" + i + "</div>";
            }
        }
        var clock_num = document.getElementsByClassName("clock-num");
        for(var i = 0; i < clock_num.length; i++) {
            clock_num[i].style.left = numXY[i].left + 'px';
            clock_num[i].style.top = numXY[i].top + 'px';
        }
        for(var i = 0; i < 60; i++) {
            clock.innerHTML += "<div class='clock-scale'> " +
                "<div class='scale-hidden'></div>" +
                "<div class='scale-show'></div>" +
                "</div>";
        }
        var scale = document.getElementsByClassName("clock-scale");
        for(var i = 0; i < scale.length; i++) {
            scale[i].style.transform="rotate(" + (i * 6 - 90) + "deg)";
        }
    }
})();
