using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth.Interfaces
{
    public interface ClienteRepository
    {
        Task<Cliente>  Incluir(Cliente cliente);

        Task<Cliente> Alterar(Cliente cliente);

        Task<Cliente> Excluir(int id);

        Task<Cliente> SelecionarAsync(int id);

        Task<IEnumerable<Cliente>> SelecionarTodosAsync();
    }
}