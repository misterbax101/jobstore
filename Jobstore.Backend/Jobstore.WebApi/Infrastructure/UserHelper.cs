using System.Security.Claims;

namespace Jobstore.WebApi.Infrastructure
{
    public class UserHelper
    {
        public static string GetUserId(ClaimsPrincipal user)
        {
            return user?.FindFirst(ClaimTypes.NameIdentifier).Value;
        }
    }
}
