function menu() {
    var s = document.getElementById('sidebar');
    s.style.transform = s.style.transform === 'translateX(0px)' ? 'translateX(-100%)' : 'translateX(0px)';
}
function content(id) {
    var content = document.querySelectorAll('.main > div');
    content.forEach(function(div) {
        div.style.display = div.id === id ? 'block' : 'none';
    });


    contentArray.forEach(function(div, index) {
        if (div.id === id) {
            currentIndex = index;
        }
    });

    if (window.innerWidth < 768) {
        document.getElementById('sidebar').style.transform = 'translateX(-100%)';
    }
}

document.querySelectorAll('.sidebar a').forEach(function(link) {
    link.addEventListener('click', function() {
        if (window.innerWidth < 768) {
            document.getElementById('sidebar').style.transform = 'translateX(-100%)';
        }
    });
});
        
        function quiz(){
            window.open('quiz.html');
        }
        function backtohome(){
            window.open('FSD_PROJECT_JAVA.html');
        }
        function quiz1(){
            window.open('quiz1.html');
        }
        function backtohome(){
            window.open('FSD_PROJECT_JAVA.html');
        }
        function quiz2(){
            window.open('quiz2.html');
        }
        function backtohome(){
            window.open('FSD_PROJECT_JAVA.html');
        }
        function quiz3(){
            window.open('quiz3.html');
        }
        function backtohome(){
            window.open('FSD_PROJECT_JAVA.html');
        }
        function quiz4(){
            window.open('quiz4.html');
        }
        function backtohome(){
            window.open('FSD_PROJECT_JAVA.html');
        }
        function quiz5(){
            window.open('quiz5.html');
        }
        function backtohome(){
            window.open('FSD_PROJECT_JAVA.html');
        }
        function quiz6(){
            window.open('quiz6.html');
        }
        function backtohome(){
            window.open('FSD_PROJECT_JAVA.html');
        }
        function quiz7(){
            window.open('quiz7.html');
        }
        function backtohome(){
            window.open('FSD_PROJECT_JAVA.html');
        }
        function quiz8(){
            window.open('quiz8.html');
        }
        function backtohome(){
            window.open('FSD_PROJECT_JAVA.html');
        }
        function quiz9(){
            window.open('quiz9.html');
        }
        function backtohome(){
            window.open('FSD_PROJECT_JAVA.html');
        }
        

        

        

    