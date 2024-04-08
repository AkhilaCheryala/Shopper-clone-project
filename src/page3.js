document.addEventListener('DOMContentLoaded', function() {
    const mainImg = document.getElementById('mainImg');
    const options = document.querySelectorAll('.option');
  
    options.forEach(function(option) {
      option.addEventListener('click', function() {
        const newSrc = option.getAttribute('src');
        mainImg.setAttribute('src', newSrc);
      });
    });
  });
  function displayMsg() {
      var msgDiv = document.querySelector('.msg');
      msgDiv.style.display = 'block';
      msgDiv.textContent = 'Item added to wishlist!';
      setTimeout(function() {
        msgDiv.style.display = 'none';
      }, 3000);
    }
    function touch(element){
      var size = element.textContent ;
      var sizeMsg = document.querySelector('.sizeMsg');
      sizeMsg.textContent ="selected size" + size ;
    }
    
    
    document.addEventListener('DOMContentLoaded', function() {
      const links = document.querySelectorAll('.nav_description a');
      links.forEach(link => {
        link.addEventListener('click', function() {
          links.forEach(link => link.classList.remove('active'));
  
          this.classList.add('active');
        });
      });
    });
  
    function showContent(category) {
  
      const contents = document.querySelectorAll('.content');
      contents.forEach(content => {
        content.classList.remove('active');
      });
  
      document.getElementById(category + 'Content').classList.add('active');
    }
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
      
