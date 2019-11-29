using Jobstore.Infrastructure.Entities;
using Jobstore.Infrastructure.Identity.Data;
using Jobstore.WebApi.Infrastructure;
using Jobstore.WebApi.Models;
using Jobstore.WebApi.Models.Requests;
using Jobstore.WebApi.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using Z.EntityFramework.Plus;
namespace Jobstore.WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
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
                                            .Include(x => x.Owner)
                                            .FirstOrDefaultAsync(vacancy => vacancy.Id == id);
            if (result == null)
            {
                return NotFound();
            }

            return Ok(MapVacancy(result));
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetAll([FromQuery]int skip = 0, [FromQuery]int take = 10, [FromQuery]int? vacancyType = 0, [FromQuery] SortOrder? order = SortOrder.Asc, [FromQuery]string orderBy = null)
        {
            IQueryable<Vacancy> records = _appDbContext.Vacancies;

            if (vacancyType.GetValueOrDefault() != 0)
            {
                records = records.Where(x => vacancyType == x.TypeId);
            }

            if (orderBy != null)
            {
                records = order == SortOrder.Asc ? records.OrderByDynamic(x => $"x.{orderBy}") :
                                                   records.OrderByDescendingDynamic(x => $"x.{orderBy}"); ;
            }
            else
            {
                records = order == SortOrder.Asc ? records.OrderBy(x => x.CreatedDate) :
                                                   records.OrderByDescending(x => x.CreatedDate);
            }

            var result = await records.Skip(skip)
                                      .Take(take)
                                      .Include(x => x.Owner)
                                      .ToListAsync();

            return Ok(new
            {
                TotalCount = records.Count(),
                Data = result.Select(MapVacancy)
            });
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("search")]
        public async Task<IActionResult> Search([FromQuery] string query, [FromQuery]int skip = 0, [FromQuery]int take = 10)
        {
            var records = _appDbContext.Vacancies.Where(vacancy =>
                                                           vacancy.Title.Contains(query) ||
                                                           vacancy.CompanyName.Contains(query) ||
                                                           vacancy.Description.Contains(query));

            var result = await records.Skip(skip)
                                     .Take(take)
                                     .Include(x => x.Owner)
                                     .ToListAsync();

            return Ok(new
            {
                TotalCount = records.Count(),
                Data = result.Select(MapVacancy)
            });
        }

        [HttpGet]
        [Route("/api/users/{userId:guid}/vacancies")]
        public async Task<IActionResult> GetUserVacancies(Guid userId, [FromQuery]int skip = 0, [FromQuery]int take = 10)
        {
            var records = _appDbContext.Vacancies
                                          .Include(x => x.Owner)
                                          .Where(x => x.OwnerId == userId.ToString())
                                          .OrderByDescending(x => x.CreatedDate);

            var result = await records.Skip(skip)
                                      .Take(take)
                                      .ToListAsync();

            return Ok(
                new
                {
                    TotalCount = records.Count(),
                    Data = result.Select(MapVacancy)
                });
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
                Description = request.Description,
                CompanyName = request.CompanyName,
                SalaryValue = request.SalaryValue,
                SalaryCurrency = request.SalaryCurrency,
                TypeId = request.TypeId,
                OwnerId = UserHelper.GetUserId(HttpContext.User),
                CreatedDate = DateTime.UtcNow
            };

            _appDbContext.Vacancies.Add(vacancy);
            await _appDbContext.SaveChangesAsync().ConfigureAwait(true);

            return Ok(vacancy.Id);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update(int id, [FromBody] CreateVacancyRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var vacancy = new Vacancy
            {
                Id = id,
                Title = request.Title,
                Description = request.Description,
                CompanyName = request.CompanyName,
                SalaryValue = request.SalaryValue,
                SalaryCurrency = request.SalaryCurrency,
                TypeId = request.TypeId,
            };

            _appDbContext.Attach(vacancy);
            _appDbContext.Entry(vacancy).Property(p => p.Title).IsModified = true;
            _appDbContext.Entry(vacancy).Property(p => p.Description).IsModified = true;
            _appDbContext.Entry(vacancy).Property(p => p.CompanyName).IsModified = true;
            _appDbContext.Entry(vacancy).Property(p => p.SalaryValue).IsModified = true;
            _appDbContext.Entry(vacancy).Property(p => p.SalaryCurrency).IsModified = true;
            _appDbContext.Entry(vacancy).Property(p => p.TypeId).IsModified = true;

            await _appDbContext.SaveChangesAsync();

            return Ok(vacancy.Id);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            _appDbContext.Vacancies.Remove(new Vacancy
            {
                Id = id
            });

            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        private VacancyModel MapVacancy(Vacancy vacancy)
        {
            return new VacancyModel
            {
                Id = vacancy.Id,
                Title = vacancy.Title,
                Description = vacancy.Description,
                CompanyName = vacancy.CompanyName,
                CreatedDate = vacancy.CreatedDate,
                TypeId = vacancy.TypeId,
                SalaryValue = vacancy.SalaryValue,
                SalaryCurrency = vacancy.SalaryCurrency,
                OwnerId = vacancy.OwnerId,
                OwnerName = $"{vacancy.Owner.FirstName} {vacancy.Owner.LastName}"
            };
        }
    }
}