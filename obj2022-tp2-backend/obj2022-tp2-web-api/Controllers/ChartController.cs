using Microsoft.AspNetCore.Mvc;
using obj2022_tp2_web_api.DataServices;
using obj2022_tp2_web_api.Models.Dtos;

namespace obj2022_tp2_web_api.Controllers
{
    [ApiController]
    [Route("tomato")]
    public class ChartController : ControllerBase
    {
        ConstantsDataService constantsDS;
        DistanceTemperatureDataService distanceTemperatureDS;
        public ChartController()
        {
            constantsDS = new ConstantsDataService();
            distanceTemperatureDS = new DistanceTemperatureDataService();
        }

        [HttpGet("chart/details")]
        public async Task<IEnumerable<ChartDto>> GetChartDetails()
        {
            var constant = await constantsDS.GetLastConstantEntryAsync();
            var distanceTemperatureList = await distanceTemperatureDS.GetAllDistanceTemperatureAsync();
            List<ChartDto> chartDetails = new List<ChartDto>();
            foreach (var distanceTemperature in distanceTemperatureList)
            {
                chartDetails.Add(new ChartDto
                {
                    EventDate = distanceTemperature.EventDate,
                    Temperature = distanceTemperature.Temperature,
                    Percentage = Utils.CastValue((int)distanceTemperature.Distance, 0, 100, (int)constant.MinDistance, (int)constant.MaxDistance)
                });
            }
            return chartDetails;
        }
    }
}