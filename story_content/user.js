window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Set glossary variables to True
player.SetVar("CATGlossaryComplete", true);
player.SetVar("DefinitionGlossaryComplete", true);
player.SetVar("GrammarGlossaryComplete", true);
player.SetVar("OppositesGlossaryComplete", true);
player.SetVar("SynonymsGlossaryComplete", true);
}

window.Script2 = function()
{
  // Create a reference to the player
var player = GetPlayer();

// Set each task variable to True (Opposites tasks)
player.SetVar("OppoTask1Complete", true);
player.SetVar("OppoTask2Complete", true);
player.SetVar("OppoTask3Complete", true);
player.SetVar("OppoTask4Complete", true);

// Set each task variable to True (Grammar tasks)
player.SetVar("GraTask1Complete", true);
player.SetVar("GraTask2Complete", true);
player.SetVar("GraTask3Complete", true);
player.SetVar("GraTask4Complete", true);

// Set each task variable to True (Definitions tasks)
player.SetVar("DefTask1Complete", true);
player.SetVar("DefTask2Complete", true);
player.SetVar("DefTask3Complete", true);
player.SetVar("DefTask4Complete", true);

// Set each task variable to True (Synonyms tasks)
player.SetVar("SynTask1complete", true);
player.SetVar("SynTask2complete", true);
player.SetVar("SynTask3complete", true);
player.SetVar("SynTask4complete", true);

// Set each task variable to True (Categories tasks)
player.SetVar("CATTask1Complete", true);
player.SetVar("CATTask2Complete", true);
player.SetVar("CATTask3Complete", true);
player.SetVar("CATTask4Complete", true);
}

window.Script3 = function()
{
  // Create a reference to the player
var player = GetPlayer();

// Change the state of objects to Normal
player.SetVar("OppoTasksCompleted", "Normal");
player.SetVar("SynonymsTasksCompleted", "Normal");
player.SetVar("CategoriesTasksCompleted", "Normal");
player.SetVar("DefinitionsTasksCompleted", "Normal");
player.SetVar("GrammarTasksCompleted", "Normal");
}

window.Script4 = function()
{
  var countdown = 15; // Reset countdown to 15 for each slide
var interval = setInterval(function() {
    if (countdown > 0) {
        countdown--;
        player.SetVar("Timer", countdown); // Update the Timer variable
    } else {
        clearInterval(interval); // Stop the countdown when it reaches 0
        player.SetVar("SubmitInteraction", true); // Submit interaction

        // After 500ms, jump to the next slide
        setTimeout(function() {
            player.SetVar("JumpToNextSlide", true);
        }, 500);
    }
}, 1000); // Countdown runs every second
}

window.Script5 = function()
{
  var countdown = 15; // Reset countdown to 15 for each slide
var interval = setInterval(function() {
    if (countdown > 0) {
        countdown--;
        player.SetVar("Timer", countdown); // Update the Timer variable
    } else {
        clearInterval(interval); // Stop the countdown when it reaches 0
        player.SetVar("SubmitInteraction", true); // Submit interaction

        // After 500ms, jump to the next slide
        setTimeout(function() {
            player.SetVar("JumpToNextSlide", true);
        }, 500);
    }
}, 1000); // Countdown runs every second
}

window.Script6 = function()
{
  var countdown = 15; // Reset countdown to 15 for each slide
var interval = setInterval(function() {
    if (countdown > 0) {
        countdown--;
        player.SetVar("Timer", countdown); // Update the Timer variable
    } else {
        clearInterval(interval); // Stop the countdown when it reaches 0
        player.SetVar("SubmitInteraction", true); // Submit interaction

        // After 500ms, jump to the next slide
        setTimeout(function() {
            player.SetVar("JumpToNextSlide", true);
        }, 500);
    }
}, 1000); // Countdown runs every second
}

window.Script7 = function()
{
  var countdown = 15; // Reset countdown to 15 for each slide
var interval = setInterval(function() {
    if (countdown > 0) {
        countdown--;
        player.SetVar("Timer", countdown); // Update the Timer variable
    } else {
        clearInterval(interval); // Stop the countdown when it reaches 0
        player.SetVar("SubmitInteraction", true); // Submit interaction

        // After 500ms, jump to the next slide
        setTimeout(function() {
            player.SetVar("JumpToNextSlide", true);
        }, 500);
    }
}, 1000); // Countdown runs every second
}

};
