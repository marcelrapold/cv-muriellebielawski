var data = {
labels: ["Kreation", "Analyse", "Entscheidung", "Kommunikation", "Umsetzung", "Administration", "Teamarbeit", "Risikofreude", "Detailorientierung", "Umfeld-Fokus", "Faktenorientierung" 
],
datasets: [
{
label: "Positionierung",
fillColor: "rgba(128, 203, 196, 0.3)",
strokeColor: "rgba(128, 203, 196, 1)",
pointColor: "rgba(255,118,105,1)",
pointStrokeColor: "red",
pointHighlightFill: "rgba(255,118,105,1.0)",
pointHighlightStroke: "red",
data: [90, 80, 75, 80, 80, 60, 80, 85, 60, 75, 60]
}
]
};
var ctx = document.getElementById("canvas").getContext("2d");
var myRadarChart = new Chart(ctx).Radar(data, {
responsive: true,
pointLabelFontColor : "rgba(128, 203, 196, 1.0)",
pointLabelFontFamily : "'Droid Sans', sans-serif",
});
Chart.defaults.global.responsive = true;


