using Microsoft.AspNetCore.Mvc;
using obj2022_tp2_web_api.Models.Dtos;

namespace obj2022_tp2_web_api.Controllers
{
    [ApiController]
    [Route("tomato")]
    public class ChartController : ControllerBase
    {
        private HttpClient httpClient;
        public ChartController()
        {
            httpClient = new HttpClient();
        }

        [HttpGet("chart/details")]
        public async Task<IEnumerable<ChartDto>> GetChartDetails()
        {
            var chart = new List<ChartDto>();
            var path = "https://obj2022-iot-http-trigger20220511163325.azurewebsites.net/api/GetAllDistanceTemperature?code=8u7D40vuD_sFShoCyjhOyRunuNVJtBhkP1J_iq7KAKcWAzFuDh8wiQ==";
            HttpResponseMessage response = await httpClient.GetAsync(path);
            if (response.IsSuccessStatusCode)
            {
                Console.WriteLine(response.Content);
                chart = await response.Content.ReadFromJsonAsync<List<ChartDto>>()
                    ?? chart;
            }
            return chart;
            //var test = new ChartDto();
            //test.Percentage = 100;
            //test.Temperature = 62;
            //test.EventDate = DateTime.Now;

            //return new List<ChartDto>() { test };
        }
    }
}