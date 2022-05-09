using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Orders.Api.Models;
using OrderService.Domain.Models;
using OrderService.Domain.Services;

namespace Orders.Api.Controllers
{
    [Route("api/orders")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService orderService;
        private readonly IMapper mapper;

        public OrdersController(IOrderService orderService, IMapper mapper)
        {
            this.orderService = orderService;
            this.mapper = mapper;
        }

        [HttpGet("{code}")]
        public ActionResult<OrderViewModel> Get(string code)
        {
            var order = orderService.FindOrder(code);
            var orderViewModel = mapper.Map<OrderViewModel>(order);
            return Ok(orderViewModel);
        }

        [HttpPost]
        public IActionResult Post([FromBody] CreateOrderViewModel order)
        {
            if (ModelState.IsValid)
            {
                var resultOrder = orderService.CreateOrder(mapper.Map<Order>(order));
                if (resultOrder.IsValid)

                    return Created($"/api/orders/{resultOrder.Model.Code}", mapper.Map<OrderViewModel>(resultOrder.Model));
                else
                    return BadRequest();

            }

            return BadRequest(ModelState);

        }

      


    }
}
