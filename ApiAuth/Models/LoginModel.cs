using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "O e=mail é obrigatório")]
        [DataType(DataType.EmailAdress)]

        public string Email {get ; set; }
        [Required(ErrorMessage = "A senha é obrigatória")]
        [DataType(DataType.Password)]

        public string Password {get ; set; }
    }
}