var doc = app.activeDocument;
var spreadWidth = doc.documentPreferences.pageWidth; // Width of a single page
var spreadCenter = spreadWidth; // Center of the spread (assuming facing pages)

for (var i = 0; i < app.selection.length; i++) {
    var box = app.selection[i];

    if (box instanceof Rectangle || box instanceof TextFrame || box instanceof Polygon) {
        var boxBounds = box.geometricBounds; // [Top, Left, Bottom, Right]
        var boxRight = boxBounds[3]; // Keep right side unchanged
        
        // Set the left edge to the center of the spread (cutting off the left)
        var newLeft = spreadCenter;

        // Apply the new bounds
        box.geometricBounds = [boxBounds[0], newLeft, boxBounds[2], boxRight];
    }
}
