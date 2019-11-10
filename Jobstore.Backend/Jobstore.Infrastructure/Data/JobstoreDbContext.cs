using Jobstore.Infrastructure.Data.EntityConfiguration;
using Jobstore.Infrastructure.Entities;
using Jobstore.Infrastructure.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Jobstore.Infrastructure.Identity.Data
{
    public class JobstoreDbContext : IdentityDbContext<AppIdentityUser>
	{
        public DbSet<User> AppUsers { get; set; }
        public DbSet<Vacancy> Vacancies { get; set; }
        public DbSet<VacancyType> VacancyTypes { get; set; }
        public DbSet<Currency> Currencies { get; set; }
		public JobstoreDbContext(DbContextOptions options) : base(options)
		{

		}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(typeof(JobstoreDbContext).Assembly);

            base.OnModelCreating(builder);
        }
    }
}
