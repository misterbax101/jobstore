using Jobstore.Infrastructure.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Jobstore.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrenciesController : ControllerBase
    {
        private readonly JobstoreDbContext _dbContext;
        public CurrenciesController(JobstoreDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {

            return Ok(await _dbContext.Currencies.ToListAsync());
        } 
    }
}