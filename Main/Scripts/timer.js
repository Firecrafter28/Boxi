// Timer
function timer(){
    var sec = 0; // Seconds
    var min = 0; // Minutes
    var hr  = 0; // Hours
    var timer = setInterval(function(){ // Set Timer To An Interval
        document.getElementById('TimerDisplay').innerHTML=hr + ":" + min + ":" + sec; // Set Time Display To Hours:Minutes:Seconds
        sec++; // Add 1 To Seconds Every 1000 Milliseconds
        if (sec > 60) { // If Seconds Is More Then 60
            sec = 0; // Set Seconds To 0
            min++ // Increase Minutes By 1
        }
        if (min > 60) { // If Minutes Is More Than 60
            min = 0; // Set Minutes To 0
            hr++ // Increase Hours By 1
        }
    }, 1000); // 1000 Milliseconds
}