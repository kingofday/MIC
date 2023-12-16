using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SessionAuthApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase
    {

        public PostController(ILogger<AuthController> logger)
        {
        }

        [SessionRequirement]
        [HttpGet("User")]
        public IEnumerable<PostDTO> UserPosts()
        {
            return new List<PostDTO> {
            new PostDTO{
                Id="1",
                Title = "Post 1",
                Body = "Post Body 1"
            },
            new PostDTO{
                     Id="2",
                Title = "Post 2",
                Body = "Post Body 2"
            }
            };
        }
        [HttpGet("Admin")]
        public ActionResult<IEnumerable<PostDTO>> AdminPosts() {

            return Unauthorized();
        }
    }
}