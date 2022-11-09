//<br>

/*

Una empresa planea lanzar al mercado un videojuego MMO que cuenta con múltiples personajes,
sin embargo, la empresa teme que sea difícil aprender a jugar con cada personaje y sumado a esto,
el sistema de niveles es tan largo que desean que los usuarios conozcan bien su personaje antes de 
levelearlo. Entonces, necesita una página en la que puedan mostrar los personajes y las habilidades
e historia de cada uno.

*/

/* 

Uso de objetos para ASBTRAER el personaje, habilidades e historia
Botón de una función de dato curioso / historia
Uso de arrays para almacenar a los personajes

Inicio de sesión    //  Funciones
Permite lanzar la frase celebre del personaje   //  Métodos

*/

/*

Diseño de personajes
Generar estructura de la página
Códificar su funcionamiento
Incrustar 32 toneladas de Boostrap :D

*/

class Champ{
    constructor(Pasiva,HabQ,HabW,HabE,HabR,Historia){
        this.Pasiva = Pasiva;
        this.HabQ = HabQ;
        this.HabW = HabW;
        this.HabE = HabE;
        this.HabR = HabR;
        this.Historia = Historia;

        this.Cuento = `Historia: <br> ${this.Historia}`;

    }
    
    Contar_Historia(){
        document.write(this.Cuento);
    }
}

const Yasuo = new Champ(
/* Pasiva */    `Camino del alma errante     <br> Aumenta la probabilidad de impacto crítico de Yasuo. Además, Yasuo va acumulando su escudo mientras se mueve. El escudo se activa cuando recibe daño de un campeón o monstruo.`,
/* Q */    `Temprestad de hacero     <br> Yasuo lanza una estocada, lo que inflige ? de daño físico. Si golpea a un enemigo, obtiene una acumulación durante ? s. Mientras tenga 2 acumulaciones, el siguiente uso de esta habilidad lanza un torbellino desde lejos, lo que inflige el mismo daño y lanza por los aires durante ? s.`,
/* W */    `Muro de viento      <br> Yasuo crea un muro de viento flotante que bloquea todos los proyectiles enemigos durante 4 s.?`,
/* E */    `Viento cortante     <br> Yasuo se desliza a través de un enemigo y le inflige ? de daño mágico. Cada uso de esta habilidad otorga un 25% de daño adicional al siguiente uso durante 5 s, que se acumula hasta un 50%.`,              
/* R */    `Último aliento/Sorieketonalv        <br> Yasuo aparece junto a un campeón enemigo que esté en el aire y le inflige ? de daño físico. Además, todos los enemigos que estén en el aire permanecen suspendidos durante ? s más. Yasuo también obtiene flujo máximo, pero pierde todas las acumulaciones de Tempestad de acero.`,
/* Historia */ `Yasuo, un jonio de profunda determinación, es un ágil espadachín que empuña al propio viento contra sus enemigos. Cuando era un joven orgulloso, lo acusaron injustamente de asesinar a su maestro. Al ser incapaz de demostrar su inocencia, se vio obligado a matar a su hermano en defensa propia. Con el tiempo, el verdadero asesino de su maestro fue revelado y su hermano volvió misteriosamente de la muerte; sin embargo, Yasuo sigue sin poder perdonarse a sí mismo por todo lo que ha hecho. Ahora, deambula por el mundo y cuenta solo con el viento para guiar su espada.`);

const Garen = new Champ(
/* P */    `Perseverancia     <br> Si Garen no se ha visto afectado recientemente por ataques o habilidades de enemigos, regenera un porcentaje de su vida máxima cada segundo.`,
/* Q */    `Golpe decisivo     <br> Su siguiente ataque silencia durante ? s e inflige ? de daño físico.?`,
/* W */    `Coraje      <br> Garen se arma de valor durante ? s, lo que hace que todo el daño recibido se reduzca un ?%. También obtiene un escudo de ? y un ?% de tenacidad durante ? s.?`,
/* E */    `Juicio     <br> Garen hace girar su espada rápidamente durante ? s e inflige ? de daño físico ? veces mientras dura el efecto. El enemigo más cercano recibe ? de daño físico por golpe.`,
/* R */    `Justicia demaciana        <br> Garen invoca al poder de Demacia para matar a su enemigo, lo que inflige ? más un ?% de la vida que le falte al objetivo como daño verdadero.?`,
/* Historia */ `Garen, un orgulloso y noble guerrero, lucha en las filas de la Vanguardia Impertérrita. Es querido entre sus compañeros y respetado por sus enemigos, y no solo por ser vástago de la prestigiosa familia Crownguard, responsable de la defensa de Demacia y sus ideales. Ataviado con una armadura resistente a la magia y empuñando una poderosa espada, Garen siempre está listo para enfrentarse a los magos y hechiceros en el campo de batalla como un auténtico torbellino de virtuoso acero.`);

const Ekko = new Champ(
/* P */    `Resonancia Z     <br> Cada tercer ataque o hechizo dañino lanzado sobre un mismo objetivo inflige daño mágico adicional, y Ekko obtiene una mejora de velocidad de movimiento si el objetivo es un campeón.`,
/* Q */    `Engranaje temporal     <br> Ekko lanza un dispositivo que inflige ? de daño mágico. Al golpear a un campeón o llegar al final de su alcance, se expande en una zona que ralentiza a los enemigos un 32/39/46/53/60%. Cuando se expande, Ekko lo recupera e inflige ? de daño mágico.?`,
/* W */    `Convergencia paralela      <br>  Ekko lanza una cronosfera que dura 1,5 s tras un lapso de tiempo y que ralentiza a los enemigos en el interior un ?%. Si Ekko entra en la esfera, la detona, aturde durante 2.25 s y obtiene un escudo de ?.?`,
/* E */    `Salto de fase     <br> Ekko se desliza y potencia su siguiente ataque, que tiene alcance adicional, se teleporta hasta su objetivo e inflige ? de daño mágico adicional.?`,              
/* R */    `Otra vez        <br> Ekko hace retroceder el tiempo y entra en estasis mientras se teleporta a donde estaba hace 4 segundos, lo que inflige ? de daño mágico a los enemigos cercanos. Además, Ekko recupera ? de vida que aumenta un ?% por cada 1% de vida que haya perdido en los últimos 4 s.?`,
/* Historia */ `Ekko, un prodigio surgido de las implacables calles de Zaun, manipula el tiempo para sacar ventaja de todas las situaciones. Con una máquina de su invención llamada Dispositivo Z, explora las distintas posibilidades de la realidad hasta alcanzar el momento ideal. Aunque adora su libertad, si algo amenaza a sus amigos, hará lo que sea para defenderlos. Para quien no sepa quién es este muchacho, Ekko parece conseguir lo imposible a la primera, una y otra vez.`);

const Jhin = new Champ(
/* P */    `Susurro     <br> Susurro, el cañón de mano de Jhin, es un instrumento preciso diseñado para infligir un gran daño. Dispara con una cadencia fija y solo puede portar cuatro balas. Jhin baña la última bala con magia oscura para asestar impactos críticos e infligir daño de ejecución adicional. Siempre que Susurro asesta un impacto crítico, Jhin obtiene un aumento de velocidad de movimiento.`,
/* Q */    `Granada danzante     <br> Jhin lanza un cartucho que inflige ? de daño físico antes de rebotar hacia un objetivo cercano que aún no haya sido alcanzado.`,
/* W */    `Florecer mortal      <br> Jhin realiza un disparo de larga distancia que inflige ? de daño físico al primer campeón impactado y a otros enemigos que se encuentren en la trayectoria.`,                                    
/* E */    `Público entregado     <br> Jhin coloca una trampa de loto invisible durante ? min. Esta crea una zona que ralentiza un ?% cuando un enemigo la pisa. Tras ? s, la trampa explota e inflige ? de daño mágico.`,
/* R */    `Abajo el telón        <br> Jhin se prepara e inicia una canalización que le permite realizar 4 superdisparos que infligen entre ? y ? de daño físico al primer campeón alcanzado, según el porcentaje de vida que le falte. También lo ralentiza un ?% durante ? s. El cuarto disparo es un golpe crítico e inflige un ?% del daño.?`,
/* Historia */ `Jhin es un meticuloso criminal psicópata que ve el asesinato como arte. Otrora prisionero jonio, fue liberado gracias a los sombríos tejemanejes del consejo de Jonia. Ahora, el asesino en serie trabaja como sicario de la secta. Con su pistola como pincel, la obra de Jhin muestra un arte brutal, tanto para las víctimas como para los espectadores. Encuentra un cruel placer en la escenificación atroz, lo cual lo convierte en un candidato sin igual para mandar el más poderoso de los mensajes: el terror.`);

let Personajes = [Yasuo,Garen,Ekko,Jhin];

//Sentencia para extraer string x medio de una variable
document.getElementById("cardtext1").innerHTML=Personajes[0].Historia;
document.getElementById("cardtext2").innerHTML=Personajes[1].Historia;
document.getElementById("cardtext3").innerHTML=Personajes[2].Historia;
document.getElementById("cardtext4").innerHTML=Personajes[3].Historia;

let c1 = ["assets/img/C1P","assets/img/C1Q","assets/img/C1W","assets/img/C1E","assets/img/C1R"];
let c2 = ["assets/img/C2P","assets/img/C2Q","assets/img/C2W","assets/img/C2E","assets/img/C2R"];
let c3 = ["assets/img/C3P","assets/img/C3Q","assets/img/C3W","assets/img/C3E","assets/img/C3R"];
let c4 = ["assets/img/C4P","assets/img/C4Q","assets/img/C4W","assets/img/C4E","assets/img/C4R"];
let hab = [c1,c2,c3,c4];