<template>
    <div class="container-fluid">
        <div class="container">
            <h2>Worker Information</h2>
            <label>Worker Being Reviewed:</label>
            <input type="text" class="form-control" v-model="workerName">
            <label>AASIS#:</label>
            <input type="number" class="form-control" v-model="workerNumber">
            <label>Review Month:</label>
            <!--<input type="text" class="form-control" v-model="reviewMonth">-->
            <select class="form-control" required v-model="reviewMonth">
                <option selected disabled>Select One...</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
        </div>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col col-lg-auto">
                    <div class="card bg-light md-4" style="max-width: 18rem;">
                        <div class="card-header"><h5>Available Work Time</h5></div>
                        <div class="card-body">
                            <label>Work Days:</label><br>
                            <input type="number" class="form-control" v-model="workDays"><br>
                            <label>Leave Hours:</label><br>
                            <input type="number" class="form-control" v-model="leaveHours"><br>
                            <p>Actual Work Time: <br> {{ finalNum() }}/days</p>

                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light md-4" style="max-width: 18rem; min-height: 22rem;">
                        <div class="card-header"><h5>Review Info:</h5></div>
                        <div class="card-body">
                            <label>Supervisor Completing Review:</label><br>
                            <p>{{ checkCookie() }}</p>
                            <label>Review Date:</label><br>
                            <p>{{ dateFiller() }}</p>
                            <p>Review Type: MONTHLY</p>
                            <p>Review Month: {{ reviewMonth }}</p>
                            <p></p>

                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light md-4" style="max-width: 18rem; min-height: 22rem">
                        <div class="card-header"><h5>Programs Worked</h5></div>
                        <div class="card-body">
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
            </div>
        </div>
        <hr>
        <!--        <div class="panel-body">
                    <div>Programs Worked:
                        <ul>
                            <li v-for="item in progWorked">{{item}}</li>
                        </ul>
                    </div>
                </div>
                <hr>-->
        <div class="container">
            <div class="row">
                <div class="col col-lg-auto">
                    <div class="card bg-light md" style="max-width: 24rem;">
                        <div class="card-header"><h5>Supplemental Reporting:</h5></div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="wkrCalls">Phone Calls Received:
                                    <input
                                            type="number"
                                            class="form-control"
                                            id="wkrCalls"
                                            value="0"
                                            v-model="wkrCalls"
                                    /></label><br>
                                <label for="wkrCallTime">Phone Calls Time Spent:
                                    <input
                                            type="number"
                                            class="form-control"
                                            id="wkrCallTime"
                                            value="0"
                                            v-model="wkrCallTime"
                                    /></label><br>
                                <label for="scanningCount">Scanning Volume:
                                    <input
                                            type="number"
                                            class="form-control"
                                            id="scanningCount"
                                            value="0"
                                            v-model="scanningCount"
                                    /></label><br>
                                <label for="wkrAssistance">Assisting Others:
                                    <input
                                            type="number"
                                            class="form-control"
                                            id="wkrAssistance"
                                            value="0"
                                            v-model="wkrAssistance"
                                    /></label>
                                <label for="wkrMentoring">Mentoring Time Spent:
                                    <input
                                            type="number"
                                            class="form-control"
                                            id="wkrMentoring"
                                            value="0"
                                            v-model="wkrMentoring"
                                    /></label><br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-auto">
                    <div class="card bg-light md" style="min-width: 24rem;">
                        <div class="card-header"><h5>Supplemental Reporting:</h5></div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="legQuestions">Legislative Inquiries:
                                    <input
                                            type="number"
                                            class="form-control"
                                            id="legQuestions"
                                            value="0"
                                            v-model="legQuestions"
                                    /></label><br>
                                <label for="coQuestions">Central Office Inquiries:
                                    <input
                                            type="number"
                                            class="form-control"
                                            id="coQuestions"
                                            value="0"
                                            v-model="coQuestions"
                                    /></label><br>
                                <label for="numVisits">Client Office Visits:
                                    <input
                                            type="number"
                                            class="form-control"
                                            id="numVisits"
                                            value="0"
                                            v-model="numVisits"
                                    /></label><br>
                                <label for="timeVisits">Office Visits Time Spent:
                                    <input
                                            type="number"
                                            class="form-control"
                                            id="timeVisits"
                                            value="0"
                                            v-model="timeVisits"
                                    /></label><br>
                                <label for="wkrHearings">Fair Hearings Time Spent:
                                    <input
                                            type="number"
                                            class="form-control"
                                            id="wkrHearings"
                                            value="0"
                                            v-model="wkrHearings"
                                    /></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <h5>Comments</h5>
                </div>
                <div class="card-body">
                    <textarea
                            class="form-control"
                            id="wkrComments"
                            rows="10"
                            value="Type Notes Here..."
                            v-model="wkrComments"
                    ></textarea>
                </div>
            </div>
        </div>
        <hr>
        <div class="float-right">
            <router-link to="/">
                <button class="btn btn-secondary">Back</button>
            </router-link>
            <router-link to="/Accuracy">
                <button class="btn btn-primary" @click="updateMonth">Next</button>
            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['countableDays', 'snapMarker'],
        data() {
            return {
                workDays: this.$store.state.availableWorkDays,
                leaveHours: this.$store.state.leaveTimeHours,
                workerName: this.$store.state.workerName,
                workerNumber: this.$store.state.workerNumber,
                reviewMonth: this.$store.state.reviewMonth,
                wkrCalls: this.$store.state.wkrCalls,
                wkrCallTime: this.$store.state.wkrCallTime,
                scanningCount: this.$store.state.scanningCount,
                wkrAssistance: this.$store.state.wkrAssistance,
                wkrMentoring: this.$store.state.wkrMentoring,
                legQuestions: this.$store.state.legQuestions,
                coQuestions: this.$store.state.coQuestions,
                numVisits: this.$store.state.numVisits,
                timeVisits: this.$store.state.timeVisits,
                wkrHearings: this.$store.state.wkrHearings,
                wkrComments: this.$store.state.wkrCommentary,
                progWorked: [],
                snapChecked: false,

            }
        },
        methods: {
            finalNum: function () {
                let a = this.workDays - this.leaveHours / 8;
                let b = this.workDays;
                let c = this.leaveHours;
                let d = this.workerName;
                let e = this.workerNumber;
                let f = this.wkrCalls;
                let g = this.wkrCallTime;
                let h = this.scanningCount;
                let i = this.wkrAssistance;
                let j = this.wkrMentoring;
                let k = this.legQuestions;
                let l = this.coQuestions;
                let m = this.numVisits;
                let n = this.timeVisits;
                let o = this.wkrHearings;
                let p = this.wkrComments;
                this.$store.state.availableWorkTime = a;
                this.$store.state.availableWorkDays = b;
                this.$store.state.leaveTimeHours = c;
                this.$store.state.workerName = d;
                this.$store.state.workerNumber = e;
                this.$store.state.wkrCalls = f;
                this.$store.state.wkrCallTime = g;
                this.$store.state.scanningCount = h;
                this.$store.state.wkrAssistance = i;
                this.$store.state.wkrMentoring = j;
                this.$store.state.legQuestions = k;
                this.$store.state.coQuestions = l;
                this.$store.state.numVisits = m;
                this.$store.state.timeVisits = n;
                this.$store.state.wkrHearings = o;
                this.$store.state.wkrCommentary = p;
                return a;
            },
            setCookie(cname, cvalue, exdays) {
                let d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                let expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            },
            getCookie(cname) {
                let name = cname + "=";
                let ca = document.cookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            },
            checkCookie() {
                let user = this.getCookie("username");
                if (user != "") {
                    this.$store.state.supervisorCompleting = user;
                    let tD = new Date();
                    let datestr = (tD.getMonth() + 1) + "/" + tD.getDate() + "/" + tD.getFullYear();
                    datestr + 0;
                    return user;
                } else {
                    user = prompt("Please enter your name:", "");
                    if (user != "" && user != null) {
                        this.setCookie("username", user, 365);
                    }
                }
            },
            dateFiller() {
                let tD = new Date();
                let datestr = (tD.getMonth() + 1) + "/" + tD.getDate() + "/" + tD.getFullYear();
                this.$store.state.reviewDate = datestr;
                return datestr;
            },
            updateMonth() {
                let a = this.reviewMonth;
                this.$store.state.reviewMonth = a;
            }

        }
    }
</script>

<style>

</style>
