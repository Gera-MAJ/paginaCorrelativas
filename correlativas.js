window.onload = inicio()

    function inicio() {
        document.getElementById('boton01').addEventListener('click', btnDeportes)
        document.getElementById('boton02').addEventListener('click', btnExactas)
        document.getElementById('boton03').addEventListener('click', btnIdiomas)
        document.getElementById('boton04').addEventListener('click', btnNaturales)
        document.getElementById('boton05').addEventListener('click', btnNivel)
        document.getElementById('boton06').addEventListener('click', btnSociales)
        document.getElementById('boton07').addEventListener('click', btnTecnologia)


        const deportes = document.getElementById('cont_deportivas')
        const exactas = document.getElementById('cont_exactas')
        const idiomas = document.getElementById('cont_idiomas')
        const naturales = document.getElementById('cont_naturales')
        const nivel = document.getElementById('cont_nivel')
        const sociales = document.getElementById('cont_sociales')
        const tecnologia = document.getElementById('cont_tecnologia')
        const botonDep = document.getElementById('boton01')
        const botonExac = document.getElementById('boton02')
        const botonIdi = document.getElementById('boton03')
        const botonNat = document.getElementById('boton04')
        const botonNiv = document.getElementById('boton05')
        const botonSoc = document.getElementById('boton06')
        const botonTec = document.getElementById('boton07')
        

        function btnDeportes(){

            if (deportes.style.display == "none" || deportes.style.display==''){
                deportes.style.display = "block"
                botonDep.style.textAlign = "left"
                botonDep.style.color = '#fbf8f8'
            }else{
                deportes.style.display = "none"
                botonDep.style.textAlign = "center"
                botonDep.style.color = '#061e24'
            }   
        }

        function btnExactas(){

            if (exactas.style.display == 'none' || exactas.style.display == ''){
                exactas.style.display = 'block'
                botonExac.style.textAlign = "left"
                botonExac.style.color = '#fbf8f8'
            }else{
                exactas.style.display = 'none'
                botonExac.style.textAlign = "center"
                botonExac.style.color = '#061e24'
            }   
        }

        function btnIdiomas(){

            if (idiomas.style.display === 'none' || idiomas.style.display === ''){
                idiomas.style.display = 'block'
                botonIdi.style.textAlign = "left"
                botonIdi.style.color = '#fbf8f8'
            }else{
                idiomas.style.display = 'none'
                botonIdi.style.textAlign = "center"
                botonIdi.style.color = '#061e24'
            }   
        }

        function btnNaturales(){

            if (naturales.style.display === 'none' || naturales.style.display === ''){
                naturales.style.display = 'block'
                botonNat.style.textAlign = "left"
                botonNat.style.color = '#fbf8f8'
            }else{
                naturales.style.display = 'none'
                botonNat.style.textAlign = "center"
                botonNat.style.color = '#061e24'
            }   
        }

        function btnNivel(){

            if (nivel.style.display === 'none' || nivel.style.display === ''){
                nivel.style.display = 'block'
                botonNiv.style.textAlign = "left"
                botonNiv.style.color = '#fbf8f8'
            }else{
                nivel.style.display = 'none'
                botonNiv.style.textAlign = "center"
                botonNiv.style.color = '#061e24'
            }   
        }

        function btnSociales(){

            if (sociales.style.display === 'none' || sociales.style.display === ''){
                sociales.style.display = 'block'
                botonSoc.style.textAlign = "left"
                botonSoc.style.color = '#fbf8f8'
            }else{
                sociales.style.display = 'none'
                botonSoc.style.textAlign = "center"
                botonSoc.style.color = '#061e24'
            }   
        }

        function btnTecnologia(){

            if (tecnologia.style.display === 'none' || tecnologia.style.display === ''){
                tecnologia.style.display = 'block'
                botonTec.style.textAlign = "left"
                botonTec.style.color = '#fbf8f8'
            }else{
                tecnologia.style.display = 'none'
                botonTec.style.textAlign = "center"
                botonTec.style.color = '#061e24'
            }   
        }
    }

    


