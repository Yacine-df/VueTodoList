import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentList, AssignmentCreate
    },
    template:
    /*html*/
    `
    <section class="flex gap-8">

        <assignment-list :assignments='inprogress' title='In progress'>

            <assignment-create @add='add'></assignment-create>

        </assignment-list>

        <assignment-list 
            v-show="showCompleted"
            :assignments='completed' 
            title='Completed' 
            can-hide
            @toggle='showCompleted = ! showCompleted'
            >
        </assignment-list>
        
    </section>
    `,
    data() {
        return {
            
            assignments: [],
            showCompleted: true

        }
    },
    computed: {
        inprogress(){
            return this.assignments.filter(a => ! a.complete)
        },
        completed(){
            return this.assignments.filter(a => a.complete)
        }
    },
    created() {
        fetch('http://localhost:3000/assignments')
        .then(response => response.json())
        .then(assignments => {this.assignments = assignments});
    },
    methods: {
        add(name) {
            if(name != ''){
                this.assignments.push({
                    id : this.assignments.length + 1,
                    name : name,
                    complete : false
                });

            }
        }
    },
}