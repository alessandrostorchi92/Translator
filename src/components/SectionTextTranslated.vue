<script>

import { store, translateLang } from "../store";

export default {

    data() {

        return {

            store,

        }

    },


    computed: {
        
        appliedBorder() {
            switch (this.store.selectedTargetLanguage?.value) {

                case 'es':
                    return 'spanish-border'
                
                case 'en':
                    return 'english-border';

                case 'fr':
                    return 'french-border';

                case 'de':
                    return 'german-border';

                case 'it':
                    return 'italian-border';

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

    <div class="textTranslated-container">

        <textarea class="wordsToTranslate-input flag-border-style" :class="appliedBorder">{{ store.translatedText }}</textarea>

    </div>



</template>

<style lang="scss" scoped>

.textTranslated-container {
    display: flex;
    justify-content: center;
    max-width: 390px; 
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

</style>