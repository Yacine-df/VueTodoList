export default {
    template:
    /*html*/
    `<form v-on:submit.prevent='add()'>
        <div class="flex">
            <input type='text' v-model='newAssignment' class='border border-black rounded mr-2 mt-2 px-2 py-1' />
            <button class='bg-gray-800 px-2  rounded text-white'>Add</button>
        </div>
    </form>`,
    data() {
        return {
            newAssignment : ''
        }
    },
    methods: {
        add(){

            this.$emit('add', this.newAssignment);
            
            this.newAssignment = '';

        }
    },
}