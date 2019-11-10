using Jobstore.Infrastructure.Entities;
using Jobstore.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Jobstore.Infrastructure.Data.EntityConfiguration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(e => e.FirstName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(e => e.LastName)
               .IsRequired()
               .HasMaxLength(30);

            builder.Property(e => e.Email)
              .IsRequired()
              .HasMaxLength(50);

            builder.HasOne(e => e.UserIdentity)
                .WithOne()
                .HasForeignKey<User>(p => p.Id)
                .HasPrincipalKey<AppIdentityUser>(p => p.Id);

            builder.HasKey(e => e.Id);
        }
    }
}
