<script>

import { store } from "../store";

export default {

    data() {

        return {

            store,

        };

    },

    computed: {
        charCount() {
            return this.store.wordsToTranslate.length;
        },
        appliedBorder() {
            switch (this.store.selectedSourceLanguage?.value) {

                case 'es':
                    return 'spanish-border'
                
                case 'en':
                    return 'english-border';

                case 'fr':
                    return 'french-border';

                case 'de':
                    return 'german-border';

                case 'it':
                    return 'italian-border ';

                case 'pt':
                    return 'portuguese-border';

                case 'ru':
                    return 'russian-border';

                case 'zh':
                    return 'chinese-border';

                case 'ja':
                    return 'japanese-border';

                case 'ar':
                    return 'arabic-border'
                    
                default:
                    return ''; 
                    
            }
        }
    },

}

</script>

<template>

    <div class="wordsToTranslate-container mt-4">

        <textarea class="wordsToTranslate-input flag-border-style" :class="appliedBorder" placeholder="Please enter the text to be translated..."
            v-model="store.wordsToTranslate" maxlength="60">
        </textarea>

        <span class="charCount-input" :class="{ 'text-danger': store.wordsToTranslate.length === 60 }">
            {{ charCount }}/60</span>

    </div>

</template>


<style lang="scss" scoped>

.wordsToTranslate-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    min-width: 390px;
    container-type: inline-size;
    container-name: text-container; 
}

.wordsToTranslate-input {
    flex-basis: 80%;
    padding: 3rem;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
}

.flag-border-style {
    border-style: solid;
    border-width: 3.5px;
}

.italian-border {
    border-color: green white red white;
}

.spanish-border {
    border-color: red yellow red yellow;
}

.english-border {
    border-color: blue white red white;
}

.french-border {
    border-color: blue white red white;
}

.german-border {
    border-color: black red yellow red;
}

.portuguese-border {
    border-color: green white red yellow;
}

.russian-border {
    border-color: white blue red blue;
}

.chinese-border {
    border-color: red yellow red yellow;
}

.japanese-border {
    border-color: white red white red;
}

.arabic-border {
    border-color: black white green white;
}

.charCount-input {
    position: absolute;
    bottom: 1rem;
    font-size: 0.8rem;
    color: rgb(93, 87, 87);
}

@container text-container (min-width: 1200px) {
    .wordsToTranslate-input {
        font-size: 1.5rem;
    }
}

</style>
