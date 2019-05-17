#### HTML5
•	Semantics: allowing you to describe more precisely what your content is.
•	Connectivity: allowing you to communicate with the server in new and innovative ways.
•	Offline and storage: allowing webpages to store data on the client-side locally and operate offline more efficiently.
•	Multimedia: making video and audio first-class citizens in the Open Web.
•	2D/3D graphics and effects: allowing a much more diverse range of presentation options.
•	Performance and integration: providing greater speed optimization and better usage of computer hardware.
•	Device access: allowing for the usage of various input and output devices.
•	Styling: letting authors write more sophisticated themes.

#### Html5 api
1. Media API
2. Text Track API 
3. Drag and Drop
4. Offline Web Applications/Application Cache
5. User Interaction
6. History
7. MIME type and protocol handler registration
https://www.creativebloq.com/html5/developer-s-guide-html5-apis-1122923

	https://www.sitepoint.com/10-html5-apis-worth-looking/

8. Why doctype needed ? => <!DOCTYPE html> // Tells the browser that we are using HTML5. So if not given, it may render incompactible mode and may not new html5 elements
9. If (min-width:320px) and (max-width:768px) and If (min-width:768px) and (max-width:1024px) …
10. At 768px , how device will get which css ? => css code which was written at last which render finally as per css rules.
11. Diff bet placing script in head and body? => If we place script in body, then before body dom loaded , dependent script will look out for html elements which didn’t get rendered.

    <head>
    <script>
    Document.getElementById(‘foo’).style.color = “red”;
    </script>
    </head>
    <body>
    <div id=”foo”></div>
    </body>

So while running the script , it will look out for ‘foo’ element which is still yet to load in document.
https://www.qposter.com/2014/11/oDesk-Test-Answer-HTML5-Skill-Test-Latest.html

https://www.coursehero.com/file/21494501/HTML/

http://abcomputertips.com/upwork-html-5-test-answer-2015/

https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82

Bootstrap with 8 columns
If 3 cols are there, how will u move 1st and 2nd cols …=> using pull and push

##### How Layout and rendering works?

https://developer.mozilla.org/en-US/docs/Mozilla/Introduction_to_Layout_in_Mozilla


#### Wipro interview

**Geolocation** => The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

    if ("geolocation" in navigator) {  
    /* geolocation is available */
    } else {  /* geolocation IS NOT available */}

navigator.geolocation object
getCurrentPosition() (getting current position from user) and watchPosition() (watching the position movement by callling callback fns) accept a success callback, an optional error callback, and an optional PositionOptions object.

**Buffur video attr** - http://dinbror.dk/blog/how-to-preload-entire-html5-video-before-play-solved/
provide multiple video format in source tag to respective browser to understand

    <video controls>  
    <source src="myVideo.mp4" type="video/mp4">
    <source src="myVideo.webm" type="video/webm">
    <p>Your browser doesn't support HTML5 video. Here is     a 
    <a href="myVideo.mp4">link to the video</a> instead.</p>
    </video>

**Preload attr**
--

•	none: Indicates that the video should not be preloaded.
•	metadata: Indicates that only video metadata (e.g. length) is fetched.
•	auto: Indicates that the whole video file can be downloaded, even if the user is not expected to use it.
•	empty string: Synonym of the auto value.
Which leads to best user experience to load video before.

**Poster** => first image as preview to show video

**iframe Sandbox**
--
The sandbox attribute enables an extra set of restrictions for the content in the iframe.
When the sandbox attribute is present, and it will:
•	treat the content as being from a unique origin
•	block form submission
•	block script execution
•	disable APIs
•	prevent links from targeting other browsing contexts
•	prevent content from using plugins (through <embed>, <object>, <applet>, or other)
•	prevent the content to navigate its top-level browsing context
•	block automatically triggered features (such as automatically playing a video or automatically focusing a form control)
The value of the sandbox attribute can either be just sandbox (then all restrictions are applied), or a space-separated list of pre-defined values that will REMOVE the particular restrictions.

**Iframe SrcDoc** => The content of the page that the embedded context is to contain. This attribute is expected to generally be used together with the sandbox attribute. If a browser supports the srcdoc attribute, it will override the content specified in the src attribute (if present). If a browser does not support the srcdoc attribute, it will show the file specified in the src attribute instead (if present). Note that if the content of the attribute contains a script tag then a closing script tag is required for the script to run, even if nothing else comes after the script.

**Local storage delete** - storage.removeItem(keyName); // storage may be localstorage or sessionstorage

- Sessionstorage - the only difference is while data stored in localStorage has no expiration set, data stored in sessionStorage gets cleared when the page session ends. A page session lasts for as long as the browser is open and survives over page reloads and restores. Opening a page in a new tab or window will cause a new session to be initiated with the value of the top-level browsing context, which differs from how session cookies work.
Current page – ls.hi=0 or ss.hi=0 exists if loaded
New tab – ls and ss newly created
Close n open last tab – ls remains but ss expired.

- **- Datalist link to input tag –**
---
    <datalist id="languages">
      <option value="HTML">
      <option value="CSS">
    </datalist>
    <input type="text" list="languages">

That is all you need to add auto-complete functionality to an <input> element.
 

- How to terminate or save worker object – using worker.terminate()

- Worker object runs separate threads apart from main thread run by window object and its context.
onmessage and postMessage()
https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API

- Canvas drawimage put image data strokerect rect

**Autofocus for label n input**
---
This Boolean attribute specifies that the input should have focus when the page loads, unless the user overrides it (e.g. by typing in a different control). Only one element in a document can have the autofocus attribute. It cannot be applied if the type attribute is hidden, because hidden inputs cannot be focused. Note that the input may be focused before the DOMContentLoaded event fires.
autofocus property for select tag is a Boolean that reflects the autofocus HTML attribute, which indicates whether the associated <select> element  will get input focus when the page loads, unless the user overrides it.
 

- **Svg gradient stop-opacity 0 for both path has**
- --- 
The stop-color attribute indicates what color to use at that gradient stop. The keyword currentColor and ICC colors can be specified in the same manner as within a <paint> specification for the fill and stroke attributes.
The stop-opacity attribute defines the opacity of a given gradient stop.

- **Field set legend missing =>** 
- ---
The HTML <legend> element represents a caption for the content of its parent <fieldset>.

- **Field n form validation**
- ---
Minimum 2 number, shopping is not as billing address, password same check
Novalidate – form doesn’t validate the form . So if required is given input field then the error message wont show . defaultly error shows if required given in input tag without novalidate.
On button input submit also have formnovalidate attr which gives the form shouldn't be validated before submission.

-----

#### websocket and webworkers
---

**socket project** - I developed a client side HTML streaming ( HTS ) prototype using Service Workers in browser.
I also developed few other working models namely single page pre fetch in the browser, changing the response, response headers, caching a web page, schedule the requests, adding custom header to request - All using Service Workers present in web browser.

A passion for quality, for doing the right thing for the customers, the product, and for the company.

----

Interview Questions
--

9. Maxwidth and width ?
10. Css specificity
11. Meta tags in html Audio video geolocation 
12. Aside inside nav tag
13. Websockets html
14.	Web storage sizes
15.	BOM
16.	Z-index css
17.	Semantic tags
18. Range input use
19. Bem and specificity, css selectors(think no one is using grid or flex)
