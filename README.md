# YouTube desktop for Mac OS based on electron

由于YouTube没有官方Mac客户端，每次刷YouTube都必须开浏览器看，非常不方便。因此我们可以用electron打包一个客户端来使用。

## 环境依赖

- nodejs==18.7.0
- npm==8.15.0

## 安装方法

**注意：release仅支持架构为arm64的Mac OS**

从[releases](https://github.com/windshadow233/youtube-desktop-for-MacOS/releases)中下载dmg或zip文件即可轻松安装～

## 构建方法

```shell
git clone https://github.com/windshadow233/youtube-desktop-for-MacOS
cd youtube-desktop-for-MacOS
npm install
npm run make
```

然后可在out路径下找到打包完的app。
