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

    public class UsuarioController : Controller
    {


        [HttpPost("register")]
        public async Task<ActionResult<UserToken>> Incluir(UsuarioDTO UsuarioDTO)
        {
            return View()
        }






    }
    
 } 
    
