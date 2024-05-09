using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ApiAuth.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClienteController : Controller
    {
        private readonly IClienteRepository _clienteRepository;

        public ClienteController(iClienteRepository clienteRepository)
        {
             __clienteRepository = clienteRepository;
        }

        [HttpGet("SelecionarTodos")]

        public async Task<ActionResult<IEnumerable<Cliente>>> GetClientes()
        {
            return Ok(await __clienteRepository.SelecionarTodos());
        }

        [HttpPost]
        [Authorize]

        public async Task<ActionResult> CadastrarCliente(ClienteDTO clienteDTO)
        {
            __clienteRepository.Incluir(clienteDTO);
            if(await _clienteRepository.SaveAllAsync())
            {

                return Ok("Cliente cadastrado com sucesso!");
            }

            return BadRequest("Ocorreu um erro ao salvar o cliente.");
        }

        [HttpPut]

        public async Task<ActionResult> AlterarCliente(ClienteDTO clienteDTO)
        {
            __clienteRepository.Alterar(clienteDTO);
            if (await __clienteRepository.SaveAllAsync())
            {
                 return Ok("Cliente cadastrado com sucesso!");
            }

            return BadRequest("Ocorreu um erro ao alterar o cliente.");

        [HttpDelete("{Id}")]

        public async Task<ActionResult> ExcluirCliente(int Id)
        {

            var cliente = await _clienteRepository.SelecionarByPk(Id);

            if (cliente == null)
            {
                return NotFound()
            }

            __clienteRepository.Excluir(cliente);
            if (await __clienteRepository.SaveAllAsync())
            {
                 return Ok("Cliente excluído com sucesso!");
            }

            return BadRequest("Ocorreu um erro ao excluir o cliente."); 
        }

        [HttpGet("{Id}")]

        public async Task<ActionResult> SelecionarCliente(int Id)
        {
            var cliente =  _clienteRepository.SelecionarByPk(Id);

            if (cliente == null)
            {
                if (cliente ==null)
            {
                return NotFound("Cliente não encontrado.");
            }

            return Ok(cliente);

            }
        }
        
        }
    }
}