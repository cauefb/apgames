
using Microsoft.OpenApi.Models;
namespace Orders.Api.Configuration
{
    public static class SwaggerConfig
    {
        public static void AddSwaggerConfiguration(this IServiceCollection services)
        {
            services.AddSwaggerGen(Options =>
            {
                Options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Orders Service",
                    Description = "Orders Service API Management",
                    Contact = new OpenApiContact { Name = "Cauê", Email = "caue@gmail.com" }
                });
            });
        }

        public static void useSwaggerSetup(this IApplicationBuilder app, IWebHostEnvironment environment)
        {
            //Configure the HTTP request pipeline
            if (environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
                });
            }
        }
    }
}
