fetch("games.json")
          .then((res) => {
            return res.json();
          })
          .then((data) => 
                    data.items.forEach(items => {
                        let gameList = document.getElementById("mygames");
                        let btn = document.createElement("div");
                        gamename = "<h4>" + items.name + "</h4>";
                        btn.innerHTML = gamename + "<br>" + items.info;
                        btn.id = "game";
                        let banner = items.banner;
                        btn.style.backgroundImage = "url(" + banner + ")";
                        btn.onclick = () => {
                            window.location.href = items.link;
                        };
                        gameList.appendChild(btn);
                    })
                        );
