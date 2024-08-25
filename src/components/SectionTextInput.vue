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
    },


}

</script>

<template>

    <div class="wordsToTranslate-container mt-5">

        <textarea class="wordsToTranslate-input" placeholder="Please enter the text to be translated..."
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
}

.wordsToTranslate-input {
    flex-basis: 85%;
    padding: 4rem;
    text-align: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
}

.italian-border {
    border-style: solid;
    border-width: 2.5px;
    border-color: green white red white;
}

.charCount-input {
    position: absolute;
    bottom: 1rem;
    font-size: 0.8rem;
    color: rgb(93, 87, 87);
}
</style>
