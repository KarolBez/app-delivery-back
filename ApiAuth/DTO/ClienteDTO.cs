using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth.DTO
{
    public class ClienteDTO
    {
        
        public int Id {get; set; }
        [Required]

        public string codigo_cliente { get; set; }
        [Required]
        [StringLenght(10)]

        public string nome_titular { get; set; }
        [Required]
        [StringLenght(50)]

        public string numero_cartao { get; set; }
        [Required]
        [StringLenght(16)]

        public string codigo_pessoa { get; set; }
        [Required]
        [StringLenght(10)]
 
        public string codigo_compra { get; set; }
        [Required]
        [StringLenght(10)]
 
    }
}