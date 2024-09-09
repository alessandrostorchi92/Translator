<script>

import { store, translateLang } from "../store";

export default {

  data() {

    return {

      store,

      sourceLangOptions: [
        { value: "es", label: "🇪🇸" },
        { value: "en", label: "🇬🇧" },
        { value: "fr", label: "🇫🇷" },
        { value: "de", label: "🇩🇪" },
        { value: "it", label: "🇮🇹" },
        { value: "pt", label: "🇵🇹" },
        { value: "ru", label: "🇷🇺" },
        { value: "zh", label: "🇨🇳" },
        { value: "ja", label: "🇯🇵" },
        { value: "ar", label: "🇸🇦" },
      ],

      targetLangOptions: [
        { value: "es", label: "🇪🇸" },
        { value: "en", label: "🇬🇧" },
        { value: "fr", label: "🇫🇷" },
        { value: "de", label: "🇩🇪" },
        { value: "it", label: "🇮🇹" },
        { value: "pt", label: "🇵🇹" },
        { value: "ru", label: "🇷🇺" },
        { value: "zh", label: "🇨🇳" },
        { value: "ja", label: "🇯🇵" },
        { value: "ar", label: "🇸🇦" },
      ],

    };

  },

  methods: {
    translateLang, 
  },

};

</script>

<template>
  <div class="container">
    <div class="input-group py-4">

      <select id="selectSourceLanguages" name="sourceLangOptions" v-model="store.selectedSourceLanguage">
        <option selected disabled :value="{ value: '', label: '🌎' }">🌎</option>

        <option v-for="sourceLangOption in sourceLangOptions" :key="sourceLangOption.value" :value="sourceLangOption">
          {{ sourceLangOption.label }}
        </option>

      </select>

      <button type="button" class="btn btn-primary translate-btn" :disabled="!store.wordsToTranslate || store.wordsToTranslate.trim() === ''" @click="translateLang">Translate</button>

      <select id="selectTargetLanguages" name="targetLangOptions" v-model="store.selectedTargetLanguage">
        <option selected disabled :value="{ value: '', label: '🌎' }">🌎</option>

        <option v-for="targetLangOption in targetLangOptions" :key="targetLangOption .value" :value="targetLangOption">
          {{ targetLangOption .label }}
        </option>

      </select>

    </div>
  </div>
</template>

<style lang="scss" scoped>

.input-group {
  justify-content: center;
}

.translate-btn {
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  cursor: pointer;
  width: 8rem;
  font-weight: bold;
  text-transform: uppercase;
}

#selectSourceLanguages,
#selectTargetLanguages {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 2rem;
  width: 5rem;
  text-align: center;
}

select option {
  font-size: 1rem;
}

</style>
