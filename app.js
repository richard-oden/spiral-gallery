let thumbnails = document.getElementsByClassName('thumbnail');

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function(){
        if (i === thumbnails.length-1) {
            thumbnails[i].classList.toggle('expand-width');
            thumbnails[i].classList.toggle('expand-height');
        } else {
            thumbnails[i].classList.toggle((i+1)%2 == 0 ? 'expand-width' : 'expand-height');
        }
    });
}