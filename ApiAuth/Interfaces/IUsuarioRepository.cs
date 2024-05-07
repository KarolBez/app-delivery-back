using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth.Interfaces
{
    public interface IUsuarioRepository
    {
        Task<Usuario>  Incluir(Usuario Usuario);

        Task<Usuario> Alterar(Usuario Usuario);

        Task<Usuario> Excluir(int id);

        Task<Usuario> SelecionarAsync(int id);

        Task<IEnumerable<Usuario>> SelecionarTodosAsync();
    }
}