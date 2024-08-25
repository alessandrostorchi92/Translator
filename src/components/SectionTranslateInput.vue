<script>

import axios from "axios";
import { store } from "../store";


export default {

  data() {

    return {

      store,

      selectedSourceLanguage: { value: "", label: "🌎" },

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

      selectedTargetLanguage: { value: "", label: "🌎" },

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

      urlApi: "https://api.mymemory.translated.net/get",

    };

  },

  methods: {

    async translateLang() {

      try {

        const response = await axios.get(this.urlApi, {
          params: {
              q: this.store.wordsToTranslate,
              langpair: `${this.selectedSourceLanguage?.value}|${this.selectedTargetLanguage?.value}`
          }
});

        console.log(response.data.responseData.translatedText);

      } catch (error) {

        console.error("Si è verificato un errore durante la richiesta:",error.message);

      } finally {

        console.log("Richiesta effettuata");

      }

    },
    
  },

};

</script>

<template>
  <div class="container">
    <div class="input-group py-4">

      <select id="selectSourceLanguages" name="sourceLangOptions" v-model="selectedSourceLanguage">
        <option selected disabled :value="{ value: '', label: '🌎' }">🌎</option>

        <option v-for="sourceLangOption in sourceLangOptions" :key="sourceLangOption.value" :value="sourceLangOption">
          {{ sourceLangOption.label }}
        </option>

      </select>

      <button type="button" class="btn btn-primary translate-btn" @click="translateLang">Translate</button>

      <select id="selectTargetLanguages" name="targetLangOptions" v-model="selectedTargetLanguage">
        <option selected disabled :value="{ value: '', label: '🌎' }">🌎</option>

        <option v-for="targetLangOption in targetLangOptions" :key="targetLangOption .value" :value="targetLangOption ">
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

#selectSourceLanguages,
#selectTargetLanguages,
.translate-btn {
  padding: 0.8rem;
  border: 1px solid #ccc;
  text-transform: uppercase;
}

.translate-btn {
  font-size: 1rem;
  width: 8rem;
  font-weight: bold;
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
