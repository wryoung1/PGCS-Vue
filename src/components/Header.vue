<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <router-link to="/"><a class="navbar-brand" href="#">PGCS - Monthly</a></router-link>

        <div class="collapse navbar-collapse" id="navControls">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item-active">
                    <router-link to="/workerdata"><a class="nav-link" href="#">Worker Data</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Accuracy"><a class="nav-link" href="#">Accuracy</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Timeliness"><a class="nav-link" href="#">Timeliness</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Production"><a class="nav-link" href="#">Production</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Summary"><a class="nav-link" href="#">Summary</a></router-link>
                </li>
                <!--<li class="nav-item">
                    <router-link to="/PGCS"><a class="nav-link" href="#">PGCS Page</a></router-link>
                </li>-->
            </ul>
            <div>
                <a href="#">Back to Share</a>
            </div>


        </div>
    </nav>
    <!--<nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">PGCS - Monthly</router-link>
            </div>

        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <router-link to="/workerdata" activeClass="active"><a>Worker Details</a></router-link>
                <router-link to="/Accuracy" activeClass="active">Accuracy</router-link>
                <router-link to="/Timeliness" activeClass="active">Timeliness</router-link>
                <router-link to="/Production" activeClass="active">Production</router-link>
                <router-link to="/Report" activeClass="active">Report Page</router-link>
            </ul>
            <ul class="nav navbar-nav navbar-right"></ul>
            <li><a href="#">Back to Share</a></li>
            <li class="dropdown">
                <a
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">Save & Load <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="#">Save Data</a></li>
                    <li><a href="#">Load Data</a></li>
                </ul>
            </li>
        </div>
        </div>
    </nav>-->
</template>

<script>
    export default {}
</script>
