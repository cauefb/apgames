using System.ComponentModel.DataAnnotations;

namespace Orders.Api.Models
{
    public class CreateOrderViewModel
    {
        [Required]
        public string CustomerId { get; set; }

        [MinLength(1)]
        public List<CreateOrderItemsViewModel> Items { get; set; }
    }
}
