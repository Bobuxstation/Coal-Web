fetch("stories.json")
          .then((res) => {
            return res.json();
          })
          .then((data) => 
                    data.stories.forEach(items => {
                        let gameList = document.getElementById("mygames");
                        let btn = document.createElement("div");
                        gamename = "<h4>" + items.name + "</h4>";
                        btn.innerHTML = gamename + "<br>" + "<br>" + items.info;
                        btn.id = "game";
                        let banner = items.banner;
                        btn.style.backgroundImage = "url(" + banner + ")";
                        btn.onclick = function () {
                            window.location.replace(items.link);
                        };
                        gameList.appendChild(btn);
                    })
                        );