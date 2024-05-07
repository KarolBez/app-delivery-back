using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth.Repositories
{
    public class ClienteRepository : IClienteRepository
    {
        private readonly ApplicationDbContext _context;

        public ClienteRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Cliente> Alterar(Cliente cliente)
        {
            _context.Cliente.Update(cliente);
            await _context.SaveChangesAsync();
            return cliente;
        }

        public async Task<Cliente> Excluir(int id)
        {
            var cliente = await _context.Cliente.FindAsync(id);
            if(cliente != null)
            {
                _context.Cliente.Remove(cliente);
                await _context.SaveChangesAsync();
                return cliente;
            }

            return null;

        }

        public async Task<Cliente> Incluir(Cliente cliente)
        {
            _context.Cliente.Add(cliente);
            await _context.SaveChangesAsync();
            return cliente;
        }

        public async Task<Cliente> SelecionarAsync(int id)
        {
            return await _context.Cliente.AsNoTracking().FirstOrDefaultAsync(x => x.Id ==id);
        }

        public async Task<IEnumerable<Cliente>> SelecionarTodosAsync()
        {
            return await _context.Cliente.ToListAsync();
        }


    }
}