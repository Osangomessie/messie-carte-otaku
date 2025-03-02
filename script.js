
        function genererCarte() {
            const pseudo = document.getElementById("pseudo").value;
            const nom = document.getElementById("nom").value;
            const nationalite = document.getElementById("nationalite").value;
            const statut = document.getElementById("statut").value;
            const genre = document.getElementById("genre").value;
            const citation = document.getElementById("citation").value;
            const file = document.getElementById("photoInput").files[0];

            // Juste pour ce rassurer que tous les champs sont rempli pour eviter d'eventuel bug
            if (!pseudo || !nom || !nationalite || !statut || !genre || !citation) {
                alert("Veuillez remplir tous les champs obligatoires !");
                return;
            }

            if (file) {
                const reader = new FileReader();
                // Lire l'image pour obtenir une URL et l'enregistrer dans localStorage
                reader.onload = function (e) {
                    // Stocker l'image dans localStorage pour éviter les problèmes de longueur d'URL car il y'a une limite
                    localStorage.setItem("otakuPhoto", e.target.result);
                    // Rediriger vers la page carte.html avec les paramètres
                    // lorsque tu veux utiliser les dollars accolé à la variable, tu dois utiliser les backticks ``
                    window.location.href = `carte.html?pseudo=${encodeURIComponent(pseudo)}&nom=${encodeURIComponent(nom)}&nationalite=${encodeURIComponent(nationalite)}&statut=${encodeURIComponent(statut)}&genre=${encodeURIComponent(genre)}&citation=${encodeURIComponent(citation)}`;
                };
                reader.readAsDataURL(file);
            } else { 
                // Rediriger sans photo
                window.location.href = `carte.html?pseudo=${encodeURIComponent(pseudo)}&nom=${encodeURIComponent(nom)}&nationalite=${encodeURIComponent(nationalite)}&statut=${encodeURIComponent(statut)}&genre=${encodeURIComponent(genre)}&citation=${encodeURIComponent(citation)}`;
            }
        }

        document.getElementById("photoInput").addEventListener("change", function () {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imgPreview = document.getElementById("preview");
                    imgPreview.src = e.target.result;
                    imgPreview.style.display = "block";
                };
                reader.readAsDataURL(file);
            }
        });
   
