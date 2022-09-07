<script setup lang="ts">
import { UserEnum } from "@/enum/userEnum";
import { contentType, fetchCommits, fetchMockCommits, GithubCommitResultType } from "@/api/github";
import { useDateFormat } from "@vueuse/core";
import { useMessage } from "@/hooks/useMessage";
import { SecretEnum } from "@/enum/secretEnum";
import { openNewTab } from "@/utils/web";
import { useI18n } from "vue-i18n";
import { tagsType, tagsTypeMap } from "./modules/timeline";
import { parseEnv } from "../../../vite/util";

const { t } = useI18n();
const activitieList = ref<Record<string, timeLineType>>({});
const errorMessage = ref<string>("");
const loading = ref(false);

type timeLineType = {
  content: Array<contentType>;
  timestamp: string;
  color?: string;
  icon?: any;
};

type mapStateType = { date: string; message: string; html_url: string };

// 筛选所需的数据
function filterCommitByType(commits: GithubCommitResultType[]): Array<mapStateType> {
  return commits.map((c) => {
    return {
      date: unref(useDateFormat(c.commit.author.date, "YYYY-MM-DD")),
      message: c.commit.message,
      html_url: c.html_url
    };
  });
}

// 正则获取冒号前的标识符
function subColon(message: string) {
  try {
    return message.match(/(\S*):/)![1];
  } catch {
    return "unkonw";
  }
}

// 分好类的数据加icon和color
function addTagsByType(s: mapStateType, key: string) {
  let keywords: tagsType = subColon(s.message) as tagsType;
  keywords = tagsTypeMap.get(keywords) ? keywords : "unkonw";

  activitieList.value[key].color = tagsTypeMap.get(keywords)![0];
  activitieList.value[key].icon = tagsTypeMap.get(keywords)![1];
}

// 转化成需要的数据结构
function transformCommitList(state: Array<mapStateType>) {
  state.forEach((s) => {
    let key = s.date + subColon(s.message);
    if (activitieList.value[key]) {
      activitieList.value[key].content.push({
        message: s.message,
        html_url: s.html_url
      });
    } else {
      activitieList.value[key] = {
        content: [{ message: s.message, html_url: s.html_url }],
        timestamp: s.date
      };
      addTagsByType(s, key);
    }
  });
}

async function onLoad() {
  loading.value = true;
  activitieList.value = {};
  errorMessage.value = "";
  try {
    /**
     * GITHUB_ACCESS_TOKEN 访问GitHub API的密钥，需要改为自己的，如何获取可自行搜索
     * GITHUB_USER 为自己的GitHub用户名
     * GITHUB_REPO 为你自己的仓库名称
     *  */
    let res = null;
    // 线上环境使用mock数据
    if (parseEnv(import.meta.env).VITE_MOCK_ENABLE) {
      res = await fetchCommits(
        UserEnum.GITHUB_USER,
        UserEnum.GITHUB_REPO,
        SecretEnum.GITHUB_ACCESS_TOKEN
      );
    } else {
      res = await fetchMockCommits();
    }
    const mapState = filterCommitByType(res.data);
    transformCommitList(mapState);
  } catch (e: any) {
    errorMessage.value = e.message;
    useMessage("error", e.message);
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  onLoad();
});
</script>

<template>
  <Card :err-capture="!!errorMessage">
    <template #title> {{ t("page.common.dashboard.card.timeline") }} </template>
    <template #actions>
      <i-mdi-refresh
        class="cursor-pointer text-gray-400 dark:text-white hover:rotate-180 duration-500"
        style="font-size: 1.2em"
        @click="() => onLoad()"
      />
    </template>
    <template #error>
      <div class="flex justify-center items-center h-[220px] w-8/12 text-center mx-auto">
        <p class="text-lg font-semibold text-gray-500">
          {{ `${t("page.common.dashboard.card.timeline.woops")}${errorMessage}` }}
        </p>
      </div>
    </template>
    <template #content>
      <div v-loading="loading" class="time-line-box h-[250px] overflow-y-auto px-6 py-5">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in Object.values(activitieList)"
            :key="index"
            style="--el-timeline-node-size-large: 18px"
            size="large"
            :icon="activity.icon"
            :color="activity.color"
            :timestamp="activity.timestamp"
            placement="top"
          >
            <Card empty auto-height>
              <template #content>
                <div class="p-3 overflow-auto">
                  <p
                    v-for="(c, i) in activity.content"
                    :key="i"
                    class="leading-5"
                    @click="openNewTab(c.html_url)"
                  >
                    {{ i + 1 + "、 " }}
                    <span class="hover:cursor-pointer hover:underline decoration-1">
                      {{ c.message }}
                    </span>
                  </p>
                </div>
              </template>
            </Card>
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
