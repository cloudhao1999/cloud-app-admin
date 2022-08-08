<h1>cloud-app-admin☁️</h1>

<p align="center">
  <a href="https://github.com/vuejs/core">
    <img src="https://img.shields.io/badge/vue-3.2.37-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/vitejs/vite">
    <img src="https://img.shields.io/badge/vite-3.0.4-brightgreen.svg" alt="vite">
  </a>
  <a href="https://github.com/vuejs/pinia">
    <img src="https://img.shields.io/badge/pinia-2.0.17-brightgreen.svg" alt="pinia">
  </a>
  <a href="https://github.com/cloudhao1999/cloud-app-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/cloudhao1999/cloud-app-admin">
  </a>
  <a href="https://github.com/cloudhao1999/cloud-app-admin/releases">
    <img src="https://img.shields.io/github/v/release/cloudhao1999/cloud-app-admin.svg" alt="GitHub release">
  </a>
</p>

## 简介

cloud-app-admin 使用了最新的`vue3.2+` `vite3` `Element-Plus` `TypeScript` `Tailwind CSS`等主流技术开发，希望能和大家一起学习最新前端技术。

## 在线体验

线上地址： [cloud-app-admin](https://cloudhao1999.github.io/cloud-app-admin/)

## 已实现功能

- [x] 路由集成 🧭
- [x] 基本页面权限集成 🔒
- [x] 状态管理集成（Pinia）🍍
- [x] Hooks集成（VueUse）🪝
- [x] ElementPlus集成 🖌️
- [x] Tailwind CSS集成 🌹
- [x] Axios二次封装 📦
- [x] i18n国际化集成 🌍
- [x] 代码规范集成（EditorConfig、Eslint、Prettier、Husky、Lint-staged）📒
- [x] Vxe-table多维度图表组件引入 📈
- [x] 封装常用通知、表格Hooks 🎺
- [x] Echarts图表组件库引入 🪐
- [x] 富文本编辑器引入（WangEditor）📝
- [x] Mock引入 🔍
- [x] 支持暗黑模式 🎆
- [x] 支持动态换肤（CSS Variables方案） 🌈
- [x] unplugin-icons引入，配合unplugin-components，无需注册即可按需访问数千个图标作为组件 😊


## 安装使用

- 获取项目代码

```bash
git clone https://github.com/cloudhao1999/cloud-app-admin.git
```

- 安装依赖

```bash
cd cloud-app-admin

pnpm install

```


- 运行

```bash
pnpm dev
```

## Git 贡献提交规范

项目已经内置angular提交规范，通过cz 代替git commit 命令即可

```bash
pnpm commit
```

## 注意 ⚠️
> 本项目从V1.7版本开始基于vite3构建，由于vite3不再支持node14.18以下版本，使用较低node版本进行安装或启动本项目可能会出现异常。推荐升级至最新稳定版本node16，或使用V1.6版本，V1.6及以下版本使用vite2构建。

## 运行截图

- 登陆页

![login](./screenshot/login.png)

- 首页

![dashboard-light](./screenshot/dashboard-light.png)

- 暗黑模式

![dashboard-dark](./screenshot/dashboard-dark.png)

- 富文本编辑器

  ![editor](./screenshot/editor.png)

- CRUD列表

  ![crud](./screenshot/crud.png)

- 国际化

  ![i18n](./screenshot/i18n.png)

- 多级菜单

  ![nested](./screenshot/nested.png)

- 自适应

![mobile](./screenshot/mobile.png)

## 浏览器支持

本地开发推荐使用`Chrome 90+` 浏览器

支持现代浏览器, 不支持 IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                         not support                          |                       last 2 versions                        |                       last 2 versions                        |                       last 2 versions                        |                       last 2 versions                        |

## Q&A

1. 启动项目进入首页出现401报错怎么回事？

   这是由于时间线组件调用了GitHub的API来获取仓库的commit信息，调用API需要申请token，申请token的方法可参考 [github的token使用方法](https://blog.csdn.net/chengwenyang/article/details/120060010)，token获取后可以在`src/enum/secretEnum.ts`中进行修改，在`TimeLine.vue`组件中，你可以修改 `UserEnum.GITHUB_USER`,`UserEnum.GITHUB_REPO`,` SecretEnum.GITHUB_ACCESS_TOKEN`枚举字段实现监测自己仓库commit信息功能。

2. 登录界面账号密码是多少？

   随便填，但是账号和密码需要遵循校验规则，账号为手机号或标准邮箱格式，密码不低于三位。

   

   

