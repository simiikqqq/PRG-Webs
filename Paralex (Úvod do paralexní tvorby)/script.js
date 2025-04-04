window.onscroll = () =>{
    const h1 = document.getElementById("h1");
    const h1_2 = document.getElementById("h1_2");
    const h1_3 = document.getElementById("h1_3");
    const p = document.getElementById("p");
    const p2 = document.getElementById("p2");
    const p3 = document.getElementById("p3");

    h1.style.transform=`translateY(${14 + window.scrollY / 2}px)`;
    p.style.transform=`translateY(${window.scrollY / 30}px)`;

    h1_2.style.transform=`translateY(${14 + window.scrollY / -2}px)`;
    p2.style.transform=`translateY(${window.scrollY / -3}px)`;

    h1_3.style.transform=`translateY(${14 + window.scrollY / -2}px)`;
    p3.style.transform=`translateY(${window.scrollY / -3}px)`;

   
};