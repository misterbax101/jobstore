using Jobstore.Infrastructure.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Jobstore.Infrastructure.Data.EntityConfiguration
{
    public class VacancyTypeConfiguration : IEntityTypeConfiguration<VacancyType>
    {
        public void Configure(EntityTypeBuilder<VacancyType> builder)
        {

            builder.HasKey(e => e.Id);

            builder.Property(e => e.Title)
                .IsRequired()
                .HasMaxLength(50);
        }
    }
}
