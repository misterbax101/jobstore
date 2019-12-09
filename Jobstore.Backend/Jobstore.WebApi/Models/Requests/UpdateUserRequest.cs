using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Jobstore.WebApi.Models.Requests
{
    public class UpdateUserRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
