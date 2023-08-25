import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
    components: {
        Assignment,AssignmentTags,Panel
    },
    template:
    /*html*/
    `<panel v-if="assignments.length" class="w-84">
        <div class="flex justify-between items-start">

            <h1 class="font-bold">
                {{title}}
                <span>({{assignments.length}})</span>
            </h1>

            <button v-show="canHide" @click="$emit('toggle')">&times</button>
        
        </div>

        <assignment-tags
        v-model='currentTag' 
        :initialTags='assignments.map(a => a.tag)'
        >
        
        </assignment-tags>

        <ul class="mx-2">
            <assignment v-for="assignment in filtredAssignments" :key="assignment.id" :assignment="assignment"></assignment>
        </ul>

        <template #footer>Footer goes here</template>
    </panel>`,
    props: {
        assignments: {
            type: Array,
        },
        title: {
            type: String
        },
        canHide: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentTag : 'all'
        }
    },
    computed: {
        filtredAssignments() {

            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag)
        },
       
    },
}