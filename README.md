<img src="docs/rainbow.png" width="120" />

# 该项目 fork 自[iconfont-tools](https://github.com/HuaRongSAO/iconfont-tools)

> 由于 iconfont-tools 解析 codesign 地址时存在问题，故 fork 解决

# codesign-tools

适用于 codesign 彩色图标的提取

<div>
<img src="https://raw.githubusercontent.com/ohzsh/codesign-tools/HEAD/docs/codesign.png" alt="drawing" width="60" style="margin-left: 10px;"/>
<img src="https://raw.githubusercontent.com/ohzsh/codesign-tools/HEAD/docs/snowflake-skinny.png" alt="drawing" width="60" style="margin-left: 10px;"/>
<img src="https://raw.githubusercontent.com/ohzsh/codesign-tools/HEAD/docs/temperature-thermometerhot.png" alt="drawing" width="60" style="margin-left: 10px;"/>
<img src="https://raw.githubusercontent.com/ohzsh/codesign-tools/HEAD/docs/sunrise-skinnywave.png" alt="drawing" width="60" style="margin-left: 10px;display:"/>
</div>

## 特性

- 生成原生通用组件 icon
- 生成跨平台可用的 codesign-weapp.css 文件
- 本地生产，也可以远程生成

## 如何安装

方式一：

> 需要下载，codesign 的字体文件包，将其解压

```shell

npm i -g codesign-tools

cd project/asset/font_hiytajitqeu // 进入图标文件所在文件夹

codesign-tools  // 生成小程序专用文件

```

方式二：

> 无需下载字体包，但是需要在 codesign 生成在线链接

<img src="https://raw.githubusercontent.com/ohzsh/codesign-tools/HEAD/docs/url.png" alt="drawing" width="60%"/>

```shell

npm i -g codesign-tools

# 复制在线链接 //at.alicdn.com/t/font_717026_fqwb5om0rvk.js

codesign-tools --from //cdn3.codesign.qq.com/icons/xxxxxxx/latest/iconfont.js --to ./output/dir-path

```

参数：

- --from: codesign 在线链接
- --to： 生成目标路径，可以是绝对路径，也可以是相对路径。 dome： /home/chr/project/style ./style

## 小程序 如何使用

- 1.直接引用样式

```HTML
<view class="h-icon h-icon-your-iconName"></view>
```

- 2.使用组件 icon

page.json

```json
{
  "usingComponents": {
    "icon": "/path/to-icon/icon"
  }
}
```

page.wxml

```HTML
<icon name="IconName" size="{{24}}"></icon>
```

## 实现原理

[click](./docs/README.md)

## 演示

![img](./docs/cli.gif)
