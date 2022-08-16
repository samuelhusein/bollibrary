<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>BOL | Library</title>
        <link rel="shortcut icon" href="https://flowbite.com/docs/images/logo.svg"  type="image/x-icon"/>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
</head>
<body>
    <div id="app">
    </div>
  <script type="text/javascript" src="{{mix('js/app.js')}}"></script>
</body>
</html>