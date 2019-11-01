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

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var result = await _userManager.FindByIdAsync(id.ToString());
            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]SignUpRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = new AppUser
            {
                Email = request.Email,
                UserName = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName
            };
            var result = await _userManager.CreateAsync(userIdentity, request.Password);

            if (!result.Succeeded)
            {
                result.Errors.Select(error => { ModelState.AddModelError(error.Code, error.Description); return error; }).ToArray();
                return  BadRequest(ModelState);
            }

            await _appDbContext.SaveChangesAsync();

            var userModel = await _userManager.FindByEmailAsync(request.Email);
            return Ok(userModel);
        }
    }
}