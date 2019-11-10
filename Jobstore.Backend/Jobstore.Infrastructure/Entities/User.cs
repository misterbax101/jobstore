using Jobstore.Infrastructure.Models;
using System.Collections.Generic;

namespace Jobstore.Infrastructure.Entities
{
    public class User
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IList<Vacancy> Vacancies { get; set; } = new List<Vacancy>();
        public AppIdentityUser UserIdentity { get; set; } 
    }
}
