using fire_tm_api.Models;
using Microsoft.EntityFrameworkCore;

namespace fire_tm_api.Contexts
{
    public class ApplicationDBContext:DbContext{
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options):base(options){
        }

    public DbSet<Usuario> usuarios {get;set;}
}
}
