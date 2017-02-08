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
        <li><a href="#industry/getSectorList" class="custom-navbar">Create</a></li>
        <li><a href="http://www.w3schools.com" class="custom-navbar">Hello, World</a></li>
        <li><a href="http://www.w3schools.com" class="custom-navbar">Bye World</a></li>
    </ul>


    <div ng-view>

    </div>
</div>
<asset:javascript src="fypapplication/fypapplication"/>
<asset:javascript src="angular/ui-bootstrap-tpls.js"/>

</body>
</html>