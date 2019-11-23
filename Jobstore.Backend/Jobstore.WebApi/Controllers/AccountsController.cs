using Jobstore.Infrastructure.Entities;
using Jobstore.Infrastructure.Identity.Data;
using Jobstore.Infrastructure.Models;
using Jobstore.WebApi.Models.Requests;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using Z.EntityFramework.Plus;


namespace Jobstore.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly JobstoreDbContext _appDbContext;
        private readonly UserManager<AppIdentityUser> _userManager;

        public AccountsController(UserManager<AppIdentityUser> userManager, JobstoreDbContext appDbContext)
        {
            _userManager = userManager;
            _appDbContext = appDbContext;
        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var result = await _appDbContext.AppUsers
                .Include(m => m.Vacancies)
                .FirstOrDefaultAsync(user => user.Id == id.ToString());
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

            var userIdentity = new AppIdentityUser
            {
                Email = request.Email,
                UserName = request.Email,
            };
            var result = await _userManager.CreateAsync(userIdentity, request.Password);

            if (!result.Succeeded)
            {
                result.Errors.Select(error => { ModelState.AddModelError(error.Code, error.Description); return error; }).ToArray();
                return BadRequest(ModelState);
            }

            var userModel = await _userManager.FindByEmailAsync(request.Email);

            _appDbContext.AppUsers.Add(new User
            {
                Id = userIdentity.Id,
                Email = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName,
            });

            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> Put(Guid id, [FromBody]UpdateUserRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = _appDbContext.AppUsers.Find(id.ToString());
            if(user == null)
            {
                return NotFound();
            }

            user.FirstName = request.FirstName;
            user.LastName = request.LastName;


            await _appDbContext.SaveChangesAsync();

            return Ok();
        }
    }
}