import { reactive } from "vue";

export const store = reactive({
    wordsToTranslate: "",
    selectedSourceLanguage: { value: "", label: "🌎" },
    selectedTargetLanguage: { value: "", label: "🌎" },
});
