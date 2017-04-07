<!doctype html>
<html>
<head>
    <asset:stylesheet src="bootstrap/bootstrap.css"/>
    <asset:stylesheet src="custom.css"/>
    <asset:stylesheet src="stylesheet/loading-bar.min.css"/>
    <asset:stylesheet src="jqcloud2/jqcloud.css"/>

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

<asset:javascript src="jquery/jquery.js"/>
<asset:javascript src="fypapplication/fypapplication"/>
<asset:javascript src="javascript/angular-jqcloud.js"/>
<asset:javascript src="jqcloud2/jqcloud.js"/>
<asset:javascript src="angular/ui-bootstrap-tpls.js"/>
<asset:javascript src="angular/loading-bar.min.js"/>


</body>
</html>