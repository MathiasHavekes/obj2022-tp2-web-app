using Microsoft.AspNetCore.Mvc;
using obj2022_tp2_web_api.Enums;
using obj2022_tp2_web_api.Models.Dtos;

namespace obj2022_tp2_web_api.Controllers
{
    [ApiController]
    [Route("tomato")]
    public class InfoController : ControllerBase
    {
        public InfoController()
        {
        }

        [HttpGet("info/details")]
        public InfoDto GetChartDetails()
        {
            var test = new InfoDto();
            test.Percentage = 100;
            test.Temperature = 62;
            test.Direction = Direction.Down;
            test.EventDate = DateTime.Now;

            return test;
        }
    }
}