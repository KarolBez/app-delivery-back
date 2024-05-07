using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth.DTO
{
    public class UsuarioDTO
    {
        [Required(ErrorMessage = "O nome é obrigatório.")] 
        [MaxLenght(250,ErrorMessage = "O nome não pode ter mais de 250 caracteres.")]
        
        public string nome {get; set;}

        public string cpf {get; set; }

	    public string telefone {get; set; } 

        [Required(ErrorMessage = "O E-mail é obrigatório.")] 
        [MaxLenght(200,ErrorMessage = "O e-mail não pode ter mais de 200 caracteres.")]
        
	    public string email {get; set; }

	    public string codigo_pessoa {get; set; }
        [NotMapped]

        [Required(ErrorMessage = "O senha é obrigatória.")] 
        [MinLenght(8, ErrorMessage = "A senha deve ter, no mínimo , 8 caracteres.")]
        [MaxLenght(100,ErrorMessage = "A senha deve ter, no máximo, 100 caracteres. ")]
        
        public string Password {get; set;}
    }
}