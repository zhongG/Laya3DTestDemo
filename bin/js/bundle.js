var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Main = /** @class */ (function () {
    function Main() {
        this.loadedOther = false;
        //根据IDE设置初始化引擎	
        Main.instance = this;
        Laya3D.init(640, 1136);
        Laya.Stat.show();
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.Scene3D.load("res/LayaScene_layaScene/Conventional/layaScene.ls", Laya.Handler.create(this, this.loadFinished));
    }
    Main.prototype.loadFinished = function (scene) {
        this.now3dScence = scene;
        Laya.stage.addChild(scene);
        var cube = scene.getChildByName("Cube");
        var that = this;
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, function () {
            var oldRotations = cube.transform.rotation;
            var element = cube.getComponent(BoxControll);
            !element ? cube.addComponent(BoxControll) : element.destroy();
            Main.loadSprite3DFile("res/LayaScene_layaScene/Conventional/Capsule.lh");
            //Laya.timer.currFrame()
        });
        var oldMoveX = null;
        var oldMoveY = null;
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, function () {
            console.log("mosemove");
            var newX = Laya.MouseManager.instance.mouseX;
            var newY = Laya.MouseManager.instance.mouseY;
            if (oldMoveX == null || oldMoveY == null) {
                oldMoveX = newX; //Laya.MouseManager.instance.mouseX;
                oldMoveY = newY; //Laya.MouseManager.instance.mouseY;
            }
            else {
                var subOfX = newX - oldMoveX;
                var subOfY = newY - oldMoveY;
                oldMoveX = null;
                oldMoveY = null;
                var _mainCamera = Main.instance.now3dScence.getChildByName("Main Camera");
                _mainCamera.transform.translate(new Laya.Vector3(subOfX > 0 ? 0.03 : -0.03, subOfY > 0 ? 0.03 : -0.03, 0));
            }
        });
        // let camera = scene.getChildByName("Camera");
    };
    Main.loadSprite3DFile = function (sprite3DFileUrl) {
        Laya.Sprite3D.load(sprite3DFileUrl, Laya.Handler.create(this, function (_sprite3D) {
            console.log(_sprite3D);
            Main.instance.now3dScence.addChild(_sprite3D); //可以正常显示  
            // Laya.stage.addChild(_sprite3D);//只有在3D Scence中 才可以添加模型？？？？？ 当前方法报错
        }));
        var _mainCamera = Main.instance.now3dScence.getChildByName("Main Camera");
        // _mainCamera.transform.rotation.x=0;
        // _mainCamera.transform.rotation.y=0;
        // _mainCamera.transform.rotation.z=0;
        // _mainCamera.transform.rotation.w=0;
        // _mainCamera.transform.localRotation.x=0;
        // _mainCamera.transform.localRotation.y=0;
        // _mainCamera.transform.localRotation.z=0;
        // _mainCamera.transform.localRotation.w=0;
        _mainCamera.transform.rotation = new Laya.Quaternion(0, 0, 0);
        _mainCamera.transform.position = new Laya.Vector3(0, 0, -1.92);
        console.log(_mainCamera);
    };
    return Main;
}());
//激活启动类
new Main();
var BoxControll = /** @class */ (function (_super) {
    __extends(BoxControll, _super);
    function BoxControll() {
        var _this = _super.call(this) || this;
        _this._albedoColor = new Laya.Vector4(1, 0, 0, 1);
        _this._rotation = new Laya.Vector3(3, 3, 0);
        return _this;
    }
    BoxControll.prototype.onAwake = function () {
        this.box = this.owner;
    };
    BoxControll.prototype.onStart = function () {
    };
    /**
     * 覆写组件更新方法（相当于帧循环）
     */
    BoxControll.prototype.onUpdate = function () {
        //所属脚本对象旋转更新
        this.box.transform.rotate(this._rotation, false, false);
    };
    BoxControll.prototype.onDisable = function () {
        console.log("组件设置为不可用");
    };
    return BoxControll;
}(Laya.Script3D));
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L0xheWFBaXJJREUgKDIpL3Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1RBO0lBSUM7UUFIUSxnQkFBVyxHQUFTLEtBQUssQ0FBQztRQUlqQyxlQUFlO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtREFBbUQsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFFcEgsQ0FBQztJQUNELDJCQUFZLEdBQVosVUFBYSxLQUFrQjtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksR0FBZ0IsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQWtCLENBQUM7UUFDdEUsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUMsSUFBSSxF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QUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUkzRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRzFCLENBQUM7SUFJRixXQUFDO0FBQUQsQ0EvRUEsQUErRUMsSUFBQTtBQUNELE9BQU87QUFDUCxJQUFJLElBQUksRUFBRSxDQUFDO0FBR1g7SUFBMEIsK0JBQWE7SUFLdEM7UUFBQSxZQUNDLGlCQUFPLFNBRVA7UUFOTyxrQkFBWSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxlQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0lBSzlDLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQ0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBMkIsQ0FBQztJQUM3QyxDQUFDO0lBRU0sNkJBQU8sR0FBZDtJQUVBLENBQUM7SUFFRDs7T0FFRztJQUNJLDhCQUFRLEdBQWY7UUFDQyxZQUFZO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFTSwrQkFBUyxHQUFoQjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUdGLGtCQUFDO0FBQUQsQ0EvQkEsQUErQkMsQ0EvQnlCLElBQUksQ0FBQyxRQUFRLEdBK0J0QyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdHByaXZhdGUgbG9hZGVkT3RoZXI6Ym9vbGVhbj1mYWxzZTtcclxuXHRwdWJsaWMgbm93M2RTY2VuY2U6TGF5YS5TY2VuZTNEO1xyXG5cdHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6TWFpbjtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcclxuXHRcdE1haW4uaW5zdGFuY2U9dGhpcztcdFxyXG5cdFx0TGF5YTNELmluaXQoNjQwLDExMzYpO1xyXG5cdFx0TGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlPUxheWEuU3RhZ2UuU0NBTEVfRlVMTDtcclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZT1MYXlhLlN0YWdlLlNDUkVFTl9OT05FO1xyXG5cdFx0TGF5YS5TY2VuZTNELmxvYWQoXCJyZXMvTGF5YVNjZW5lX2xheWFTY2VuZS9Db252ZW50aW9uYWwvbGF5YVNjZW5lLmxzXCIsTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLHRoaXMubG9hZEZpbmlzaGVkKSk7XHJcblx0XHJcblx0fVxyXG5cdGxvYWRGaW5pc2hlZChzY2VuZTpMYXlhLlNjZW5lM0Qpe1xyXG5cdFx0dGhpcy5ub3czZFNjZW5jZT1zY2VuZTtcclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQoc2NlbmUpO1xyXG5cdFx0dmFyIGN1YmU6TGF5YS5TcHJpdGUzRD0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJDdWJlXCIpIGFzIExheWEuU3ByaXRlM0Q7XHJcblx0XHRsZXQgdGhhdD10aGlzO1xyXG5cdFx0TGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sdGhpcyxmdW5jdGlvbigpe1xyXG5cdFx0XHRsZXQgb2xkUm90YXRpb25zPWN1YmUudHJhbnNmb3JtLnJvdGF0aW9uO1xyXG5cdFx0XHRsZXQgZWxlbWVudD1jdWJlLmdldENvbXBvbmVudChCb3hDb250cm9sbCk7XHJcblx0XHRcdCFlbGVtZW50P2N1YmUuYWRkQ29tcG9uZW50KEJveENvbnRyb2xsKTplbGVtZW50LmRlc3Ryb3koKTtcclxuXHRcdFx0IE1haW4ubG9hZFNwcml0ZTNERmlsZShcInJlcy9MYXlhU2NlbmVfbGF5YVNjZW5lL0NvbnZlbnRpb25hbC9DYXBzdWxlLmxoXCIpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly9MYXlhLnRpbWVyLmN1cnJGcmFtZSgpXHJcblx0XHR9KTtcclxuXHRcdGxldCBvbGRNb3ZlWD1udWxsO1xyXG5cdFx0bGV0IG9sZE1vdmVZPW51bGw7XHJcblx0XHRMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfTU9WRSx0aGlzLGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwibW9zZW1vdmVcIik7XHJcblx0XHRcdGxldCBuZXdYPUxheWEuTW91c2VNYW5hZ2VyLmluc3RhbmNlLm1vdXNlWDtcclxuXHRcdFx0bGV0IG5ld1k9TGF5YS5Nb3VzZU1hbmFnZXIuaW5zdGFuY2UubW91c2VZO1xyXG5cdFx0XHRpZihvbGRNb3ZlWD09bnVsbHx8b2xkTW92ZVk9PW51bGwpe1xyXG5cdFx0XHRcdG9sZE1vdmVYPW5ld1g7Ly9MYXlhLk1vdXNlTWFuYWdlci5pbnN0YW5jZS5tb3VzZVg7XHJcblx0XHRcdFx0b2xkTW92ZVk9bmV3WTsvL0xheWEuTW91c2VNYW5hZ2VyLmluc3RhbmNlLm1vdXNlWTtcclxuXHRcdFx0fWVsc2V7XHRcclxuXHRcdFx0XHRsZXQgc3ViT2ZYPW5ld1gtb2xkTW92ZVg7XHJcblx0XHRcdFx0bGV0IHN1Yk9mWT1uZXdZLW9sZE1vdmVZO1xyXG5cdFx0XHRcdG9sZE1vdmVYPW51bGw7XHJcblx0XHRcdFx0b2xkTW92ZVk9bnVsbDtcclxuXHRcdFx0XHRsZXQgX21haW5DYW1lcmE6TGF5YS5DYW1lcmE9TWFpbi5pbnN0YW5jZS5ub3czZFNjZW5jZS5nZXRDaGlsZEJ5TmFtZShcIk1haW4gQ2FtZXJhXCIpIGFzIExheWEuQ2FtZXJhO1xyXG5cdFx0XHRcdF9tYWluQ2FtZXJhLnRyYW5zZm9ybS50cmFuc2xhdGUobmV3IExheWEuVmVjdG9yMyhzdWJPZlg+MD8wLjAzOi0wLjAzLHN1Yk9mWT4wPzAuMDM6LTAuMDMsMCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0Ly8gbGV0IGNhbWVyYSA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQ2FtZXJhXCIpO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljICBsb2FkU3ByaXRlM0RGaWxlKHNwcml0ZTNERmlsZVVybCl7XHJcblxyXG5cdFx0TGF5YS5TcHJpdGUzRC5sb2FkKHNwcml0ZTNERmlsZVVybCxMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsZnVuY3Rpb24oX3Nwcml0ZTNEKXtcclxuXHRcdFx0Y29uc29sZS5sb2coX3Nwcml0ZTNEKTtcclxuXHRcdFx0TWFpbi5pbnN0YW5jZS5ub3czZFNjZW5jZS5hZGRDaGlsZChfc3ByaXRlM0QpOy8v5Y+v5Lul5q2j5bi45pi+56S6ICBcclxuXHRcdFx0Ly8gTGF5YS5zdGFnZS5hZGRDaGlsZChfc3ByaXRlM0QpOy8v5Y+q5pyJ5ZyoM0QgU2NlbmNl5LitIOaJjeWPr+S7pea3u+WKoOaooeWei++8n++8n++8n++8n++8nyDlvZPliY3mlrnms5XmiqXplJlcclxuXHRcdH0pKTtcclxuXHRcdGxldCBfbWFpbkNhbWVyYTpMYXlhLkNhbWVyYT1NYWluLmluc3RhbmNlLm5vdzNkU2NlbmNlLmdldENoaWxkQnlOYW1lKFwiTWFpbiBDYW1lcmFcIikgYXMgTGF5YS5DYW1lcmE7XHJcblx0XHQvLyBfbWFpbkNhbWVyYS50cmFuc2Zvcm0ucm90YXRpb24ueD0wO1xyXG5cdFx0Ly8gX21haW5DYW1lcmEudHJhbnNmb3JtLnJvdGF0aW9uLnk9MDtcclxuXHRcdC8vIF9tYWluQ2FtZXJhLnRyYW5zZm9ybS5yb3RhdGlvbi56PTA7XHJcblx0XHQvLyBfbWFpbkNhbWVyYS50cmFuc2Zvcm0ucm90YXRpb24udz0wO1xyXG5cclxuXHRcdC8vIF9tYWluQ2FtZXJhLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uLng9MDtcclxuXHRcdC8vIF9tYWluQ2FtZXJhLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uLnk9MDtcclxuXHRcdC8vIF9tYWluQ2FtZXJhLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uLno9MDtcclxuXHRcdC8vIF9tYWluQ2FtZXJhLnRyYW5zZm9ybS5sb2NhbFJvdGF0aW9uLnc9MDtcclxuXHJcblx0XHRfbWFpbkNhbWVyYS50cmFuc2Zvcm0ucm90YXRpb249bmV3IExheWEuUXVhdGVybmlvbigwLDAsMCk7XHJcblx0XHRfbWFpbkNhbWVyYS50cmFuc2Zvcm0ucG9zaXRpb249bmV3IExheWEuVmVjdG9yMygwLDAsLTEuOTIpO1xyXG5cclxuXHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKF9tYWluQ2FtZXJhKTtcclxuXHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG5cclxuXHJcbmNsYXNzIEJveENvbnRyb2xsIGV4dGVuZHMgTGF5YS5TY3JpcHQzRHtcclxuXHRwcml2YXRlIGJveDpMYXlhLk1lc2hTcHJpdGUzRDtcclxuXHRwcml2YXRlIF9hbGJlZG9Db2xvciA9IG5ldyBMYXlhLlZlY3RvcjQoMSwgMCwgMCwgMSk7XHJcblx0cHJpdmF0ZSBfcm90YXRpb24gPSBuZXcgTGF5YS5WZWN0b3IzKDMsIDMsIDApO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlcigpO1xyXG5cdFxyXG5cdH1cclxuXHJcblx0b25Bd2FrZSgpe1xyXG5cdFx0dGhpcy5ib3ggPSB0aGlzLm93bmVyIGFzICBMYXlhLk1lc2hTcHJpdGUzRDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvblN0YXJ0KCk6dm9pZCB7XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIOimhuWGmee7hOS7tuabtOaWsOaWueazle+8iOebuOW9k+S6juW4p+W+queOr++8iVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBvblVwZGF0ZSgpOnZvaWQge1xyXG5cdFx0Ly/miYDlsZ7ohJrmnKzlr7nosaHml4vovazmm7TmlrBcclxuXHRcdHRoaXMuYm94LnRyYW5zZm9ybS5yb3RhdGUodGhpcy5fcm90YXRpb24sIGZhbHNlLCBmYWxzZSlcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uRGlzYWJsZSgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi57uE5Lu26K6+572u5Li65LiN5Y+v55SoXCIpO1xyXG5cdH1cclxuXHJcblx0XHJcbn1cclxuIl19
