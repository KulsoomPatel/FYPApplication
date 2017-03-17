<!doctype html>
<html>
<head>
    <asset:stylesheet src="bootstrap/bootstrap.css"/>
    <asset:stylesheet src="custom.css"/>

</head>

<body>

<div class="container" ng-app="fypapplication">

    <div class="page-header">
        <h1 class="text-center">What's happening on Twitter? <small>Employment</small></h1>
    </div>


    <ul class="nav nav-tabs">
        <li><a href="#/liveData" class="custom-navbar">Live Data</a></li>
        <li><a href="#/sectorData" class="custom-navbar">Sector Data</a></li>
        <li><a href="#/industryData" class="custom-navbar">Industry Data</a></li>
    </ul>

</br>

    <div ng-view>

    </div>

    <div id="footer">
        &nbsp;
    </div>
</div>
<asset:javascript src="fypapplication/fypapplication"/>
<asset:javascript src="angular/ui-bootstrap-tpls.js"/>

</body>
</html>