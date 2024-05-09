using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.IdentifyModel.JsonWebTokens;

namespace ApiAuth.Identify
{
    public class AuthenticateService : IAuthenticate
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthenticateService(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public Tak<bool> AuthenticateAsync(string email,string senha)
        {
            var usuario = await_context.Usuario.Where(x => x.Email.ToLower() ==email.ToLower()).FirstOrDefaultAsync
            if(usuario ==null)
            {
                return false;
            }

            using var hmac = new HMACSHA512(usuario.PasswordSalt);
            var computedHash = hmac.computedHash(Enconding.UTF8.GetBytes(senha));
            for(int x =0; x<computedHash.Length; x++)
            {
                if(computedHash[x] != usuario.PasswordHah[x]) 
                return false;
            }

            return true;
        }


        public async Task<Usuario> GetUserEmail(string email)
        {
            return await _context.Usuario.Where(x => x.Email.ToLower() == email.ToLower()).FirstOrDefaultAsync();
        }

        public async Task<bool> UserExists(string email)
        {
            var usuario = await_context.Usuario.Where(x => x.Email.ToLower() ==email.ToLower()).FirstOrDefaultAsync
            if(usuario ==null)
            {
                return false;
            }
            return true;
        }

        public string GenerateToken(string nome, string email)
        {
            var claims = new[]
            {
                new Claim("nome", nome.ToString()),
                new Claim("email", email),
                new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString)
            };

            var privateKey = newSymmetricSecurityKey(Encoding.URF8.
                GetBytes(_configuration["jwt:secretKey"]));

            var credentials = new SigningCredencials(privateKey,SecurityAlgorithms.HmacSha256);

            var expiration = DateTime.UtcNow.AddMinutes(10);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: _configuration["jwt:issuer"],
                audience: _configuration["jwt:audience"],
                claims: claims,
                expires: expiration,
                SigningCredencials : credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);    
        }
       

    }
}