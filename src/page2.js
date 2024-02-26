function openIframe(){
    document.getElementById("IframeContainer").style.display = 'block';
    document.getElementById("overlay").style.display = "block";
}
function closeIframe(){
    document.getElementById("IframeContainer").style.display = 'none';
    document.getElementById("overlay").style.display = "none";
}
document.ElementById("open").addEventListener("click", openIframe);