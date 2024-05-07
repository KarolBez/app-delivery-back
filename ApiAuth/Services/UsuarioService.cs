using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth.Services
{
    public class IUsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _repository;
        private readonly IMapper _mapper;

        public UsuarioService(IUsuarioRepository repository, IMapper mapper)
        {

            _repository = repository;
            _mapper = mapper;
        }

        public async Task<UsuarioDTO> Alterar(UsuarioDTO usuarioDTO)
        {
            var usuario = mapper.Map<Usuario>(usuarioDTO);
            var usuarioAlterado = await_repository.Alterar(usuario);
            return _mapper.Map<UsuarioDTO>(usuarioAlterado);
        }

        public Task<UsuarioDTO> Incluir(UsuarioDTO usuarioDTO)
        {
            var usuario = mapper.Map<Usuario>(usuarioDTO);
            var usuarioIncluido = await_repository.Incluir(usuario);
            return _mapper.Map<UsuarioDTO>(usuarioIncluido);
        }

        public Task<UsuarioDTO> Excluir(UsuarioDTO nome)
        {
            var usuario = await _repository.SelecionarExcluir(nome);
            return _mapper.Map<UsuarioDTO>(usuario);
        }

        public Task<UsuarioDTO> SelecionarAsync(UsuarioDTO nome)
        {
            var usuario = await _repository.SelecionarAsync(nome);
            return _mapper.Map<UsuarioDTO>(usuario);
        }

        public async Task<IEnumerable<UsuarioDTO>> SelecionarTodosAsync()
        {
            var usuarios = await _repository.SelecionarAsync();
            return _mapper.Map<IEnumerable<UsuarioDTO>>(usuarios);
        }    
        
    }
}