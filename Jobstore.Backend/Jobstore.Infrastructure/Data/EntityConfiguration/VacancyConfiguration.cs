using Jobstore.Infrastructure.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Jobstore.Infrastructure.Data.EntityConfiguration
{
    public class VacancyConfiguration : IEntityTypeConfiguration<Vacancy>
    {
        public void Configure(EntityTypeBuilder<Vacancy> builder)
        {
            builder.HasKey(e => e.Id);

            builder.Property(e => e.CreatedDate)
                .IsRequired()
                .HasDefaultValueSql("GetDate()");

            builder.Property(e => e.CompanyName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.Descripion)
                .IsRequired()
                .HasMaxLength(500);

            builder.Property(e => e.SalaryCurrency)
               .IsRequired()
               .HasMaxLength(500);
        }
    }
}
