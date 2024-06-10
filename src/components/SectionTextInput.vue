<script>

export default {

    data() {
        return {
            wordToTranslate: "",
        };
    },

    computed: {
        charCount() {
            return this.wordToTranslate.length;
        },
    },


}

</script>

<template>

    <div class="italianwordsToTranslate-container">

        <textarea class="italianWordsToTranslate-input input-italian-border"
            placeholder="Inserisci il testo da tradurre..." v-model="wordToTranslate" maxlength="60"></textarea>

        <span class="charCount-input">{{ charCount }}/60</span>

    </div>

</template>


<style lang="scss" scoped>
@use 'src/styles/partials/mixins.scss' as *;

.italianwordsToTranslate-container {

    padding-top: 4rem;
    position: relative;
    @include flex-center;

}

.italianWordsToTranslate-input {

    flex-basis: 85%;
    padding: 2rem;
    font-size: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0.8rem;

}

.input-italian-border {

    border-style: solid;
    border-width: 2.5px;
    border-color: green white red white;


}

.charCount-input {

    position: absolute;
    bottom: 10px;
    right: 50px;
    font-size: 0.6rem;
    color: gray;
}
</style>
