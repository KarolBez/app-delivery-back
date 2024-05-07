using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth.Context
{
    public class ApplicationDbContext : DbContext
    {
        protected ApplicationDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Cliente> Cliente {get; set;}

        public DbSet<Usuario> Usuario {get; set;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfigurationFromAssembly(typeof(ApplicationDbContext).Assembly);
        } 
        
    }
}