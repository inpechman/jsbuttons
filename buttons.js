window.onload = function () {
    var buttonsSidebar = document.getElementById('buttonsSidebar');
    var mainArticle = document.getElementById('mainArticle');
    for (var i = 0; i < buttonsSidebar.childElementCount; i++) {
        var currentButton = buttonsSidebar.getElementsByTagName('div');
        var currentContent = mainArticle.getElementsByTagName('div');
        currentButton[1].onclick = function(){
            currentContent[1].style.display = 'block';
        };
        currentButton[2].onclick = function(){
            currentContent[2].style.display = 'block';
        };
        currentButton[3].onclick = function(){
            currentContent[3].style.display = 'block';
        };
        currentButton[4].onclick = function(){
            currentContent[4].style.display = 'block';
        };
        currentButton[0].onclick = function(){
            currentContent[0].style.display = 'block';
        };
/*
        console.log(i);
        alert('ssssss')
*/
    }
};