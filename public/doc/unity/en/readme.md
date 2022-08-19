## What？

puerts is a TypeScript programming solution within game engines.
* provides a JavaScript Runtime

* allows TypeScript to access the host engine（module-binding on the JavaScript level and generating TypeScript declarations）

 

## Why?

* Facililates game building processes by combining JavaScript packages and toolchains with the rendering power of professional game engines

* In contrast to lua script, TypeScript supports static type checking, which significantly improves code robustness and maintainability.

* WebGL support. Much faster than lua in WebGL.

* High efficiency: supports reflection binding throughout the platform (engine) - no extra steps (code generation) needed for development.

* High performance：supports static binding throughout the platform (engine) - takes care of complex scenes

---

## How to Install | 最新版本安装

* [unreal](doc/unreal/install.md)
* [unity](doc/unity/install.md)

### Changelog

* [unreal](doc/unreal/changelog.md)
* [unity](doc/unity/changelog.md)

### Known issues | 已知问题与解决办法

* [unreal](doc/unreal/bugs.md)
* [unity](doc/unity/bugs.md)

---

## Code Sample | 编程样例

> Unity

```typescript
import {UnityEngine} from 'csharp'

UnityEngine.Debug.Log('hello world');
let gameObject = new UnityEngine.GameObject("testobject");
console.log(gameObject.name);
gameObject.transform.position = new UnityEngine.Vector3(1, 2, 3);
```

> Unreal

```typescript
import * as UE from 'ue'
import {argv} from 'puerts';
let world = argv.getByName("World") as UE.World;
let actor = world.SpawnActor(UE.MainActor.StaticClass(),
    undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, undefined, undefined) as UE.MainActor;
console.log(actor.GetName());
console.log(actor.K2_GetActorLocation().ToString());
```

## Manual | 参考文档

> Unreal
* [Unreal Readme](unreal/README.md)
* [Unreal Manual](doc/unreal/manual.md)
* [Unreal debugging](doc/unreal/vscode_debug.md)
* [TypeScript and unreal engine interaction](unreal/interact_with_uclass.md)
* [Template-based static binding](unreal/template_binding.md)
> Unity
* [Unity Readme](unity/README.md)
* [Unity Manual](doc/unity/manual.md)
* [Unity debugging](doc/unity/vscode_debug.md)
* [More Framework for Unity](https://github.com/chexiongsheng/puerts_unity_demo#more-example--%E6%9B%B4%E5%A4%9A%E7%9A%84%E7%A4%BA%E4%BE%8B%E6%88%96%E8%80%85%E6%95%99%E7%A8%8B)

## Sample Projects | 示例项目

> Unreal

* [QuickStart.ts](https://github.com/chexiongsheng/puerts_unreal_demo/blob/master/TsProj/QuickStart.ts) ： 演示TypeScript和UE4引擎互相调用

* [NewContainer.ts](https://github.com/chexiongsheng/puerts_unreal_demo/blob/master/TsProj/NewContainer.ts) ： 演示容器的创建

* [AsyncTest.ts](https://github.com/chexiongsheng/puerts_unreal_demo/blob/master/TsProj/AsyncTest.ts) ： 将异步加载蓝图，Delay封装成async/await

* [UsingWidget.ts](https://github.com/chexiongsheng/puerts_unreal_demo/blob/master/TsProj/UsingWidget.ts) ： UI加载，绑定事件，获取数据的演示

* [UsingMixin.ts](https://github.com/chexiongsheng/puerts_unreal_demo/blob/master/TsProj/UsingMixin.ts)：演示mixin功能的使用

* [FPS demo](https://github.com/chexiongsheng/puerts_fps_demo) ： 以一个FPS游戏例子演示如何使用Puerts的“继承引擎类功能”，该功能的介绍见[unreal手册](doc/unreal/manual.md)

> Unity

* [Basic_Demo](https://github.com/chexiongsheng/puerts_unity_demo/tree/master/projects/0_Basic_Demo)

  * [01_JsCallCs](https://github.com/chexiongsheng/puerts_unity_demo/tree/master/projects/0_Basic_Demo/Assets/Examples/01_JsCallCs) ： js调用c#

  * [02_Require](https://github.com/chexiongsheng/puerts_unity_demo/tree/master/projects/0_Basic_Demo/Assets/Examples/02_Require) ： 加载js文件

  * [03_Callback](https://github.com/chexiongsheng/puerts_unity_demo/tree/master/projects/0_Basic_Demo/Assets/Examples/03_Callback) ： 回调基本演示

  * [04_JsBehaviour](https://github.com/chexiongsheng/puerts_unity_demo/tree/master/projects/0_Basic_Demo/Assets/Examples/04_JsBehaviour) ： 用js模拟MonoBehaviour

  * [05_Typescript](https://github.com/chexiongsheng/puerts_unity_demo/tree/master/projects/0_Basic_Demo/Assets/Examples/05_Typescript) ： 包含了大部分TypeScript和C#互相调用的演示

  * [06_UIEvent](https://github.com/chexiongsheng/puerts_unity_demo/tree/master/projects/0_Basic_Demo/Assets/Examples/06_UIEvent) ：UI事件的演示

* [Start_Template](https://github.com/chexiongsheng/puerts_unity_demo/tree/master/projects/1_Start_Template)

## FAQ | 常见问题

* [general faq](doc/faq.md)
* [unreal faq](doc/unreal/faq.md)
* [unity faq](doc/unity/faq.md)

---

## Avaliable on these environment

* unity 5 ~ latest

* Any .net project

## Available on these Platform

* iOS，Android，Windows，Macos


## Ask for help

[Github Discussion](https://github.com/Tencent/puerts/discussions)
