
            function checkForm() {
                var name = document.forms[0].name.value;
                var second_name = document.forms[0].second_name.value;
                var last_name = document.forms[0].last_name.value;
                var password = document.forms[0].password.value;
                var second_pass = document.forms[0].second_pass.value;
                var email = document.forms[0].email.value;
                var city = document.forms[0].city.value;
            
                if (name == "") {
                    alert("Введите имя.");
                    document.forms[0].name.focus();
                    return false;
                } 
                else if (second_name == "") {
                    alert("Введите фамилию.");
                    document.forms[0].second_name.focus();
                    return false;
                }
                else if (last_name == "") {
                    alert("Введите отчество.");
                    document.forms[0].last_name.focus();
                    return false;
                }
                else if (password.length < 5) {
                    alert("Пароль должен содержать более 4-х символов.");
                    document.forms[0].password.focus();
                    return false;
                } else if (password != second_pass) {
                    alert("Пароли не совпадают.");
                    document.forms[0].second_pass.focus();
                    return false;
                } else if (email.length == 0) {
                    alert("Введите электронный адрес");
                    document.forms[0].email.focus();
                    return false;
                } else if (email.indexOf('@') == -1) {
                    alert("Электронный адрес должен содержать символ '@'.");
                    document.forms[0].email.focus();
                    return false;
                } else if (city.length < 3) {
                    alert("Поле город должно содержать более 3 символов.");
                    document.forms[0].city.focus();
                    return false;
                }
                return true;
            }