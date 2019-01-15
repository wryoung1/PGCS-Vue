<!--
<template>
    <div>
        <h2>Worker Info Here!</h2>

        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <label>Work Days:</label><br>
                    <input type="number" v-model="workDays"><br>
                    <label>Leave Hours:</label><br>
                    <input type="number" v-model="leaveHours"><br>
                    <p>Actual Work Time: {{ finalNum() }}</p>
                </div>
                <div class="col-sm">
                    <label for="snap">SNAP Worked?:
                        <input
                                type="checkbox"
                                id="snap"
                                value="Snap Cases Worked"
                                v-model="progWorked"
                        /></label><br>
                    <label for="mc">Medicaid Worked?:
                        <input
                                type="checkbox"
                                id="mc"
                                value="Medicaid Cases Worked"
                                v-model="progWorked"
                        /></label><br>
                    <label for="tea">TEA Worked?:
                        <input
                                type="checkbox"
                                id="tea"
                                value="Tea Cases Worked"
                                v-model="progWorked"
                        /></label><br>
                    <label for="magi">MAGI Worked?:
                        <input
                                type="checkbox"
                                id="magi"
                                value="MAGI Cases Worked"
                                v-model="progWorked"
                        /></label>
                </div>

            </div>
        </div>
        <hr>
        <div class="panel-body">
            <div>Programs Worked:
                <ul>
                    <li v-for="item in progWorked">{{item}}</li>
                </ul>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    // import { eventBus } from '../main'

    export default {
        props: ['countableDays', 'snapMarker'],
        data() {
            return {
                workDays: 0,
                leaveHours: 0,
                progWorked: [],
                snapChecked: false,

            }
        },
        methods: {
            finalNum: function () {
                this.outcome = this.workDays - this.leaveHours / 8;
                this.snapChecked = this.progWorked;
                this.$emit('workTimeWasEdited', this.outcome);
                this.$emit('snapMarkerWasEdited', this.snapChecked);
                return this.outcome;
                //        eventBus.$emit('workDays', this.outcome);
            },
        }
    }
</script>

<style>

</style>
-->
