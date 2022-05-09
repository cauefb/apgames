//using AutoMapper;
using OrderService.Domain.Interfaces;
using OrderService.Infra.Data.Repository;
using OrderService.Domain.Services;
//using OrderService.Services.API.Consumers;
//using OrderService.Services.API.Services;


namespace Orders.Api.Configuration
{
    public static class DepedencyInjectionConfig
    {
        public static void AddDependencyInjectionConfiguration(this IServiceCollection services)
        {
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<IProductRepository, ProductRepositoryInMemory>();
            services.AddScoped<IOrderService, OrderServiceImpl>();
        }
    }
}
