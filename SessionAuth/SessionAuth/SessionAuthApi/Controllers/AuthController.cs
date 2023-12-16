using Microsoft.AspNetCore.Mvc;

namespace SessionAuthApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        public AuthController()
        {

        }

        [HttpPost("Login")]
        public async Task<ActionResult<UserInfo>> Login([FromBody] LoginDTO authModel)
        {
            if (authModel.Username == "admin" && authModel.Password == "admin")
            {
                HttpContext.Session.SetString(authModel.Username, authModel.Username);

                // Create a new cookie
                //var cookieOptions = new CookieOptions
                //{
                //    // Set the cookie properties
                //    //Path = "/",
                //    Expires = DateTime.UtcNow.AddDays(7),
                //    Secure = true, // Use "false" if not using HTTPS
                //    HttpOnly = true,
                //    SameSite = (Microsoft.AspNetCore.Http.SameSiteMode)SameSiteMode.Strict
                //};

                //HttpContext.Response.Cookies.Append("MIC", authModel.Username, cookieOptions);

                //await HttpContext.Response.WriteAsync(requestBody.ToString());
                return new UserInfo
                {
                    Username = authModel.Username,
                    Name = "Admin",
                    Family = "AdminZade"
                };
            }

            return Unauthorized();
        }
        [HttpPost("Logout")]
        public bool Logout()
        {
            HttpContext.Session.Clear();
            return true;
        }
    }
}