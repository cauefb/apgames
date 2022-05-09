using AutoMapper;
using Orders.Api.Models;
using OrderService.Domain.Models;


namespace OrderService.Services.API.Configuration.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        
            public DomainToViewModelMappingProfile()
            {
                CreateMap<OrderItem, OrderItemViewModel>();
                CreateMap<Order, OrderViewModel >();
                
            }
        
    }
}
