<template>
    <div class="container-fluid">
        <h1>Monthly Evaluation Tool</h1>
        <h2>Welcome to the Monthly PGCS tool <u>{{ checkCookie() }}</u></h2>
        <p><strong style="background-color: yellow">REMINDER:</strong> You are going to complete a MONTHLY review, if
            you need to complete
            a full evaluation, you will need to exit the system and access the annual
            evaluation tool.</p>
        <h3>INSTRUCTIONS:</h3>
        <p>THIS PAGE WILL PROVIDE BASIC USAGE INSTRUCTIONS, FILLER FOLLOWS....</p>
        <p>Lorem ipsum blandit adipiscing sit bibendum sapien faucibus nisl pretium, scelerisque urna fermentum bibendum
            quisque cubilia nisi placerat odio taciti, ut porttitor scelerisque curabitur orci tempor nibh mattis semper
            pulvinar rutrum dictumst per pretium, molestie urna vel porttitor class, nec netus nibh ut.
            <br>
            <br>
            Class curabitur etiam felis ligula hac sem eu metus sociosqu risus, magna nunc morbi metus auctor posuere
            vivamus purus malesuada, fermentum nunc in malesuada fames class non adipiscing venenatis ac per a ac enim
            nulla duis cursus integer mattis nisl.
            <br>
            <br>
            Enim pellentesque volutpat quis elit mauris litora pulvinar himenaeos platea, imperdiet nulla curae tortor
            morbi quam euismod id tempor duis, himenaeos nam habitant pharetra conubia taciti risus sem.
            <br>
            <br>
            Quisque suscipit curae ullamcorper a nulla egestas cras molestie, odio accumsan pharetra magna malesuada
            lacus integer enim consectetur curabitur elit habitasse dictumst feugiat vehicula semper, ante ut cras vel
            amet at massa donec tincidunt sit tincidunt accumsan vulputate nisl.
            <br>
            <br>
            Venenatis odio iaculis accumsan ad morbi a commodo magna, tristique dui habitasse taciti fermentum vel
            curabitur augue, rutrum pulvinar erat at ligula porttitor vitae inceptos varius habitasse duis donec aenean
            per.
            <br>
            <br>
            Leo donec lobortis ligula risus nunc dictum ullamcorper neque dui, tortor consectetur imperdiet taciti
            commodo pharetra lobortis sodales, porta odio habitant augue torquent bibendum habitasse convallis quam
            gravida pellentesque blandit nunc semper aenean iaculis.
            <br>
            <br>
            A tellus cursus ad ipsum risus varius lorem hendrerit integer consequat, phasellus tincidunt ante vitae
            volutpat dictumst aliquam sagittis massa semper, sagittis convallis eros morbi enim ullamcorper urna
            himenaeos auctor ultricies tempus elit ipsum in blandit duis eu ante luctus.</p>
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
        }
    }
</script>

<style>

</style>
