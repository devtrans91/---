document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const messageforyou = document.getElementById('messageforyou');
    const randomtextstuff = [
        " 'im gay' -doglover ",
        "solo cooked?",
        "femboys are hot ❤️"
    ];    
    if (loadingScreen) {
        messageforyou.innerText = randomtextstuff[Math.floor(Math.random() * randomtextstuff.length)];
        document.body.classList.add('loading');
        setTimeout(function() {
            document.getElementById('dabottom').style = null;
        }, 10000);
        window.addEventListener('load', function() {
            setTimeout(function() {
                loadingScreen.classList.add('fade-out');
                setTimeout(function() {
                    document.body.classList.remove('loading');
                }, 100);
            }, 100);
        });
    } else {
        alert("where the loading screen at (it's probably me just being dumb)")
    }
});
