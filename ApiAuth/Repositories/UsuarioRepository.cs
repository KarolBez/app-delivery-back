using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly ApplicationDbContext _context;

        public UsuarioRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Usuario> Alterar(Usuario usuario)
        {
            _context.usuario.Update(usuario);
            await _context.SaveChangesAsync();
            return usuario;
        }

        public async Task<usuario> Excluir(int id)
        {
            var usuario = await _context.usuario.FindAsync(id);
            if(usuario != null)
            {
                _context.usuario.Remove(usuario);
                await _context.SaveChangesAsync();
                return usuario;
            }

            return null;

        }

        public async Task<usuario> Incluir(usuario usuario)
        {
            _context.Usuario.Add(Usuario);
            await _context.SaveChangesAsync();
            return Usuario;
        }

        public async Task<Usuario> SelecionarAsync(int id)
        {
            return await _context.Usuario.AsNoTracking().FirstOrDefaultAsync(x => x.Id ==id);
        }

        public async Task<IEnumerable<Usuario>> SelecionarTodosAsync()
        {
            return await _context.Usuario.ToListAsync();
        }


    }
}