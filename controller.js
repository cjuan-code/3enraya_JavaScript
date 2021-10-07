// Funcion para ver que jugador comienza
function whostarts() {
    let num = Math.floor(Math.random()*(9-0+1)+0);
    
    if ((num > -1 ) && (num < 5)) {

        if (p1score_score != 3 && p2score_score != 3) {
            inter = true;
            inter_npc = false;
            wl.appendChild(document.createTextNode(player1_name + " starts!"));
            wl.classList.remove('oculto');
        }
       
    } else {

        if (p1score_score != 3 && p2score_score != 3) {
            
            inter = false;
            inter_npc = true;
            wl.appendChild(document.createTextNode(player2_name + " starts!"));
            wl.classList.remove('oculto');
            
            if (singleplayer) {
                npc();
            }
        }
       
    }   
}

// Funcion para establecer las jugadas del NPC
function npc() {

    let posibles_jugadas = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
    let jugada = posibles_jugadas[Math.floor(Math.random()*(8-0+1)+0)];
    let element = document.getElementById(jugada);
    
    if ((element.classList.contains('circulo') == false) && (element.classList.contains('x') == false)) {
        createJugada("NPC", jugada);
        element.classList.add("x");
        inter = true;
        num_jug_p2++;
        whowins();
    } else {
        npc();
    }
}

// Funcion para establecer las jugadas de los jugadores
function player(p, id) {

    let element = document.getElementById(id);

    console.log("antes: " + "p1: " + inter + " p2: " + inter_npc);

    if (p === "jug1") {


        if ((element.classList.contains('circulo') == false) && (element.classList.contains('x') == false)) {
            createJugada(player1_name, id);
            element.classList.add("circulo");
            inter_npc = true;
            inter = false;
            num_jug_p1++;
            whowins();
        } else {
            inter_npc = false;
            inter = true;
        }
    } else if (p === "jug2") {
        
        if ((element.classList.contains('circulo') == false) && (element.classList.contains('x') == false)) {
            createJugada(player2_name, id);
            element.classList.add("x");
            inter_npc = false;
            inter = true;
            num_jug_p2++;
            whowins();
        } else {
            inter_npc = false;
            inter = true;
        }
    }
    
}

// Funciones para comprobar que jugador gana la ronda, empata o gana la partida
function whowins() {

    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var b1 = document.getElementById("b1"); 
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    


    if (a1.classList.contains('circulo') && a2.classList.contains('circulo') && a3.classList.contains('circulo')) {

        wl.appendChild(document.createTextNode(player1_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p1score_score++;
        p1score.innerText = p1score_score;
        winner = player1_name;

    } else if (b1.classList.contains('circulo') && b2.classList.contains('circulo') && b3.classList.contains('circulo')) {
        
        wl.appendChild(document.createTextNode(player1_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p1score_score++;
        p1score.innerText = p1score_score;
        winner = player1_name;

    } else if (c1.classList.contains('circulo') && c2.classList.contains('circulo') && c3.classList.contains('circulo')) {
       
        wl.appendChild(document.createTextNode(player1_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p1score_score++;
        p1score.innerText = p1score_score;
        winner = player1_name;

    } else if (a1.classList.contains('circulo') && b1.classList.contains('circulo') && c1.classList.contains('circulo')) {
       
        wl.appendChild(document.createTextNode(player1_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p1score_score++;
        p1score.innerText = p1score_score;
        winner = player1_name;

    } else if (a2.classList.contains('circulo') && b2.classList.contains('circulo') && c2.classList.contains('circulo')) {
        
        wl.appendChild(document.createTextNode(player1_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p1score_score++;
        p1score.innerText = p1score_score;
        winner = player1_name;

    } else if (a3.classList.contains('circulo') && b3.classList.contains('circulo') && c3.classList.contains('circulo')) {
        
        wl.appendChild(document.createTextNode(player1_name + " WON THE ROUND!"));
            wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p1score_score++;
        p1score.innerText = p1score_score;

    } else if (a1.classList.contains('circulo') && b2.classList.contains('circulo') && c3.classList.contains('circulo')) {
       
        wl.appendChild(document.createTextNode(player1_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p1score_score++;
        p1score.innerText = p1score_score;
        winner = player1_name;

    } else if (a3.classList.contains('circulo') && b2.classList.contains('circulo') && c1.classList.contains('circulo')) {
        
        wl.appendChild(document.createTextNode(player1_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p1score_score++;
        p1score.innerText = p1score_score;
        winner = player1_name;

    } else if (a1.classList.contains('x') && a2.classList.contains('x') && a3.classList.contains('x')) {
        
        wl.appendChild(document.createTextNode(player2_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p2score_score++;
        p2score.innerText = p2score_score;
        winner = player2_name;

    } else if (b1.classList.contains('x') && b2.classList.contains('x') && b3.classList.contains('x')) {
        
        wl.appendChild(document.createTextNode(player2_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p2score_score++;
        p2score.innerText = p2score_score;
        winner = player2_name;

    } else if (c1.classList.contains('x') && c2.classList.contains('x') && c3.classList.contains('x')) {
        
        wl.appendChild(document.createTextNode(player2_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p2score_score++;
        p2score.innerText = p2score_score;
        winner = player2_name;

    } else if (a1.classList.contains('x') && b1.classList.contains('x') && c1.classList.contains('x')) {
        
        wl.appendChild(document.createTextNode(player2_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p2score_score++;
        p2score.innerText = p2score_score;
        winner = player2_name;

    } else if (a2.classList.contains('x') && b2.classList.contains('x') && c2.classList.contains('x')) {
        
        wl.appendChild(document.createTextNode(player2_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p2score_score++;
        p2score.innerText = p2score_score;
        winner = player2_name;

    } else if (a3.classList.contains('x') && b3.classList.contains('x') && c3.classList.contains('x')) {
        
        wl.appendChild(document.createTextNode(player2_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p2score_score++;
        p2score.innerText = p2score_score;
        winner = player2_name;

    } else if (a1.classList.contains('x') && b2.classList.contains('x') && c3.classList.contains('x')) {
        
        wl.appendChild(document.createTextNode(player2_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p2score_score++;
        p2score.innerText = p2score_score;
        winner = player2_name;

    } else if (a3.classList.contains('x') && b2.classList.contains('x') && c1.classList.contains('x')) {
        
        wl.appendChild(document.createTextNode(player2_name + " WON THE ROUND!"));
        wl.classList.remove('oculto');
        button.classList.remove('oculto');
        button.hidden = false;;
        inter = false;
        inter_npc = false;
        p2score_score++;
        p2score.innerText = p2score_score;
        winner = player2_name;

    } else if ( (a1.classList.contains('x') || a1.classList.contains('circulo')) && (a2.classList.contains('x') || a2.classList.contains('circulo')) && (a3.classList.contains('x') || a3.classList.contains('circulo')) 
    && (b1.classList.contains('x') || b1.classList.contains('circulo')) && (b2.classList.contains('x') || b2.classList.contains('circulo')) && (b3.classList.contains('x') || b3.classList.contains('circulo')) 
    && (c1.classList.contains('x') || c1.classList.contains('circulo')) && (c2.classList.contains('x') || c2.classList.contains('circulo')) && (c3.classList.contains('x') || c3.classList.contains('circulo')) ) {
      
      wl.appendChild(document.createTextNode("It was a tie!"));
      wl.classList.remove('oculto');
      button.classList.remove('oculto');
      button.hidden = false;;
      inter = false;
      inter_npc = false;
      winner = 'Tie';

    }
    
    if ((p1score_score == 3) || (p2score_score == 3)) {

        wl.innerText = "";
        if (p1score_score == 3) {
            wl.appendChild(document.createTextNode(player1_name + " WON THE GAME!!!!"));
            winner = player1_name;
        } else if (p2score_score == 3) {
            wl.appendChild(document.createTextNode(player2_name + " WON THE GAME!!!!"));
            winner = player2_name;
        }
       
        wl.classList.remove('oculto');
        button.classList.add("oculto");
        button.hidden = true;
        stats.classList.remove('oculto');
        stats.hidden = false;
        button2.classList.remove('oculto');
        button2.hidden = false;
        inter = false;
        inter_npc = false;

        num_round++;
        createStat();

    }

}

// Funcion para añadir los movimientos a la lista de jugadas
function createJugada(name, id) {
    var list = document.getElementById("list");
    let newjugada = document.createElement("li");

    newjugada.appendChild(document.createTextNode(name + ": " + id));
    list.appendChild(newjugada);
}

// Funcion para reiniciar la ronda/partida
function reset(type) {

    if (type == "round") {
        button.classList.add("oculto");
        button.hidden = true;
    } else if (type == "game") {
        button2.classList.add("oculto");
        button2.hidden = true;
        window.location.reload();
    }

    inter = true;
    inter_npc = false;
    a1.classList.remove('x', 'circulo');
    a2.classList.remove('x', 'circulo');
    a3.classList.remove('x', 'circulo');
    b1.classList.remove('x', 'circulo');
    b2.classList.remove('x', 'circulo');
    b3.classList.remove('x', 'circulo');
    c1.classList.remove('x', 'circulo');
    c2.classList.remove('x', 'circulo');
    c3.classList.remove('x', 'circulo');
    
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }

    cont = 0;
    wl.innerText = "";
    num_round++;

    createStat();

    whostarts();
}

// Funcion para crear las estadisticas de cada ronda 
function createStat() {
    var ap = document.getElementById("body_stats");
    var row = document.createElement('tr');
    var td_num_round = document.createElement('td');
    var td_winner = document.createElement('td');
    var td_jug1 = document.createElement('td');
    var td_jug2 = document.createElement('td');

    ap.appendChild(row);
    td_num_round.appendChild(document.createTextNode(num_round));
    row.appendChild(td_num_round);
    td_winner.appendChild(document.createTextNode(winner));
    row.appendChild(td_winner);
    td_jug1.appendChild(document.createTextNode(num_jug_p1));
    row.appendChild(td_jug1);
    td_jug2.appendChild(document.createTextNode(num_jug_p2));
    row.appendChild(td_jug2);
    
    num_jug_p1 = 0;
    num_jug_p2 = 0;
}

// Funcion para mostrar la tabla de estadisticas
function showStats() {
    console.log("jug1: " + num_jug_p1 + " jug2: " + num_jug_p2);
    stats_a.classList.remove('oculto');
    scoreboard.classList.add('oculto');
    dashboard.classList.add('oculto');
    gb.classList.add('oculto');
}

// Funcion para establecer los nombres de los usuarios
function setName(num) {
    if (num == 1) {
        player1_name = prompt("Player1's name");

    } else if (num == 2 ) {
        player2_name = prompt("Player2's name");
    }

    if (player1_name != null && player2_name != null ) {
        if (player1_name == player2_name) {
            alert("No podeis tener el mismo nombre");
            setName(2);
        }
    }
    
}

// Declaracion de todas variables que necesitaremos para el juego
var inter = true;
var inter_npc = false;
var gb = document.getElementById("gb");
var wl = document.getElementById("wl");
var button = document.getElementById("reset");
var button2 = document.getElementById("reset2");
var stats = document.getElementById("stats");
var gameboard = document.getElementById("gameboard");
var dashboard = document.getElementById("dashboard");
var scoreboard = document.getElementById("scoreboard");
var spb = document.getElementById("spb");
var mpb = document.getElementById("mpb");
var sgm = document.getElementById("selectgm");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player1_name = "";
var player2_name = "";
var singleplayer = false;
var multiplayer = false;
var p1score = document.getElementById("player1-score");
var p2score = document.getElementById("player2-score");
var p1score_score = Number(p1score.innerText);
var p2score_score = Number(p2score.innerText);
var cont = 0;
var num_jug_p1 = 0;
var num_jug_p2 = 0;
var player1_name_stats = document.getElementById("player1_name_moves");
var player2_name_stats = document.getElementById("player2_name_moves");
var num_round = 0;
var stats_a = document.getElementById("stats_a");

// Evento para el modo PvM 
spb.addEventListener('click', () => {

    player1_name = "YOU";
    player2_name = "NPC";

    player1_name_stats.appendChild(document.createTextNode(player1_name + "'s moves"));
    player2_name_stats.appendChild(document.createTextNode(player2_name + "'s moves"));
    player1.appendChild(document.createTextNode(player1_name));
    player2.appendChild(document.createTextNode(player2_name));
    scoreboard.classList.remove('oculto');
    dashboard.classList.remove('oculto');
    gb.classList.remove('oculto');
    sgm.classList.add('oculto');
    spb.classList.add('oculto');
    mpb.classList.add('oculto');

    singleplayer = true;

    whostarts();
});

// Evento para el modo PvP
mpb.addEventListener('click', () => {

    setName(1);
    setName(2);

    if (player1_name == null) {
        player1_name = "Player1";
    }

    if (player2_name == null) {
        player2_name = "Player2";
    }
    
    player1_name_stats.appendChild(document.createTextNode(player1_name + "'s moves"));
    player2_name_stats.appendChild(document.createTextNode(player2_name + "'s moves"));

    player1.appendChild(document.createTextNode(player1_name));
    player2.appendChild(document.createTextNode(player2_name));

    scoreboard.classList.remove('oculto');
    dashboard.classList.remove('oculto');
    gb.classList.remove('oculto');
    sgm.classList.add('oculto');
    spb.classList.add('oculto');
    mpb.classList.add('oculto');

    multiplayer = true;

    whostarts();

});

// Evento del tablero para jugar
gameboard.addEventListener('click', e => {   
    
    if (p1score_score != 3 && p2score_score != 3) {

        if (cont == 1) {
            wl.innerText = "";
        }

        if (e.target.id !== "gameboard") {

            if (singleplayer) {
                if (inter) {
                    player("jug1", e.target.id);
                } 
                
                if (inter_npc) {
                    npc();
                }

            } else if (multiplayer) {
                
                if (inter) {
                    player("jug1", e.target.id);
                } else if (inter_npc) {
                    player("jug2", e.target.id);
                }       
            }
            
        }

        cont++;

    }   

});

// Evento para reiniciar la ronda
button.addEventListener('click', () => {
    reset("round");
});

// Evento para reiniciar la partida
button2.addEventListener('click', () => {
    reset("game");
});

// Evento para ver las estadisticas
stats.addEventListener('click', () => {
    showStats();
});