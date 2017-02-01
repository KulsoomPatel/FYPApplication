<!doctype html>
<html>
<head>
    <asset:stylesheet src="bootstrap/bootstrap.css"/>

</head>

<body>

<div class="container-fluid" ng-app="fypapplication">

    <div class="page-header">
        <h1 class="text-center">What's happening on Twitter? <small> Employment</small></h1>
    </div>

    <div ng-view>

    </div>

</div>

<asset:javascript src="fypapplication/fypapplication"/>
<asset:javascript src="angular/ui-bootstrap-tpls.js"/>

</body>
</html>