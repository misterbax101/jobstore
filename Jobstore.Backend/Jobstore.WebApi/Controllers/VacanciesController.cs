using Jobstore.Infrastructure.Entities;
using Jobstore.Infrastructure.Identity.Data;
using Jobstore.WebApi.Infrastructure;
using Jobstore.WebApi.Models.Requests;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Jobstore.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class VacanciesController : ControllerBase
    {
        private readonly JobstoreDbContext _appDbContext;
        public VacanciesController(JobstoreDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _appDbContext.Vacancies
                .FindAsync(id);
            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateVacancyRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var vacancy = new Vacancy
            {
                Title = request.Title,
                Descripion = request.Descripion,
                CompanyName = request.CompanyName,
                SalaryValue = request.SalaryValue,
                SalaryCurrency = request.SalaryCurrency,
                TypeId = request.TypeId,
                OwnerId = UserHelper.GetUserId(HttpContext.User),
                CreatedDate = DateTime.UtcNow
            };

            _appDbContext.Vacancies.Add(vacancy);
            await _appDbContext.SaveChangesAsync();

            return Ok(vacancy.Id);
        }
    }
}