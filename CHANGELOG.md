# Changelog
> ## Version 0.7 (Latest)

> ### Main menu CSS improvements. I've learned more about CSS add have decided to make the main menu CSS better.

> - Switched from using `margin` and `position: absolute;` to using `flex`
> - Swiched from using animations to using `transition: all 0.3s ease;`
> - Added a Github link to the main menu
> - Stopped using `<br>` for the button separation in favor of the `gap` property

> ## Version 0.6

> ### Design changes and JavaScript Organization

> - Added a glow effect to lots of things `filter: drop-shadow(0 0 0.8rem aqua);`
> - Split JavaScript up among files:
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
```html
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

> ## Version 0.5

> ### A bunck of bugfixes and additions. This update is the biggest so far, so get ready!

> - Updated method of version numbering
> - Changed [changelog](/Changelog/changelog.html) scrollbar style now that it is long enough to be visible:
```css
/**** Scrollbar ****/

/* Width */
::-webkit-scrollbar {

    /* Width */
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {

    /* Color*/
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
> - Added more comments to JavaScript
> - Fixed goal and box coordinates not changing color in light mode
> - Replaced hardcoded light and dark mode colors with variables
> - Replaced hardcoded background colors with variables
> - Stopped dating changelog versions (Couldn't get it to look good)
> - Moved the [changelog](/Changelog/changelog.html) list styles to the [seprate CSS file](/Changelog/changelogstyles.css):
```css
/* Lists */
ul {
    list-style: square;
}
li {
    padding-top: 4px;
    padding-bottom: 4px;
}
```
> - Increased the padding of the changelog list items to 4px on top and 4px on the bottom
> - Added more comments to HTML
> - Made HTML neater
> - Added timer
```js
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
> - Added color hhanging
> - Started adding notes for the type of update in the changelog

> ## Version 0.4

> ### Feature removal

> - Removed background music (It was to much of a pain to try and implement well)

> ## Version 0.3

> ### Bugfix and music

> - Fixed button sound effects on main menu
> - Added background music | Made width Chrome Music Lab, the music can be found [here](https://musiclab.chromeexperiments.com/Song-Maker/song/5857563646754816)

> ## Version 0.2

> ### Bugfixes and sounds

> - Updated title image
> - Fixed help and changelog buttons sending you to the opposite page
> - Added sound effects

> ## Version 0.1

> ### A few style changes and the changelog

> - Added box coordinates
> - Added goal coordinates
> - Lowered arrow buttons
> - Added changelog
> - Changed loading screen
> - Added comments to CSS