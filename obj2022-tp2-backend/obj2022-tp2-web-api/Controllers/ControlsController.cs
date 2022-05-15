using Microsoft.AspNetCore.Mvc;
using obj2022_tp2_web_api.Models.Dtos;

namespace obj2022_tp2_web_api.Controllers
{
    [ApiController]
    [Route("tomato")]
    public class ControlsController : ControllerBase
    {
        public ControlsController()
        {

        }

        [HttpPost("controls")]
        public async Task<bool> PostControlState(
            [FromBody] ControlDto newControls
        )
        {

            return true;
        }
    }
}
