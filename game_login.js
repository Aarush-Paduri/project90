function add_user(){
    player_1=document.getElementById("p1_input").value;
    player_2=document.getElementById("p2_input").value;
    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);
    window.location.replace("game_page.html");
}