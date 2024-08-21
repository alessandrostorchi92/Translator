<script>

import axios from "axios";

export default {

  data() {

    return {

      selectedFlagOption: null,

      languageOptions: [
        { value: "es", label: "🇪🇸" },
        { value: "en", label: "🇬🇧" },
        { value: "fr", label: "🇫🇷" },
        { value: "de", label: "🇩🇪" },
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
                q: this.text, // Devo inserire la variabile dell'altro componente: wordsToTranslate
                langpair: `it|${this.selectedFlagOption?.value}`
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
      <select
        id="selectLanguages"
        name="languageOptions"
        v-model="selectedFlagOption"
      >
        <option selected disabled :value="null">🌎</option>

        <option
          v-for="languageOption in languageOptions"
          :key="languageOption.value"
        >
          {{ languageOption.label }}
        </option>
      </select>

      <button
        type="button"
        class="btn btn-primary translate-btn"
        @click="translateLang"
      >
        Translate
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-group {
  justify-content: center;
}

#selectLanguages,
.translate-btn {
  padding: 0.8rem;
  border: 1px solid #ccc;
  text-transform: uppercase;
}

#selectLanguages {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 2rem;
  width: 5.5rem;
  text-align: center;
}

select option:first-child {
  font-size: 1rem;
}

.translate-btn {
  font-size: 1rem;
  width: 8rem;
  font-weight: bold;
}
</style>
