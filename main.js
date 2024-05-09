//color de estrallas
const COLORS =["#fff2","#fff4","#fff7","#fffc"];
//generar estrellas
const generateSpaceLAyer = (size, selector, totalStars, duration) =>{
    //generar array para cordenadas de estrellas
    const layer =[];

    for (let i = 0; i < totalStars; i++) {
        //recorrer array colors
        const color = COLORS[Math.floor(Math.random()*COLORS.length)];
        //cordenadas
        const x = Math.floor(Math.random()*100);
        const y = Math.floor(Math.random()*100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
    }

    const container = document.querySelector(selector);
    //agregar a la variable layer los strings de cordenadas
    container.style.setProperty("--space-layer",layer.join(","));
    container.style.setProperty("--size",size);
    container.style.setProperty("--duration",duration);
};

generateSpaceLAyer("1px",".space-1", 300, "90s");
generateSpaceLAyer("2px",".space-2", 400, "95s");
generateSpaceLAyer("4px",".space-3", 400, "100s");

//animacion para mover las estrellas

const audioCarta = new Audio('./audio/cartaCorto.mp3');

audioCarta.loop = true;