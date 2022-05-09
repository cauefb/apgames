using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OrderService.Domain.Models;

namespace OrderService.Domain.Services
{
    public interface IOrderService
    {
        //ValidationResult<Order> CreateOrder(Order order);

        ValidationResult<Order> CreateOrder(Order order);
        void CancelOrder(string code);
        Order FindOrder(string code);

        IEnumerable<Order> FindAll(string customerId);
    }
}
