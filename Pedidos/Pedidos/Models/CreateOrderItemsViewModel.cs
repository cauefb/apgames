using System.ComponentModel.DataAnnotations;

namespace Orders.Api.Models
{
    public class CreateOrderItemsViewModel
    {
        [Required]
        public String ProductId { get; set; }

        [Range(1, 9999)]
        public int quantity { get; set; }
    }
}
