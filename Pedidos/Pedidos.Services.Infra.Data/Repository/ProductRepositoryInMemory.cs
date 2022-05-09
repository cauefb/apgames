using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OrderService.Domain.Interfaces;
using OrderService.Domain.Models;

namespace OrderService.Infra.Data.Repository
{
    public class ProductRepositoryInMemory : IProductRepository
    {
        private ICollection<Product> _products;

        public ProductRepositoryInMemory()
        {
            _products = new List<Product>();
            _products.Add(new Product { Id = "6269f27113e3e5baadb7e049", Name = "PlayStation 5", Price = 4499 });
            _products.Add(new Product { Id = "626af8cbb7e65d70dbd6546c", Name = "Nitendo Switch Oled", Price = 2999 });
            _products.Add(new Product { Id = "6271671759ab4d9a50f63ac1", Name = "Xbox Series X", Price = 4999 });
        }

        public Product GetProduct(string productId)
        {
            return _products.FirstOrDefault(product => product.Id == productId);
        }
    }
}
