using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiAuth.Interfaces;
using ApiAuth.Controllers;
using ApiAuth.Services;
using ApiAuth.IdentifyModel;
using ApiAuth.Models.UserToken;
using ApiAuth.Identify.AuthenticateService;


namespace ApiAuth
{
    public static class DependecyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UsePostgres(configuration.GetConnectionString("DefaultConnection"),
                    b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName));
                
            });

            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticateScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticateScheme;
            }
            ).AddJwtBearer(options =>
            {
                options.TokenValidationParamets = new Microsoft.IdentifyModel.Tokens.TokenValidationParamets
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,

                    ValidIssuer = configuration["jwt:issuer"],
                    ValidAudience = configuration["jwt:audience"],
                    IssuerSigninKey = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(configuration["jwt:secretKey"])),
                    ClockSkew = TimeSpan.Zero    
               };
               
            });    

            

            services.AddAutoMapper(typeof(DomainToDTOMappingProfile));

            //Repositories
            services.AddScoped<IClienteRepository, ClienteRepository>();
            services.AddScoped<IUsuarioRepository, UsuarioRepository>();
           

            //Services
            services.AddScoped<IClienteService, ClienteService>();
            services.AddScoped<IAuthenticateRepository,AuthenticateService>();

            return services;
                
                
               
               
               
               
            };
            
            
            



        }


    }
