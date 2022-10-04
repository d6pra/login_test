function logar(){

            var login = document.getElementById('login').value;
            var senha = document.getElementById('senha').value;

            if(login == "admin" && senha == "admin"){
                alert('Sucesso');
                location.href = "home.html";
            }else{
                alert('Usuario ou senha incorretos');
            }

        }

        function logar(){

            var login = document.getElementById('login').value;
            var senha = document.getElementById('senha').value;

            if(login == "trow" && senha == "trow"){
                alert('Sucesso');
                location.href = "home.html";
            }else{
                alert('Usuario ou senha incorretos');
            }

        }