var doc = app.activeDocument;
var spreadWidth = doc.documentPreferences.pageWidth; // Width of a single page
var spreadCenter = spreadWidth; // Center of the spread (assuming facing pages)

for (var i = 0; i < app.selection.length; i++) {
    var box = app.selection[i];

    if (box instanceof Rectangle || box instanceof TextFrame || box instanceof Polygon) {
        var boxBounds = box.geometricBounds; // [Top, Left, Bottom, Right]
        var boxLeft = boxBounds[1];
        var boxWidth = boxBounds[3] - boxLeft;
        var newRight = spreadCenter; // Align right side to center of spread

        // Resize the box
        box.geometricBounds = [boxBounds[0], boxLeft, boxBounds[2], newRight];
    }
}
