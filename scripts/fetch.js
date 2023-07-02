fetch("games.json")
          .then((res) => {
            return res.json();
          })
          .then((data) => 
                    data.items.forEach(items => {
                        let gameList = document.getElementById("mygames");
                        let btn = document.createElement("div");
                        gamename = "<div id='gamecard1'><h4>" + items.name + "</h4></div>";
                        gamedetails = "<div id='gamecard2'>" + items.info + "</div>"
                        btn.innerHTML = gamedetails + gamename;
                        btn.id = "game";
                        let banner = items.banner;
                        btn.style.backgroundImage = "url(" + banner + ")";
                        btn.onclick = () => {
                            window.location.href = items.preview;
                        };
                        gameList.appendChild(btn);
                    })
                        );
