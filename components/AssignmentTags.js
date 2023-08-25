export default {
    template: 
    /*html*/
    `<div class="flex gap-2 text-xs mt-4 font-bold">
        <button 
        @click="$emit('update:modelValue', tag)"
        v-for="tag in tags" 
        class="border border-black rounded px-2 py-1"
        :class ="{
            'border border-blue-500 text-blue-500': tag === modelValue
        }"
        >

            {{ tag }}
            
        </button>
    </div>`,
    props: {

        initialTags: {
            type: Array,
        },
        modelValue: {
            type: String
        }

    },
    computed: {
        tags() {

            //Spread syntax, put the item of the set as item in the new array
            return ['all', ...new Set(this.initialTags)];
            
        }
    },
}