import GameConfig from "./GameConfig";
class Main {
	private loadedOther:boolean=false;
	public now3dScence:Laya.Scene3D;
	public static instance:Main;
	constructor() {
		//根据IDE设置初始化引擎	
		Main.instance=this;	
		Laya3D.init(640,1136);
		Laya.Stat.show();
		Laya.stage.scaleMode=Laya.Stage.SCALE_FULL;
		Laya.stage.screenMode=Laya.Stage.SCREEN_NONE;
		Laya.Scene3D.load("res/LayaScene_layaScene/Conventional/layaScene.ls",Laya.Handler.create(this,this.loadFinished));
	
	}
	loadFinished(scene:Laya.Scene3D){
		this.now3dScence=scene;
		Laya.stage.addChild(scene);
		var cube:Laya.Sprite3D= scene.getChildByName("Cube") as Laya.Sprite3D;
		let that=this;
		Laya.stage.on(Laya.Event.MOUSE_DOWN,this,function(){
			let oldRotations=cube.transform.rotation;
			let element=cube.getComponent(BoxControll);
			!element?cube.addComponent(BoxControll):element.destroy();
			 Main.loadSprite3DFile("res/LayaScene_layaScene/Conventional/Capsule.lh");
			
			//Laya.timer.currFrame()
		});
		let oldMoveX=null;
		let oldMoveY=null;
		Laya.stage.on(Laya.Event.MOUSE_MOVE,this,function(){
			console.log("mosemove");
			let newX=Laya.MouseManager.instance.mouseX;
			let newY=Laya.MouseManager.instance.mouseY;
			if(oldMoveX==null||oldMoveY==null){
				oldMoveX=newX;//Laya.MouseManager.instance.mouseX;
				oldMoveY=newY;//Laya.MouseManager.instance.mouseY;
			}else{	
				let subOfX=newX-oldMoveX;
				let subOfY=newY-oldMoveY;
				oldMoveX=null;
				oldMoveY=null;
				let _mainCamera:Laya.Camera=Main.instance.now3dScence.getChildByName("Main Camera") as Laya.Camera;
				_mainCamera.transform.translate(new Laya.Vector3(subOfX>0?0.03:-0.03,subOfY>0?0.03:-0.03,0));
			}
		})
		// let camera = scene.getChildByName("Camera");
		
	}

	public static  loadSprite3DFile(sprite3DFileUrl){

		Laya.Sprite3D.load(sprite3DFileUrl,Laya.Handler.create(this,function(_sprite3D){
			console.log(_sprite3D);
			Main.instance.now3dScence.addChild(_sprite3D);//可以正常显示  
			// Laya.stage.addChild(_sprite3D);//只有在3D Scence中 才可以添加模型？？？？？ 当前方法报错
		}));
		let _mainCamera:Laya.Camera=Main.instance.now3dScence.getChildByName("Main Camera") as Laya.Camera;
		// _mainCamera.transform.rotation.x=0;
		// _mainCamera.transform.rotation.y=0;
		// _mainCamera.transform.rotation.z=0;
		// _mainCamera.transform.rotation.w=0;

		// _mainCamera.transform.localRotation.x=0;
		// _mainCamera.transform.localRotation.y=0;
		// _mainCamera.transform.localRotation.z=0;
		// _mainCamera.transform.localRotation.w=0;

		_mainCamera.transform.rotation=new Laya.Quaternion(0,0,0);
		_mainCamera.transform.position=new Laya.Vector3(0,0,-1.92);


		
		console.log(_mainCamera);


	}



}
//激活启动类
new Main();


class BoxControll extends Laya.Script3D{
	private box:Laya.MeshSprite3D;
	private _albedoColor = new Laya.Vector4(1, 0, 0, 1);
	private _rotation = new Laya.Vector3(3, 3, 0);
	
	constructor(){
		super();
	
	}

	onAwake(){
		this.box = this.owner as  Laya.MeshSprite3D;
	}

	public onStart():void {
	
	}
	
	/**
	 * 覆写组件更新方法（相当于帧循环）
	 */
	public onUpdate():void {
		//所属脚本对象旋转更新
		this.box.transform.rotate(this._rotation, false, false)
	}
	
	public onDisable() {
		console.log("组件设置为不可用");
	}

	
}
