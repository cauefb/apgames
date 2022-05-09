using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OrderService.Domain.Models;

namespace OrderService.Domain.Interfaces
{
    public interface IOrderRepository
    {
        Order GetByCode(string code);
        void Create(Order order);
        void Update(Order order);
        void Delete(Order order);
        IEnumerable<Order> FindAll(string custmerId);
        void Commit();
    }
}
