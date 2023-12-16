using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;

namespace SessionAuthApi
{
    public class SessionRequirementFilter : IAuthorizationFilter
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public SessionRequirementFilter(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            if (!_httpContextAccessor.HttpContext!.Request.Cookies.Any(c => c.Key == "MIC"))
            {
                context.Result = new UnauthorizedObjectResult(string.Empty);
                return;
            }
        }
    }
    public class SessionRequirementAttribute : TypeFilterAttribute
    {
        public SessionRequirementAttribute() : base(typeof(SessionRequirementFilter))
        {
        }
    }
}