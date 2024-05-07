using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth.Entities
{
    public class Cliente
    {
        public int Id {get;private set; }

        public string codigo_cliente {get;private set; }

	    public string numero_cartao {get;private set; } 

	    public string nome_titular {get;private set; }

	    public string codigo_seguranca {get;private set; } 

	    public string validade {get;private set; } 

	    public string codigo_pessoa {get;private set; }

	    public string codigo_compra {get;private set; }

        public Cliente( int id,string codigo_cliente,string numero_cartao, string nome_titular,string codigo_seguranca,string validade,string codigo_pessoa,string codigo_compra) 

        {
            DomainExceptionValidation.When(id < 0, "O Id do cliente deve ser positivo."); 
            Id = id;
            ValidateDomain(codigo_cliente,numero_cartao,nome_titular,codigo_seguranca,validade,codigo_pessoa,codigo_compra)
        }

         public Cliente( string codigo_cliente,string numero_cartao, string nome_titular,string codigo_seguranca,string validade,string codigo_pessoa,string codigo_compra) 


        {
             ValidateDomain(codigo_cliente,numero_cartao,nome_titular,codigo_seguranca,validade,codigo_pessoa,codigo_compra)
        }

        public void Update( string codigo_cliente,string numero_cartao, string nome_titular,string codigo_seguranca,string validade,string codigo_pessoa,string codigo_compra) 


        public void ValidateDomain ( string codigo_cliente,string numero_cartao, string nome_titular,string codigo_seguranca,string validade,string codigo_pessoa,string codigo_compra)
        {

           DomainExceptionValidation.When(codigo_cliente.Length != 10, "O código do cliente deve ter, no máximo, 10 caracteres."); 
           DomainExceptionValidation.When(numero_cartao.Length > 16, "O número do cartão deve ter, no máximo, 16 caracteres.");
           DomainExceptionValidation.When(nome_titular.Length > 50, "O nome do titular deve ter, no máximo, 50 caracteres.");
           DomainExceptionValidation.When(codigo_pessoa.Length != 10, "O código da pessoa deve ter, no máximo, 10 caracteres.");
           DomainExceptionValidation.When(codigo_compra.Length != 10, "O código da compra deve ter, no máximo, 10 caracteres.");

            Id = id;
            codigo_cliente = codigo_cliente;
            numero_cartao = numero_cartao;
            nome_titular = nome_titular;
            codigo_seguranca = codigo_seguranca;
            validade = validade;
            codigo_pessoa = codigo_pessoa;
            codigo_compra = codigo_compra;

        }




    }
}