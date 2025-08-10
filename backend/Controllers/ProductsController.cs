using DevOpsBackend.Data;
using DevOpsBackend.Models;
using Microsoft.AspNetCore.Mvc;

namespace DevOpsBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProductsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Product>> Get() => _context.Products.ToList();
}
