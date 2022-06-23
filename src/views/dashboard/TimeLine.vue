<script setup lang="ts">
import { UserEnum } from "@/enum/userEnum";
import { TagColorEnum } from "@/enum/tagsEnum";
import { fetchCommits, GithubCommitResultType } from "@/api/github";
import { Collection, Pouring, BrushFilled, Star } from "@element-plus/icons-vue";
import { onMounted, ref, unref } from "vue";
import { useDateFormat } from "@vueuse/core";
import { useMessage } from "@/hooks/useMessage";
import { SecretEnum } from "@/enum/secretEnum";
import { useI18n } from "vue-i18n";
import { shallowRef } from "vue";

const { t } = useI18n();
const activitieList = ref<Record<string, timeLineType>>({});
const loading = ref(false);

type timeLineType = {
  content: string[];
  timestamp: string;
  color?: string;
  icon?: any;
};

type mapStateType = { date: string; message: string };

// 筛选所需的数据
function filterCommitByType(commits: GithubCommitResultType[]): Array<mapStateType> {
  return commits.map((c) => {
    return {
      date: unref(useDateFormat(c.commit.author.date, "YYYY-MM-DD")),
      message: c.commit.message
    };
  });
}

// 正则获取冒号前的标识符
function subStr(message: string) {
  try {
    return message.match(/(\S*):/)![0];
  } catch {
    return "feat:";
  }
}

// 分好类的数据加icon和color
function addTagsByType(s: mapStateType, key: string) {
  if (s.message.includes("feat")) {
    activitieList.value[key].color = TagColorEnum.FEAT;
    activitieList.value[key].icon = shallowRef(BrushFilled);
  } else if (s.message.includes("fix")) {
    activitieList.value[key].color = TagColorEnum.FIX;
    activitieList.value[key].icon = shallowRef(Pouring);
  } else if (s.message.includes("docs")) {
    activitieList.value[key].color = TagColorEnum.DOCS;
    activitieList.value[key].icon = shallowRef(Collection);
  } else if (s.message.includes("style")) {
    activitieList.value[key].color = TagColorEnum.STYLE;
    activitieList.value[key].icon = shallowRef(Star);
  } else {
    activitieList.value[key].color = TagColorEnum.FEAT;
    activitieList.value[key].icon = shallowRef(BrushFilled);
  }
}

// 转化成需要的数据结构
function transformCommitList(state: Array<mapStateType>) {
  state.forEach((s) => {
    let key = s.date + subStr(s.message);
    if (activitieList.value[key]) {
      activitieList.value[key].content.push(s.message);
    } else {
      activitieList.value[key] = {
        content: [s.message],
        timestamp: s.date
      };
      addTagsByType(s, key);
    }
  });
}

async function onLoad() {
  loading.value = true;
  activitieList.value = {};
  try {
    /**
     * GITHUB_ACCESS_TOKEN 访问GitHub API的密钥，需要改为自己的，如何获取可自行搜索
     * GITHUB_USER 为自己的GitHub用户名
     * GITHUB_REPO 为你自己的仓库名称
     *  */
    const res = await fetchCommits(
      UserEnum.GITHUB_USER,
      UserEnum.GITHUB_REPO,
      SecretEnum.GITHUB_ACCESS_TOKEN
    );
    const mapState = filterCommitByType(res.data);
    transformCommitList(mapState);
  } catch (e: any) {
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
  <Card>
    <template #title> {{ t("page.common.dashboard.card.timeline") }} </template>
    <template #actions>
      <i-mdi-refresh
        class="cursor-pointer text-gray-400 dark:text-white hover:rotate-180 duration-500"
        style="font-size: 1.2em"
        @click="() => onLoad()"
      />
    </template>
    <template #content>
      <div v-loading="loading" class="time-line-box h-[260px] overflow-y-auto px-6 py-5">
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
