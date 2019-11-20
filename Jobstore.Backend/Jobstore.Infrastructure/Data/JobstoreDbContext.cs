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


            builder.Entity<Currency>().HasData(
                new Currency
                {
                    Code = "USD",
                    Description = "USD"
                },
                 new Currency
                 {
                     Code = "EUR",
                     Description = "EUR"
                 });

            builder.Entity<VacancyType>().HasData(
               new VacancyType
               {
                   Id = 1,
                   Title = "Accounting / Auditing"
               },
               new VacancyType
               {
                   Id = 2,
                   Title = "Customer Service"
               }, new VacancyType
               {
                   Id = 3,
                   Title = "Information Technology"
               }, new VacancyType
               {
                   Id = 4,
                   Title = "Sales / Marketing"
               }, new VacancyType
               {
                   Id = 5,
                   Title = "Art / Design / Entertainment"
               }, new VacancyType
               {
                   Id = 6,
                   Title = "Computer / IT (Software)"
               });


            base.OnModelCreating(builder);
        }
    }
}
