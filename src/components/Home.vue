<template>
    <div class="container-fluid">
        <h1>Monthly Evaluation Tool</h1>
        <h2>Welcome to the Monthly PGCS tool <u>{{ checkCookie() }}</u>...<button class="btn btn-secondary" @click="changeCookie">Update Name</button></button></h2>
        <p><strong style="background-color: yellow">REMINDER:</strong> You are going to complete a MONTHLY review, if
            you need to complete
            a full evaluation, you will need to exit the system and access the annual
            evaluation tool.</p>
        <h3>INSTRUCTIONS:</h3>
        TODO: guide<p>THIS PAGE WILL PROVIDE BASIC USAGE INSTRUCTIONS,</p>
        <br>
        TODO: manual link<p>Link to user manual goes here</p>
        <div class="container">
            <router-link to="/">
                <button class="btn btn-secondary" @click="notActive()">Cancel</button>
            </router-link>
            <router-link to="/workerdata">
                <button class="btn btn-primary">Begin</button>
            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                userName: this.$store.state.supervisorCompleting,

            }
            },
        methods: {
            notActive() {
                alert('No Active Link Yet!')
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
                    return user;
                } else {
                    user = prompt("Please enter your name:", "");
                    if (user != "" && user != null) {
                        this.setCookie("username", user, 365);
                    }
                }
            },
            changeCookie() {
                this.setCookie("username",user,-1)
                let user = prompt("Please enter your name:", "");
                this.setCookie("username", user, 365);
                this.$store.state.supervisorCompleting = user;
                document.location.reload(true);
                return user;

            }
        }
    }
</script>

<style>

</style>
