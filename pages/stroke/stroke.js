
//var draw = require('../../utils/draw.js')
Page({
    points : [],
    context : null,
    onReady : function() {
        
        var canvasId = "cvs01";
        this.context = wx.createContext();
        // //context.clearActions();
         this.context.rect(0, 0, 360, 400);
        // //绘制的样式进行描边绘制，fill为填充位置
        // this.context.moveTo(0,0);
        // this.context.lineTo(100.100);
        // this.context.stroke();

        // wx.drawCanvas({
        //     canvasId:canvasId,
        //     actions:this.context.getActions()
        // });
        
    
    //     // this.context.setLineWidth(10)
    // // this.context.setLineCap("round")
    // // this.context.setLineJoin("miter")
    // // this.context.setMiterLimit(10)
    // this.context.moveTo(20, 20)
    // this.context.lineTo(150, 27)
    // this.context.lineTo(20, 54)
    // this.context.stroke()

    // // this.context.beginPath()

    // // this.context.setMiterLimit(3)
    // this.context.moveTo(20, 70)
    // this.context.lineTo(150, 77)
    // this.context.lineTo(20, 104)
    // this.context.stroke()
    },
    tap1 : function(e) {
        console.log("I am taped");
    },
    tapCanvasStart : function(e) {
        var arr = [];
        arr.push(e.touches[0]);
        this.points.push(arr);
        this.context.moveTo(e.touches[0].pageX,e.touches[0].pageY-100);
    },
    tapCanvasEnd : function(e) {
        // this.points.push(e.touches[0]);
        // this.context.lineTo(e.touches[0].pageX,e.touches[0].pageY);

        // for(var i=0;i<this.points.length-1;i++) {
        //     this.context.moveTo(this.points[i][0].pageX, this.points[i][0].pageY-100);
        //     for(var j=0;j<this.points[i].length;j++) {
        //         this.context.lineTo(this.points[i][j].pageX, this.points[i][j].pageY-100);
        //     }
        //     this.context.stroke();
        // }
        
        // var canvasId = "cvs01";
        // wx.drawCanvas({
        //     canvasId:canvasId,
        //     actions:this.context.getActions()
        // });
    },
    tapCanvasMove : function(e) {
        this.points[this.points.length - 1].push(e.touches[0]);
        this.draw();
        // this.points.push(e.touches[0]);
        // this.context.lineTo(e.touches[0].pageX,e.touches[0].pageY-100);
        // this.context.stroke();
    },
    draw : function() {
        this.context.clearActions();
        for(var i=0;i<this.points.length;i++) {
            this.context.moveTo(this.points[i][0].pageX, this.points[i][0].pageY-100);
            for(var j=0;j<this.points[i].length;j++) {
                this.context.lineTo(this.points[i][j].pageX, this.points[i][j].pageY-100);
            }
            this.context.stroke();
        }
        
        var canvasId = "cvs01";
        wx.drawCanvas({
            canvasId:canvasId,
            actions:this.context.getActions()
        });
    },
})