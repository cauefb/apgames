using Microsoft.EntityFrameworkCore;
using OrderService.Infra.Data.Context;

namespace Orders.Api.Configuration
{
    public static class DatabaseConfig
    {
        public static void AddDatabaseConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<OrderServiceContext>(OptionsBuilderConfigurationExtensions =>
            {
                OptionsBuilderConfigurationExtensions.UseSqlServer(configuration.GetConnectionString("DefaultConection"));
            });
        }
    }
}
