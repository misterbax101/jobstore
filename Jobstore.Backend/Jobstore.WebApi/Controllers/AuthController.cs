using Jobstore.Infrastructure.Core;
using Jobstore.Infrastructure.Identity;
using Jobstore.Infrastructure.Identity.Models;
using Jobstore.Infrastructure.Models;
using Jobstore.WebApi.Models.Requests;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Jobstore.WebApi.Controllers
{
    [Route("api/[controller]")]
	[ApiController]
	public class AuthController : ControllerBase
	{
		private readonly UserManager<AppIdentityUser> _userManager;
		private readonly IJwtFactory _jwtFactory;
		private readonly JwtIssuerOptions _jwtOptions;

		public AuthController(UserManager<AppIdentityUser> userManager, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions)
		{
			_userManager = userManager;
			_jwtFactory = jwtFactory;
			_jwtOptions = jwtOptions.Value;
		}

		[HttpPost("login")]
		public async Task<IActionResult> Post([FromBody]LoginRequest request)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var userId = await VerifyIdentity(request.Email, request.Password);
			if (userId == null)
			{
				return BadRequest("Email or password is invalid.");
			}

			var jwt = await Tokens.GenerateJwt(_jwtFactory, userId, _jwtOptions, new JsonSerializerSettings { Formatting = Formatting.Indented });
			return new OkObjectResult(jwt);
		}

		private async Task<string> VerifyIdentity(string userName, string password)
		{
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
                return null;

			// get the user to verifty
			var userToVerify = await _userManager.FindByNameAsync(userName);

            if (userToVerify == null) return null;

			// check the credentials
			if (await _userManager.CheckPasswordAsync(userToVerify, password))
			{
				return  userToVerify.Id;
			}

			return  null;
		}
	}

	public class Tokens
	{
		public static async Task<string> GenerateJwt(IJwtFactory jwtFactory, string userId, JwtIssuerOptions jwtOptions, JsonSerializerSettings serializerSettings)
		{
			var response = new
			{
				id = userId,
				auth_token = await jwtFactory.GenerateEncodedToken(userId),
				expires_in = (int)jwtOptions.ValidFor.TotalSeconds
			};

			return JsonConvert.SerializeObject(response, serializerSettings);
		}
	}
}
