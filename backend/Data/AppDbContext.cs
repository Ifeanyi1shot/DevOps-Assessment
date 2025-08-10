using DevOpsBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace DevOpsBackend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Product> Products => Set<Product>();
}
