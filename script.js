      function genererCarte() {
            const pseudo = document.getElementById("pseudo").value;
            const nom = document.getElementById("nom").value;
            const nationalite = document.getElementById("nationalite").value;
            const statut = document.getElementById("statut").value;
            const genre = document.getElementById("genre").value;
            const citation = document.getElementById("citation").value;
            const file = document.getElementById("photoInput").files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imageData = encodeURIComponent(e.target.result);
                    window.location.href = `carte.html?pseudo=${pseudo}&nom=${nom}&nationalite=${nationalite}&statut=${statut}&genre=${genre}&citation=${citation}&photo=${imageData}`;
                };
                reader.readAsDataURL(file);
            } else {
                window.location.href = `carte.html?pseudo=${pseudo}&nom=${nom}&nationalite=${nationalite}&statut=${statut}&genre=${genre}&citation=${citation}`;
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
