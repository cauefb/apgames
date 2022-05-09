using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderService.Domain.Interfaces;
using OrderService.Domain.Models;
using OrderService.Infra.Data.Context;

namespace OrderService.Infra.Data.Repository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly OrderServiceContext orderServiceContext;

        public OrderRepository(OrderServiceContext orderServiceContext)
        {
            this.orderServiceContext = orderServiceContext;
        }
        public Order GetByCode(string code)
        {
            return orderServiceContext
                .Orders
                .Include(o => o.Items)
                .FirstOrDefault(order => order.Code.Equals(code));
        }

        public  IEnumerable<Order> FindAll(string customerId)
        {
            var user = orderServiceContext.Orders.FirstOrDefault(o => o.CustomerId == customerId);
            if (user == null)
            {
                return null;
            }
            else
            {
                var histotico_pedidos = from order in orderServiceContext.Orders
                                        where order.CustomerId == customerId
                                        select order;
                //this.orderServiceContext.Orders.Where(x => x.CustomerId == customerId);
                return histotico_pedidos.ToList();
            }
        }

        public void Create(Order order)
        {
            orderServiceContext.Orders.Add(order);
        }

        public void Delete(Order order)
        {
            orderServiceContext.Orders.Remove(order);
        }

        public void Update(Order order)
        {
            orderServiceContext.Update(order);
        }
        public void Commit()
        {
            orderServiceContext.SaveChanges();
        }
    }
}
