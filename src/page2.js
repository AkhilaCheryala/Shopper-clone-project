function openIframe(){
    document.getElementById("IframeContainer").style.display = 'block';
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow ="hidden"
   
}
function closeIframe(){
    document.getElementById("IframeContainer").style.display = 'none';
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow ="auto"
}
document.ElementById("open").addEventListener("click", openIframe);

// document.addEventListener("DOMContentLoaded" ,function(){
//     var catalogItem =document.getElementById('catalog');
//     var iframeContainer = document.querySelector(".iframe2container");
//     var iframe = document.querySelector(".hidden-iframe2");
//     catalogItem.addEventListener("mouseover", function() {
//         iframe.style.display = "block";
//     });

//     catalogItem.addEventListener("mouseout", function() {
//         iframe.style.display = "none";
//     });
// });
