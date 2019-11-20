using Jobstore.Infrastructure.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace Jobstore.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VacancyTypesController : ControllerBase
    {
        private readonly JobstoreDbContext _dbContext;
        public VacancyTypesController(JobstoreDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {

            return Ok(await _dbContext.VacancyTypes
                                          .OrderBy(x => x.Title)
                                          .ToListAsync());
        } 
    }
}