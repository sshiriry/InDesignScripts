function main() {
    var selections = app.selection;

    for (var i = 0; i < selections.length; i++) {
        var tf = selections[i];

        if (!(tf instanceof TextFrame)) {
            alert("Please select only text frames.");
            continue;
        }

        // Apply a rotation to the path points only — like the Direct Selection Tool
        tf.paths[0].entirePath = rotatePath(tf.paths[0].entirePath, tf.geometricBounds, -0.5);
    }
}

function rotatePath(points, bounds, degrees) {
    var radians = degrees * Math.PI / 180;
    var centerX = (bounds[1] + bounds[3]) / 2;
    var centerY = (bounds[0] + bounds[2]) / 2;

    var newPoints = [];

    for (var i = 0; i < points.length; i++) {
        var x = points[i][0] - centerX;
        var y = points[i][1] - centerY;

        var newX = x * Math.cos(radians) - y * Math.sin(radians);
        var newY = x * Math.sin(radians) + y * Math.cos(radians);

        newPoints.push([newX + centerX, newY + centerY]);
    }

    return newPoints;
}

main();
