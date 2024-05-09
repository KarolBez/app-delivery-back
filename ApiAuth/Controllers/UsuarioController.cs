using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IdentifyModel.Tokens.Jwt;

namespace ApiAuth.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class UsuarioController : Controller
    {
        private readonly IAuthenticate _authenticateService;
        private readonly IUsuarioService _usuarioService;

        public UsuarioController(IAuthenticate authenticateService)
        {
            _authenticateService = authenticateService;
        }


        [HttpPost("register")]
        public async Task<ActionResult<UserToken>> Incluir(UsuarioDTO UsuarioDTO)
        {
           if (usuarioDTO ==null)
           {
            return BadRequest("Dados inválidos")
           }

            var emailExiste = await _authenticateService.UserExists(usuarioDTO.Email);

            if(emailExiste)
            {
                return BadRequest("Este e-mail já possui um cadastro.");
            }

            var usuario = await _usuarioService.Incluir(usuarioDTO);
            if(usuario == null)
            {
                return BadRequest("Ocorreu um erro ao cadastrar.");
            }

            var token = _authenticateService.GenerateToken(usuario.nome, usuario.email);
            return new UserToken
            {
                Token = token
            };

        }

        [HttpPost("login")]

        public async Task< ActionResult<UserToken>> Selecionar(LoginModel loginModel)
        {
            var existe = await _authenticateService.UserExists(loginModel.Email);
            if (!existe)
            {
                return Unauthorized("Usuário não existe.");
            }

            var result = await _authenticateService.AuthenticateAsync(loginModel.Email, loginModel.Password)
            if (!result)
            {
                return Unauthorized("Usuário ou senha inválido.");
            }


            var usuario = _authenticateService.GetUserEmail(loginModel.Email);

            var token = _authenticateService.GenerateToken(usuario.nome, usuario.email);

            return new UserToken
            {
                Token = token
            };
        }







    }
    
 } 
    
