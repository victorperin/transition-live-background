# JS Live Background
A simple and beautfull live background created with javascript and css only.


##How to use?
(in a near future there'll be a bower package)

Right now, to run this background you'll just need to add there 2 parts of code:
```html
<script scr="/path/to/jquery/bower_components/jquery/dist/jquery.min.js"></script> <!-- feel free to use your own jquery -->
<script scr="/path/to/file/background.js"></script>
```

and:
```html
<style>
  #gradient {
     position: fixed;
     width: 100%;
     height: 100%;
     padding: 0px;
     margin: 0px;
  }
</style>
<div id="background"></div>
```


##Using with bower
You can just run
```
bower install --save live_background
```
