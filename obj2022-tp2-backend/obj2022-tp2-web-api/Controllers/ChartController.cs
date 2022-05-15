using Microsoft.AspNetCore.Mvc;
using obj2022_tp2_web_api.Models.Dtos;

namespace obj2022_tp2_web_api.Controllers
{
    [ApiController]
    [Route("tomato")]
    public class ChartController : ControllerBase
    {
        public ChartController()
        {
        }

        [HttpGet("chart/details")]
        public IEnumerable<ChartDto> GetChartDetails()
        {
            var test = new ChartDto();
            test.Percentage = 100;
            test.Temperature = 62;
            test.EventDate = DateTime.Now;

            return new List<ChartDto>() { test };
        }
    }
}