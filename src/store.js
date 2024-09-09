import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    wordsToTranslate: "",
    selectedSourceLanguage: { value: "", label: "🌎" },
    selectedTargetLanguage: { value: "", label: "🌎" },
    translatedText: ""
});

export const translateLang =  async () => {

    const urlApi = "https://api.mymemory.translated.net/get"; 

    try {

        const response = await axios.get(urlApi, {
            params: {
                q: store.wordsToTranslate,
                langpair: `${store.selectedSourceLanguage?.value}|${store.selectedTargetLanguage?.value}`
            }
        });

        store.translatedText = response.data.responseData.translatedText;

        console.log(urlApi, {
            params: {
                q: store.wordsToTranslate,
                langpair: `${store.selectedSourceLanguage?.value}|${store.selectedTargetLanguage?.value}`
            }
        });

    } catch (error) {

        console.error("Si è verificato un errore durante la richiesta:",error.message);

    } finally {

        console.log("Richiesta effettuata");

    }

}

export const resetInputs = () => {
    store.wordsToTranslate = "";
    store.translatedText = "";
    store.selectedSourceLanguage = { value: "", label: "🌎" };
    store.selectedTargetLanguage = { value: "", label: "🌎" };
}

