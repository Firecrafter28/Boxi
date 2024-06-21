# Help Menu

## Controls

|Key|Function|
|:-:|:------:|
|A / Left Arrow|Move Left|
|W / Up Arrow|Move Forwards|
|D / Right Arrow|Move Right|
|S / Down Arrow|Move Down|
|-|Switch To Light Mode|
|=|Switch To Dark Mode|
|1|Switch To Face 1 (With Mouth)|
|2|Switch To Face 2 (Without Mouth)|
|3|Switch To No Face|
|[|Go Back One Color|
|]|Go Forwards One Color|
|R|Restart|

## How To Play

> Using the controls mentioned above you can move around, by running into the box you push it. The goal of the game is to move the box to the goal (the black and white checkerboard) which adds 1 to your score. see how high of a score you can get! You can change between dark and light mode with the buttons in the top left corner, and the button in the top right to restart. Have Fun!
--

## Changelog
> ### Version 0.6 (Latest)

>> Design Changes And Javascript Organization

> - Added A Glow Effect To Lots Of Things
`filter: drop-shadow(0 0 0.8rem aqua);`
> - Split Javascript Up Among Files:
```
colors.js
controls.js
coordvars.js
faces.js
gamescript.js
loadelements.js
loadimages.js
loadsounds.js
modes.js
movement.js
random.js
reset.js
score.js
start.js
stretch.js
timer.js
update.js
```
```
<!-- Scripts -->
<script src="Scripts/colors.js"></script>
<script src="Scripts/controls.js"></script>
<script src="Scripts/coordvars.js"></script>
<script src="Scripts/faces.js"></script>
<script src="Scripts/gamescript.js"></script>
<script src="Scripts/loadelements.js"></script>
<script src="Scripts/loadimages.js"></script>
<script src="Scripts/loadsounds.js"></script>
<script src="Scripts/modes.js"></script>
<script src="Scripts/movement.js"></script>
<script src="Scripts/progressbar.js"></script>
<script src="Scripts/random.js"></script>
<script src="Scripts/reset.js"></script>
<script src="Scripts/score.js"></script>
<script src="Scripts/start.js"></script>
<script src="Scripts/stretch.js"></script>
<script src="Scripts/timer.js"></script>
<script src="Scripts/update.js"></script>
```

> ### Version 0.5

>> A Bunch Of Bugfixes And Additions. This Update Is The Biggest So Far, So Get Ready!

> - Updated Method Of Version Numbering
> - Changed Changelog Scrollbar Style Now That It Is Long Enough To Be Visible:
```
/**** Scrollbar ****/

/* Width */
::-webkit-scrollbar {

    /* Width */
    width: 10px;
}
    
/* Track */
::-webkit-scrollbar-track {

    /* Color */
    background: rgb(21,21,21);
}

/* Handle */
::-webkit-scrollbar-thumb {

    /* Color */
    background: aqua;
}
  
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {

    /* Color */
    background: aquamarine;
}
```
> - Added More Comments To Javascript
> - Fixed Goal And Box Coordinates Not Changing Color In Light Mode
> - Replaced Hardcoded Light And Dark Mode Colors With Variables
> - Replaced Hardcoded Background Colors With Variables
> - Started Dating Changelog Versions
> - Stopped Dating Changelog Versions (Couldn't Get It To Look Good)
> - Moved The Changelog List Styles To The Seprate CSS File:
```
/* Lists */
ul {
    list-style: square;
}
li {
    padding-top: 4px;
    padding-bottom: 4px;
}
```
> - Increased The Padding Of The Changelog List Items To 4px On Top And 4px On The Bottom
> - Added More Comments To HTML
> - Made HTML Neater
> - Added Timer
```
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
```
> - Added Color Changing
> - Started Adding Notes For The Type Of Update In The Changelog

> ### Version 0.4

>> Feature Removal

> - Removed Background Music (It Was To Much Of A Pain To Try And Implement Well)

> ### Version 0.3

>> Bugfix And Music

> - Fixed Button Sound Effects On Main Menu
> - Added Background Music | Made With Chrome Music Lab, Music Can Be Found  [Here](https://musiclab.chromeexperiments.com/Song-Maker/song/5857563646754816)

> ### Version 0.2

>> Bugfixs And Sounds

> - Updated Title Image
> - Fixed Help And Changelog Buttons Sending You To The Opposite Page
> - Added Sound Effects

> ### Version 0.1

>> A Few Style Changes And The Changelog

> - Added Box Coordinates
> - Added Goal Coordinates
> - Lowered Arrow Buttons
> - Added Changelog
> - Changed Loading Screen
> - Added Comments to CSS