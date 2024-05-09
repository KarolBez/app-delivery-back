using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth.Account
{
    public interface IAuthenticate
    {
        Task<bool> AuthenticateAsync(string email, string senha);

        Task<bool> UserExists(string email);

        public string GenerateToken(string nome, string email);
        
        public Task<Usuario> GetUserByEmail(string email);


    }
}