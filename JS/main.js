let navigation = document.getElementsByClassName('navigation');

window.onscroll = () =>{
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        navigation[0].style.position = 'fixed';
        navigation[0].style.background = '#000';
        navigation[0].style.animation = "animation  ease 1s";
    }else{
        navigation[0].style.transition = 'all 0.5s';
        navigation[0].style.background = 'none';
    }
}

document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () =>{
        document.querySelector('.popup_video').style.display = 'block';
        document.querySelector('.popup_video video').src = vid.getAttribute('src');
    }
})

document.querySelector('.popup_video span').onclick = () => {
    document.querySelector('.popup_video').style.display = 'none';
    document.querySelector('.popup_video video').pause();
}
