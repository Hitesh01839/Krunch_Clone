function Sroll() {
    window.scrollTo(0,1200);
}

function scrollOne() {
    let s1 = document.getElementById('s1');
    let s2 = document.getElementById('s2');
    let s3 = document.getElementById('s3');
    let text_para = document.getElementById('ts1');
    text_para.innerText = "It really saves me time and effort. web design is exactly what our business has been lacking. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem risus tristique posuere.";
    s1.setAttribute("style", "background-color: #fff;");
    s2.removeAttribute("style", "background-color: #fff;");
    s3.removeAttribute("style", "background-color: #fff;");
}

function scrollTwo() {
    let s1 = document.getElementById('s1');
    let s2 = document.getElementById('s2');
    let s3 = document.getElementById('s3');
    s1.removeAttribute("style", "background-color: #fff;");
    s2.setAttribute("style", "background-color: #fff;");
    s3.removeAttribute("style", "background-color: #fff;");
    let text_para = document.getElementById('ts1');
    text_para.innerText = "It is the best website I have ever done until now that I have finished and did it it took so long to complete it but. This was worth it";
}

function scrollThree() {
    let s1 = document.getElementById('s1');
    let s2 = document.getElementById('s2');
    let s3 = document.getElementById('s3');
    s1.removeAttribute("style", "background-color: #fff;");
    s2.removeAttribute("style", "background-color: #fff;");
    s3.setAttribute("style", "background-color: #fff;");
    let text_para = document.getElementById('ts1');
    text_para.innerText = "It is the best website I am running out of content on what to write here i could copy text from google but i am too lazy to do it. LOLL!!";
}

