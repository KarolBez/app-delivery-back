using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth.Entities
{
    public class Usuario
    {

        public string nome {get;private set;}

        public string cpf {get;private set; }

	    public string telefone {get;private set; } 

	    public string email {get;private set; }

	    public string codigo_pessoa {get;private set; }

        public byte[] PasswordHash {get; private set;}

        public byte[] PasswordSalt {get; private set;}


    public Usuario( string nome,string cpf,string telefone, string email,string codigo_pessoa) 


        {
             ValidateDomain(nome,cpf,telefone,email,codigo_pessoa)
        }

        public void AlterarSenha(byte[] passwordHash, byte[] passwordSalt)
        {
            PasswordHash = passwordHash;
            PasswordSalt = passwordSalt;
        }


        public void Update(string nome,string cpf,string telefone, string email,string codigo_pessoa) 


        public void ValidateDomain ( string codigo_cliente,string numero_cartao, string nome_titular,string codigo_seguranca,string validade,string codigo_pessoa,string codigo_compra)
        {

           DomainExceptionValidation.When(nome == null, "O Nome é obrigatório."); 
           DomainExceptionValidation.When(cpf.Length != 11, "O CPF deve ter 11 caracteres.");
           DomainExceptionValidation.When(email == null, "O Email é obrigatório.");
           DomainExceptionValidation.When(codigo_pessoa.Length != 10, "O código da pessoa deve ter, no máximo, 10 caracteres.");
           DomainExceptionValidation.When(telefone.Length > 11, "O Telefome deve ter, no máximo, 11 caracteres.");

            nome = nome;
            cpf = cpf;
            telefone = telefone;
            email = email;
            codigo_pessoa = codigo_pessoa;
            

        }




    }
}
    