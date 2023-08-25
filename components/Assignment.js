export default {
    template:
    /*html*/
    `<li class="p-2">
        <label class="mr-2">

            {{ assignment.name }}

            <input type="checkbox" v-model="assignment.complete"/>

        </label>   
    </li>`,
    props: {
        assignment: {
            type: Object
        }
    },
}