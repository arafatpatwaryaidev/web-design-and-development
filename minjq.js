alert("Hey! I am JQ");
$(".head-jq").text("Hello I use function")
$(".lorem").html("<b>This is lorem text</b>")
$(".lorem").prepend("<b>HTML technology</b> ")
$(".lorem").append("  <b>This is Dummy text.</b>")

var paraMeter = $("<p></p>").text("This lorem text used by dummy text for practice")
$(".lorem").after(paraMeter)

var paraMeter = $("<p></p>").text("This lorem text used by dummy text for practice")
$(".lorem").before(paraMeter)

$("a").attr("href")
$("a").attr("href", "https://en.wikipedia.org/wiki/DeepMind")