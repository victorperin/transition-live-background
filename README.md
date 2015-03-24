# JS Live Background
A simple and beautfull live background created with javascript and css only.


##Instalation
You can install it with bower using:
```
bower install --save live_background
```
Or just copy the `background.js` file on your project.

##How to use?

Right now, to run this background, just add these two pieces of code:
```html
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
