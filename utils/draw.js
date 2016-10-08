function drawStroke() {
    //
}

function init() {
    var canvasId = 1001;
    var context = wx.createContext();
    context.clearActions();
    wx.drawCanvas({
        canvasId:canvasId,
        actions:context.getActions()
    });
    context.onTouchStart = function() {
        alert("test");
    };
}

module.export = {
    x,
    y,
    width,
    height,
    init : init,
    drawStroke : drawStroke,
}