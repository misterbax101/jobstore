using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Jobstore.Infrastructure.Identity.Data;
using Jobstore.Infrastructure.Identity.Models;
using Jobstore.WebApi.Models.Requests;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Jobstore.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
		private readonly AppIdentityDbContext _appDbContext;
		private readonly UserManager<AppUser> _userManager;

		public AccountsController(UserManager<AppUser> userManager, AppIdentityDbContext appDbContext)
		{
			_userManager = userManager;
			_appDbContext = appDbContext;
		}

		[HttpPost]
		public async Task<IActionResult> Post([FromBody]SignUpRequest model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var userIdentity = new AppUser
			{
				Email = model.Email,
				UserName = model.Email
			};
			var result = await _userManager.CreateAsync(userIdentity, model.Password);

			if (!result.Succeeded) return new BadRequestResult();

			await _appDbContext.SaveChangesAsync();

			return new OkObjectResult("Account created");
		}
	}
}