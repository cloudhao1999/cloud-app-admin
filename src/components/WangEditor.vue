<script lang="ts" setup>
import "@wangeditor/editor/dist/css/style.css";
import i18nService from "@/hooks/useI18n";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { IEditorConfig, IDomEditor, IToolbarConfig, i18nChangeLanguage } from "@wangeditor/editor";

interface IProps {
  modelValue?: any;
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: ""
});

const emit = defineEmits(["update:modelValue"]);

watchEffect(() => {
  // 修复语言切换后编辑器显示滞后的问题
  i18nChangeLanguage(i18nService.locale.value);
  nextTick(() => {
    const editor = editorRef.value;
    if (editor == null) return;
    editor.focus();
  });
});

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef<IDomEditor>();

// 内容 HTML
const valueHtml = ref(props.modelValue);

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor;
};

watch([valueHtml], () => {
  emit("update:modelValue", editorRef.value?.getHtml());
});

// 创建工具栏
const mode = ref("default");

const toolbarConfig: Partial<IToolbarConfig> = {
  excludeKeys: ["group-video", "undo", "redo"]
};

const editorConfig: Partial<IEditorConfig> = {
  MENU_CONF: {
    uploadImage: {
      server: `${import.meta.env.VITE_API_URL}/upload/image`
    }
  }
};
</script>

<template>
  <div style="border: 1px solid var(--color-border-base)">
    <Toolbar
      style="border-bottom: 1px solid var(--color-border-base)"
      :editor="editorRef"
      :default-config="toolbarConfig"
      :mode="mode"
    />
    <Editor
      v-model="valueHtml"
      style="height: 500px; overflow-y: hidden"
      :default-config="editorConfig"
      :mode="mode"
      @on-created="handleCreated"
    />
  </div>
</template>

<style lang="scss" scoped>
.w-e-full-screen-container {
  z-index: 9999;
}
</style>
