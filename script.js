window.onload = () => {

    setTimeout(() => {
        document.querySelector('.container').style.opacity = 1;
    }, 500);


    setTimeout(() => {
        document.querySelector('.container').style.animation = 'fadeOut 2s forwards';
    }, 5000); 

    
    setTimeout(() => {
        window.location.href = 'fs19.html'; 
    }, 7000);
};