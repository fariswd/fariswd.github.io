# __Pan13a Portofolio__
Portofolio panda tapi rubah  
dapat diakses di http://fariswd.github.io/pan13a-portofolio  

### Menggunakan Trick:
1. Change Active:  
merubah "active" pada nav bar (javascript)
```js
$(document).ready(function(){
    $('.nav li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
});
```

2. Scroll to div:  
smooth scrolling antar div yang menggunakan link id (#) (javascript)
```js
// handle links with @href started with '#' only
$(document).on('click', 'li a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
```

3. Circle picture:  
Crop gambar menjadi bulat (css)
```css
  border-radius: 50%;
```

4. Scrollable Div:  
membuat div menjadi scrolling (css)
```css
overflow-y:auto;
```

5. Hide Scroll bar:  
menghilangkan scrollbar (css)
```css
#jourmid::-webkit-scrollbar { 
  /* This is the magic bit */
  display: none;
}
```

6. Fit image 100%:  
membuat gambar menjadi fit dengan container 100% (css)
```css
#lab img{   
  width: 100%; 
  height: 100%;
  object-fit: contain;
}
```  


### All sources:
change active:  
https://stackoverflow.com/questions/17975922/how-to-change-active-class-while-click-to-another-link-in-bootstrap-use-jquery

scroll to div:  
https://stackoverflow.com/questions/19012495/smooth-scroll-to-div-id-jquery

circle pp:  
https://stackoverflow.com/questions/26421274/css-circular-cropping-of-rectangle-image

shadow text:  
https://www.w3schools.com/css/css3_shadows.asp

scrollable div:  
https://stackoverflow.com/questions/9811465/scrollable-div-inside-container

scroll bar no show:  
https://stackoverflow.com/questions/3296644/hiding-the-scrollbar-on-an-html-page

fit image 100%:  
https://stackoverflow.com/questions/4394309/how-do-i-fit-an-image-img-inside-a-div-and-keep-the-aspect-ratio
