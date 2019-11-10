using Jobstore.Infrastructure.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Jobstore.Infrastructure.Data.EntityConfiguration
{
    public class CurrencyConfiguration : IEntityTypeConfiguration<Currency>
    {
        public void Configure(EntityTypeBuilder<Currency> builder)
        {
            builder.HasKey(e => e.Code);

            builder.Property(e => e.Description)
              .IsRequired()
              .HasMaxLength(50);
        }
    }
}
