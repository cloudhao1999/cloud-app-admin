<script setup lang="ts">
import Card from "./components/Card.vue";
import { TagColorEnum } from "@/enum/TagEnum";
import { Collection, Pouring, BrushFilled, Star } from "@element-plus/icons-vue";

const activities = [
  {
    content: ["style: 面板样式调整", "style: 样式微调"],
    timestamp: "2022-05-25",
    color: TagColorEnum.STYLE,
    icon: Star
  },
  {
    content: [
      "feat: 增加登陆页重定向功能",
      "feat: header组件增加全屏按钮",
      "feat: 首页卡片组件完成",
      "feat: 封装Card组件，完成排行榜列表",
      "feat: 完成时间线列表组件"
    ],
    timestamp: "2022-05-25",
    color: TagColorEnum.FEAT,
    icon: BrushFilled
  },
  {
    content: ["docs: 删除不需要的文件", "docs: 添加git忽略项", "docs: 同步文件"],
    timestamp: "2022-05-24",
    color: TagColorEnum.DOCS,
    icon: Collection
  },
  {
    content: [
      "feat: 封装vee-validate插件，完成登陆页表单校验",
      "feat: 添加vite-plugin-html插件",
      "feat: Create LICENSE"
    ],
    timestamp: "2022-05-24",
    color: TagColorEnum.FEAT,
    icon: BrushFilled
  },
  {
    content: ["style: 暗黑模式自定义样式调整"],
    timestamp: "2022-05-23",
    color: TagColorEnum.STYLE,
    icon: Star
  },
  {
    content: ["docs: rEADME文档更新"],
    timestamp: "2022-05-23",
    color: TagColorEnum.DOCS,
    icon: Collection
  },
  {
    content: [
      "fix: 修复菜单高亮与路由选项不同步问题，修复首页重定向失败问题",
      "fix: 修复错误页面在重定向失败后展示的样式异常的问题",
      "fix: 修复退出登录后路由无法正确跳转的问题",
      "fix: 修复小屏幕下的页面错位问题",
      "fix: 修复element-ui样式在小屏幕错乱的问题",
      "fix: 修复未登录时首页刷新失败的问题，修复历史记录可以关闭当前页的问题"
    ],
    timestamp: "2022-05-23",
    color: TagColorEnum.FIX,
    icon: Pouring
  },
  {
    content: [
      "feat: 历史记录组件根据路由记录高亮显示并实现切换",
      "feat: 面包屑组件支持路由页面内容同步",
      "feat: 管理界面自适应功能实现",
      "feat: 系统适配暗黑模式，支持无缝切换样式",
      "feat: 优化动画效果"
    ],
    timestamp: "2022-05-23",
    color: TagColorEnum.FEAT,
    icon: BrushFilled
  },
  {
    content: ["style: 标题调整'="],
    timestamp: "2022-05-20",
    color: TagColorEnum.STYLE,
    icon: Star
  },
  {
    content: ["docs: 更新README文件"],
    timestamp: "2022-05-20",
    color: TagColorEnum.DOCS,
    icon: Collection
  },
  {
    content: [
      "fix: 修复Element-plus样式丢失问题，封装消息弹出和提示hooks",
      "fix: 修复路由刷新时错误的定向"
    ],
    timestamp: "2022-05-20",
    color: TagColorEnum.FIX,
    icon: Pouring
  },
  {
    content: [
      "feat: 顶部栏添加部分功能，增加历史记录组件，左侧菜单栏顶部增加logo ",
      "feat: 引入vueuse，动态获取并解析时间",
      "feat: 新增错误页面（404，403，500），路由按模块初步梳理",
      "feat: 将路由元信息转化为左侧的菜单",
      "feat: 登录获取token并获取用户信息，建立用户全局store",
      "feat: 增加路由守卫，刷新时重新获取用户信息",
      "feat: 添加内容加载时的loading页面"
    ],
    timestamp: "2022-05-20",
    color: TagColorEnum.FEAT,
    icon: BrushFilled
  },
  {
    content: ["docs: 更新README文件"],
    timestamp: "2022-05-19",
    color: TagColorEnum.DOCS,
    icon: Collection
  },
  {
    content: [
      "feat: 登录页面新增、路由页面文件结构梳理",
      "feat: 引入unplugin-icons插件，配合自动引入实现多种图标源聚合",
      "feat: 首页布局初步实现"
    ],
    timestamp: "2022-05-19",
    color: TagColorEnum.FEAT,
    icon: BrushFilled
  },
  {
    content: ["docs: 修改README"],
    timestamp: "2022-05-18",
    color: TagColorEnum.DOCS,
    icon: Collection
  },
  {
    content: ["fix: 修复自动引入组件类型提示错误的问题"],
    timestamp: "2022-05-18",
    color: TagColorEnum.FIX,
    icon: Pouring
  },
  {
    content: [
      "feat: 增加mock支持，梳理插件的引入，修改部分目录结构",
      "feat: 增加vxe-table支持,增加styleImport插件",
      "feat: 添加nprogress加载依赖"
    ],
    timestamp: "2022-05-18",
    color: TagColorEnum.FEAT,
    icon: BrushFilled
  },
  {
    content: ["docs: 文档修改", "docs: 修改文件定义内容"],
    timestamp: "2022-05-17",
    color: TagColorEnum.DOCS,
    icon: Collection
  },
  {
    content: ["fix(修改配置文件信息): 修改配置文件信息"],
    timestamp: "2022-05-17",
    color: TagColorEnum.FIX,
    icon: Pouring
  },
  {
    content: [
      "feat(初始化项目): 初始化项目工程，新增路由、状态管理、提交前检查等插件",
      "feat: 添加tailwindCSS依赖"
    ],
    timestamp: "2022-05-17",
    color: TagColorEnum.FEAT,
    icon: BrushFilled
  }
];
</script>

<template>
  <Card>
    <template #title> 时间线 </template>
    <template #content>
      <div class="time-line-box h-[260px] overflow-y-auto px-6 py-5">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            style="--el-timeline-node-size-large: 18px"
            size="large"
            :icon="activity.icon"
            :color="activity.color"
            :timestamp="activity.timestamp"
            placement="top"
          >
            <el-card>
              <p v-for="(c, i) in activity.content" :key="i" class="leading-5">
                {{ i + 1 + "、 " + c }}
              </p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.time-line-box :deep(.el-timeline-item__node--large) {
  left: -4px !important;
}
</style>
