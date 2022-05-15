using Microsoft.AspNetCore.Mvc;
using obj2022_tp2_web_api.DataServices;
using obj2022_tp2_web_api.Models.Dtos;

namespace obj2022_tp2_web_api.Controllers
{
    [ApiController]
    [Route("tomato")]
    public class AlertController : ControllerBase
    {
        ConstantsDataService constantsDS;
        DistanceTemperatureDataService distanceTemperatureDS;

        public AlertController()
        {
            constantsDS = new ConstantsDataService();
            distanceTemperatureDS = new DistanceTemperatureDataService();
        }

        [HttpGet("alert/details")]
        public async Task<AlertDto> GetAlertDetails()
        {
            var constant = await constantsDS.GetLastConstantEntryAsync();
            var distanceTemperature = await distanceTemperatureDS.GetLastDistanceTemperatureEntryAsync();

            var expectedDistance = Utils.CastValue(
                (int)distanceTemperature.Temperature, 
                (int)constant.MinDistance,
                (int)constant.MaxDistance, 
                (int)constant.MinTemperature, 
                (int)constant.MaxTemperature);
            
            AlertDto alertDto = new AlertDto()
            {
                Temperature = distanceTemperature.Temperature,
                ExpectedPercentage = Utils.CastValue(
                    expectedDistance,
                    0,
                    100,
                    (int)constant.MinDistance,
                    (int)constant.MaxDistance),
                ActualPercentage = Utils.CastValue(
                    (int)distanceTemperature.Distance,
                    0,
                    100,
                    (int)constant.MinDistance,
                    (int)constant.MaxDistance),
                EventDate = distanceTemperature.EventDate,
            };

            return alertDto;
        }
    }
}
