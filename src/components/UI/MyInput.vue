<script>
export default{
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>
     
<style scoped>
 .input {
    width: 100%;
    border: 1px solid rgb(93, 210, 210);
    padding: 10px 15px;
    margin: 7px 0px;
    }
</style>
