$( document ).ready(function() {
    $('#calc').click(function() {
        var watts = $('#watts').val();
        var minutes = $('#minutes').val();
        var heures = Math.floor(minutes/60);
        minutes = minutes - heures*60;
        var eff = 0.24;
        var calsec = 4.186;
        var kcalmin = watts / calsec / eff / 1000 * 60;
        var time = minutes+' min';
        if(heures>0){
            time = heures+'h'+minutes+'min';
            if(minutes==0) {
                time = heures+'h';
            }
        }
        var ans = 'KCal pour '+time+' : '+(Math.round(kcalmin*heures*60+kcalmin*minutes))+' KCal';
        $('.answer').html(ans);
    });
});