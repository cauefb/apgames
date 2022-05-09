using AutoMapper;
using Orders.Api.Models;
using OrderService.Domain.Models;


namespace OrderService.Services.API.Configuration.AutoMapper
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        
            public ViewModelToDomainMappingProfile()
            {
                CreateMap<CreateOrderItemsViewModel, OrderItem>();
                CreateMap<CreateOrderViewModel, Order>();
            }
        
    }
}
