export default {

    template:
    /*html*/
    `
    <div :class="{
        'p-4 border rounded-lg': true,
        'bg-gray-700 border-gray-600 text-white': theme == 'dark',
        'bg-gray-200 border-gray-100 text-black': theme == 'light'
    }">

        <h2 class="font-bold mb-2" v-if="$slots.heading">
            <slot name="heading"></slot>
        </h2>

        <slot></slot>

        <footer class="border-gray-600 border-t mt-4 pt-4 text-sm">
            <slot name="footer"></slot>
        </footer>
    </div>
    `,
    props: {
        theme: {
            type: String,
            default: 'dark'
        },
    },

}