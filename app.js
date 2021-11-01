$( document ).ready(function() {
    $('#calc').click(function() {
        var watts = $('#watts').val();
        var eff = 0.24;
        var calsec = 4.186;
        var cal = watts / calsec / eff;
        var ans = 'KCal pour 10 min : '+(Math.round(cal*0.6))+'<br>'+'KCal pour 1h : '+(Math.round(cal*3.6));
        $('.answer').html(ans);
    });
});