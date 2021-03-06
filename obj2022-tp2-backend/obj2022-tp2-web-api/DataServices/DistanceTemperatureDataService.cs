using Newtonsoft.Json;
using obj2022_tp2_web_api.Models;
using System.Collections.Generic;

namespace obj2022_tp2_web_api.DataServices
{
    public class DistanceTemperatureDataService
    {
        public async Task<DistanceTemperature> GetLastDistanceTemperatureEntryAsync()
        {
            var path = "https://obj2022-iot-http-trigger20220511163325.azurewebsites.net/api/GetLastDistanceTemperatureEntry?code=s__RJ-2dKqEj2NkANh5_rditNj7hgh9J9ucdaHzIQnwQAzFussx6RQ==";
            using (HttpClient httpClient = new HttpClient())
            {
                var response = await httpClient.GetAsync(path);
                if (!response.IsSuccessStatusCode)
                {
                    return new DistanceTemperature();
                }
                var responseString = await response.Content.ReadAsStringAsync();
                var distanceTemperature = JsonConvert.DeserializeObject<List<DistanceTemperature>>(responseString);

                if (distanceTemperature == null)
                {
                    return new DistanceTemperature();
                }

                return distanceTemperature.First();
            }
        }

        public async Task<IEnumerable<DistanceTemperature>> GetAllDistanceTemperatureAsync()
        {
            var path = "https://obj2022-iot-http-trigger20220511163325.azurewebsites.net/api/GetAllDistanceTemperature?code=8u7D40vuD_sFShoCyjhOyRunuNVJtBhkP1J_iq7KAKcWAzFuDh8wiQ==";
            using (HttpClient httpClient = new HttpClient())
            {
                var response = await httpClient.GetAsync(path);
                if (!response.IsSuccessStatusCode)
                {
                    return new List<DistanceTemperature>();
                }
                var responseString = await response.Content.ReadAsStringAsync();
                var distanceTemperature = JsonConvert.DeserializeObject<List<DistanceTemperature>>(responseString);

                if (distanceTemperature == null)
                {
                    return new List<DistanceTemperature>();
                }

                return distanceTemperature;
            }
        }
    }
}
