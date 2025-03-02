function getQueryParams() {
            const params = new URLSearchParams(window.location.search);
            return {
                pseudo: params.get("pseudo"),
                nom: params.get("nom"),
                nationalite: params.get("nationalite"),
                statut: params.get("statut"),
                genre: params.get("genre"),
                citation: params.get("citation"),
                photo: params.get("photo")
            };
        }

        const data = getQueryParams();
        document.getElementById("pseudoAffiche").textContent = data.pseudo || "---";
        document.getElementById("nomAffiche").textContent = data.nom || "---";
        document.getElementById("nationaliteAffiche").textContent = data.nationalite || "---";
        document.getElementById("statutAffiche").textContent = data.statut || "---";
        document.getElementById("genreAffiche").textContent = data.genre || "---";
        document.getElementById("citationAffiche").textContent = data.citation || "---";

        if (data.photo) {
            document.getElementById("photoAffiche").src = decodeURIComponent(data.photo);
        }

        function downloadCarte() {
            const card = document.getElementById("carteOtaku");

            setTimeout(() => {
                html2canvas(card, {
                    scale: 3,
                    useCORS: true,
                    allowTaint: false
                }).then(canvas => {
                    const link = document.createElement("a");
                    link.href = canvas.toDataURL("image/png");
                    link.download = "Carte_Otaku.png";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }).catch(error => {
                    console.error("Erreur de capture :", error);
                });
            }, 500);
        }
 
