using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAuth
{
    public class Startup
    {

      public Startup(IConfiguration configuration)
      {  
        Configuration = configuration;
      } 
    }
}

public IConfiguration Configuration {get;}

public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<ProjetoBDContext>(options =>
    {
        options.Postgres(Configuration.GetConnectionString("DefaultConnection"));

    });

    services.AddController();
    services.AddInfrastructureSwagger();
    // services.AddSwaggerGen(c =>
    // {       
    //     c.SwaggerDoc("v1",new OpenApiInfo { Tittle = "APP-DELIVERY-BACK-MAIN.API", Version = "v1" });

    // });
    services.AddInfrastructure(Configuration);

}

public void Configure(IApplicationBuilder app, IWestHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
        app.UseSwagger();
        app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1 /swagger.json", "APP-DELIVERY-BACK-MAIN.API v1"));
    }

        app.UseHttpsRedirection();

        app.UseRouting();

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();

        });



}