using Microsoft.AspNetCore.Mvc;
using obj2022_tp2_web_api.DataServices;
using obj2022_tp2_web_api.Models.Dtos;

namespace obj2022_tp2_web_api.Controllers
{
    [ApiController]
    [Route("tomato")]
    public class InfoController : ControllerBase
    {
        ConstantsDataService constantsDS;
        DistanceTemperatureDataService distanceTemperatureDS;
        MotorStatusDataService motorStatusDS;

        public InfoController()
        {
            constantsDS = new ConstantsDataService();
            distanceTemperatureDS = new DistanceTemperatureDataService();
            motorStatusDS = new MotorStatusDataService();
        }

        [HttpGet("info/details")]
        public async Task<InfoDto> GetChartDetails()
        {
            var constant = await constantsDS.GetLastConstantEntryAsync();
            var distanceTemperature = await distanceTemperatureDS.GetLastDistanceTemperatureEntryAsync();
            var motorStatus = await motorStatusDS.GetLastMotorStatusEntryAsync();

            var info = new InfoDto()
            {
                Percentage = Utils.CastValue((int) distanceTemperature.Distance, 0, 100, (int) constant.MinDistance, (int) constant.MaxDistance),
                Temperature = distanceTemperature.Temperature,
                Direction = motorStatus.Direction,
                EventDate = motorStatus.EventDate,
                State = motorStatus.State,
                Speed = motorStatus.Speed,
                Distance = distanceTemperature.Distance
            };

            return info;
        }
    }
}