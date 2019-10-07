using Jobstore.Infrastructure.Identity.Data;
using Jobstore.Infrastructure.Identity.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;
using Microsoft.Extensions.Hosting;
using Jobstore.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;

namespace Jobstore.WebApi
{
	public class Startup
	{
		private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH"; // todo: get this from somewhere secure
		private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddDbContext<AppIdentityDbContext>(options =>
					 options.UseSqlite(Configuration.GetConnectionString("DefaultConnection"),
					 b => b.MigrationsAssembly(typeof(Startup).Assembly.FullName)));


			var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));

			services.Configure<JwtIssuerOptions>(options =>
			{
				options.Issuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
				options.Audience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
				options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
			});

			services.AddSingleton<IJwtFactory, JwtFactory>();

			services.AddAuthentication(options =>
			{
				options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
			}).AddJwtBearer(configureOptions =>
			{
				configureOptions.ClaimsIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
				configureOptions.TokenValidationParameters = new TokenValidationParameters
				{
					ValidateIssuer = true,
					ValidIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)],

					ValidateAudience = true,
					ValidAudience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)],

					ValidateIssuerSigningKey = true,
					IssuerSigningKey = _signingKey,

					RequireExpirationTime = false,
					ValidateLifetime = true,
					ClockSkew = TimeSpan.Zero
				};
				configureOptions.SaveToken = true;
			});

			services.AddIdentityCore<AppUser>(o =>
			{
				o.Password.RequireDigit = false;
				o.Password.RequireLowercase = false;
				o.Password.RequireUppercase = false;
				o.Password.RequireNonAlphanumeric = false;
				o.Password.RequiredLength = 6;
			})
				.AddEntityFrameworkStores<AppIdentityDbContext>()
				.AddDefaultTokenProviders();

			services.AddControllers();
		}

		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));

			app.UseHttpsRedirection();

			app.UseRouting();

			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
		}
	}
}
