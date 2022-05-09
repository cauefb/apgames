using OrderService.Services.API.Configuration.AutoMapper;

namespace Orders.Api.Configuration
{
    public static class AutoMapperConfig
    {
        public static void AddAutoMapperConfig(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(DomainToViewModelMappingProfile), typeof(ViewModelToDomainMappingProfile));
            //services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        }
    }
}
