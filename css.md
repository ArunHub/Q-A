
##### css triangle logic======

if u want top sharp,, border-top none, left portion flat means border left none, right slanting means border right color transparent , then give border-bottom-width gives height.

this gives 90* deg triangle (right triangle)

##### custom scrollbar styling===============

http://cssdeck.com/labs/css3-webkit-vertical-scrollbars/

http://webdesign.tutsplus.com/articles/quick-tip-styling-scrollbars-to-match-your-ui-design--webdesign-9430

##### Testing responsive for mobile============

http://www.limelightonline.co.nz/

this site is best for viewing website in different screen resolution simultaneously while given scroll bar

but waste ... so use

http://codebeautify.org/responsive-website-tester#

##### Menu================

http://bootsnipp.com/maridlcrmn

http://bitsofco.de/2015/accessible-multi-level-dropdown-navigation/


##### Background image/url as logo and responsive========================

If you want the same image to scale based on the size of the browser window:

    background-image:url('../images/bg.png');
    
    background-repeat:no-repeat;
    
    background-size:contain;
    
    background-position:center;

Do not set width, height, or margins.

http://stackoverflow.com/questions/12609110/responsive-css-background-images

##### Toggle Dropdown===================

https://css-tricks.com/forums/topic/drop-down-toggle-jquery/

http://codepen.io/scottb/pen/gixIv

##### bootstrap navbar menu center

http://www.bootply.com/3iSOTAyumP#

##### Masonry grid===============

http://www.bootply.com/jWoHaY7efR

http://www.bootply.com/tagged/masonry

##### Select tag in Input group addon=====

http://www.bootply.com/97519

add class="btn" to select

or we can create dropdown button like in navs

##### extended Plugins tricks of bootstrap===============

http://speckyboy.com/2014/06/16/plugins-for-extending-bootstrap/

http://marketblog.envato.com/web-design/addons-plugins-extending-bootstrap/

##### making text crisp sharp text shadow

http://www.elfboy.com/text-shadow/

##### media query in jquery======

https://www.fourfront.us/blog/jquery-window-width-and-media-queries

it fires once so

https://css-tricks.com/forums/topic/jquery-window-resize-fires-only-once/


##### Media queries logics

https://css-tricks.com/logic-in-media-queries/

if , and , or , not statements .

max-width for desktop first

min-width for mobile first

  
http://www.the-haystack.com/2015/12/23/choosing-between-min-and-max-width/

##### IE browser issues Png hack fix====

http://labs.unitinteractive.com/unitpngfix.php

https://css-tricks.com/snippets/css/png-hack-for-ie-6/

https://css-tricks.com/the-different-techniques-for-applying-the-png-hack/


##### ##### styling radio checkbox switch toggle button css3 and with boootstrap styles=====

http://www.cssscript.com/demo/pretty-checkbox-radio-inputs-with-bootstrap-and-awesome-bootstrap-checkbox-css/
 

http://cssdeck.com/labs/css-checkbox-styles
 

##### material design

http://jorge8168711.github.io/Checkbox.css/
 

##### checkout page ecommerce======

http://www.checkoutpages.xyz/
 

##### icons fonts====

https://css-tricks.com/ligature-icons/

https://css-tricks.com/whats-deal-declaring-font-properties-font-face/

https://www.bramstein.com/writing/web-font-loading-patterns.html

##### linear gradient

https://medium.com/@patrickbrosset/do-you-really-understand-css-linear-gradients-631d9a895caf#.b6qjacr5v
 
http://www.eleqtriq.com

http://www.eleqtriq.com/2010/05/understanding-css-3d-transforms/
 

##### editable div

http://plnkr.co/edit/jLafvuAGVsq5SxCElPUL?p=preview

http://jsfiddle.net/GeJkU/

http://jsbin.com/owavu3/1/edit?html,js,output

http://stackoverflow.com/questions/2441565/how-do-i-make-a-div-element-editable-like-a-textarea-when-i-click-it
 

##### perspective

http://codepen.io/enxaneta/pen/ZQbNMx
 

##### add to cart flow

https://codyhouse.co/demo/add-to-cart-interaction/index.html#0
  

##### z-index

http://www.cssmojo.com/extras/everything_you_always_wanted_to_know_about_z-index_but_were_afraid_to_ask/
  

##### codemyui

http://jquerycards.com/ui/loading/preloadme-lightweight-jquery-website-preloader/

https://codemyui.com/sign-up-form-animation/

https://codemyui.com/expand-on-hover-link-style/

https://codemyui.com/sign-inup-forgot-password-transition/

  

##### steps animation

http://jsfiddle.net/simurai/CGmCe/

http://designmodo.com/steps-css-animations/

http://lea.verou.me/2011/09/pure-css3-typing-animation-with-steps/
  
https://twitter.com/JoniTrythall

http://designmodo.com/author/joni/

http://svgpocketguide.com/

  

##### responsive hover box descriptions

##### replace hover in responsive

##### responsive image hover overlay

http://codepen.io/fredryk/pen/xrqze

http://thevectorlab.net/flatlab/gallery.html
 
https://24ways.org/2013/the-responsive-hover-paradigm/
 
http://www.cssscript.com/transparent-image-hover-overlay-with-pure-css-css3/
 
http://callmenick.com/post/image-overlay-hover-effects-with-css3-transitions

https://24ways.org/2013/the-responsive-hover-paradigm/

  
##### centering ul or a or inline elements in center for mobile view

http://stackoverflow.com/questions/7839164/is-there-a-css-cross-browser-value-for-width-moz-fit-content

http://red-team-design.com/horizontal-centering-using-css-fit-content-value/

https://developer.mozilla.org/en/docs/Web/CSS/width
 

##### datalist shows dropdown arrow in > chrome 34 so disable

    input::-webkit-calendar-picker-indicator {
    
    display: none;
    
    }// Remove Datalist Dropdown Arrow in Chrome


##### Ecommerce product display

http://bootsnipp.com/snippets/featured/ecommerce-product-display

https://www.smashingmagazine.com/2018/04/redesigning-digital-interior-design-shop/


##### css hacks for different browsers issues and OS=========

http://rafael.adm.br/css_browser_selector/

Source of this example:

    <style  type="text/css">
    
    .ie .example {
    
    background-color: yellow
    
    }
    
    .ie7 .example {
    
    background-color: orange
    
    }
    
    .gecko .example {
    
    background-color: gray
    
    }
    
    .win.gecko .example {
    
    background-color: red
    
    }
    
    .linux.gecko .example {
    
    background-color: pink
    
    }
    
    .opera .example {
    
    background-color: green
    
    }
    
    .konqueror .example {
    
    background-color: blue
    
    }
    
    .webkit .example {
    
    background-color: black
    
    }
    
    .example {
    
    width: 100px;
    
    height: 100px;
    
    }
    
    .no_js { display: block }
    
    .has_js { display: none }
    
    .js .no_js { display: none }
    
    .js .has_js { display: block }
    
    </style>

http://github.com/rafaelp/css_browser_selector/raw/master/css_browser_selector.js

git clone git://github.com/rafaelp/css_browser_selector.git
  

USAGE
1. Copy and paste the line below, inside <head> and </head> tag

    <script  src="css_browser_selector.js"  type="text/javascript"></script>

2. Set CSS attributes with the code of each browser/os you want to hack

Examples:

    html.gecko div#header { margin: 1em; }.opera #header { margin: 1.2em; }.ie .mylink { font-weight: bold; }.mac.ie .mylink { font-weight: bold; }.[os].[browser] .mylink { font-weight: bold; } -> without space between .[os] and .[browser]

  
##### Fixed Elastic Fluid width============

Fixed width : boxed type -> stays with fixed width of an element throughout any resolution.

Fluid width : Percentage type -> it resizes its width according to the screen size . Text inside the element also gets adapted.

Elastic width : Em type -> whenever we resize its parent element and its child element get expanded or shrink relative to each other.


##### Starry Night: 3D Background with the Parallax Effect=================

Add three background : background,midground,foreground images .. make them move by just changing background position from 5% 5% to 90% 110% any thing you want like how fast u want to move n have parallax effect while resizing.

It wont work in < IE7

https://www.youtube.com/watch?v=m2NsJQyaxVo

##### Three states of menu ================

active,hover,normal
using css sprite is best for business
while hovering seperate image will load late so using sprite image is useful by changing bg position.


##### create css sprite image vertically
for active state, instead of putting active class in every link , add to body like
 body class="home",so does for different page body class="about"

##### Horizontal jumps===================

Suppose if you two pages . In first page there is less content and in second page there is more content so scrollbar will come . So when you switch from page one to two , a horizonal jump will come so solve it

    Put html{height:102% } or html {overflow-y:scroll}

second option wont work in opera

https://css-tricks.com/eliminate-jumps-in-horizontal-centering-by-forcing-a-scroll-bar/

##### Center vertically img inside div ==============

http://jsfiddle.net/3MVPM/

##### simple toggle========

http://jsfiddle.net/Kritika/SZwTg/1/

http://jsfiddle.net/QxRL9/

##### Hover delay menu================

https://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/

##### boundaries around menu hover

https://css-tricks.com/dropdown-menus-with-more-forgiving-mouse-movement-paths/

    li.dropdown > ul{visibility:hidden;transition:0.2s 1s;}
    
    li.dropdown:hover > ul{visibility:visible;transition-delay:0s;}

  
  

##### Text overflow ellipsis================

    .dataTable td {
    
    /* essential */
    
    text-overflow: ellipsis;
    
    width: 200px;
    
    white-space: nowrap;
    
    overflow: hidden;
    
      
    
    /* for good looks */
    
    padding: 10px;
    
    }

  

##### for muliline

https://css-tricks.com/line-clampin/

http://mikeking.io/succinct/(currently using)

using jquery

http://jsfiddle.net/k5VET/

##### Delete Button Concept with Hover Animation==============

http://codemyui.com/post/120023194335/delete-button-concept-with-hover-animation?utm_content=buffer3009c&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

  

##### Search Icon to Search Field Animation-=============

http://codemyui.com/post/120099714070/search-icon-to-search-field-animation?utm_content=buffera3d49&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

  

##### Hamburger to Close menu

http://codemyui.com/post/121799549545/hamburger-icon-to-close-animation?utm_content=buffer3f43c&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

  

##### CSS Button Border Hover Effects

http://codemyui.com/post/124475195095/css-button-border-hover-effects?utm_content=buffer2c62c&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

  

##### select tag styling

http://fettblog.eu/style-select-elements/

=============================================

