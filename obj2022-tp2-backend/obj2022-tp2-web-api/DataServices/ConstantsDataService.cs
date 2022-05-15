

using Newtonsoft.Json;
using obj2022_tp2_web_api.Models;

namespace obj2022_tp2_web_api.DataServices
{
    public class ConstantsDataService
    {
        public async Task<Constants> GetLastConstantEntryAsync()
        {
            var path = "https://obj2022-iot-http-trigger20220511163325.azurewebsites.net/api/GetLastConstantEntry?code=__NXQgGb2jW6FpRZ9TeOFZJYJMD0bS6f_bZwtXgTzdPBAzFueAMmEw==";
            using (HttpClient httpClient = new HttpClient())
            {
                var response = await httpClient.GetAsync(path);
                if (!response.IsSuccessStatusCode)
                {
                    return new Constants();
                }
                var responseString = await response.Content.ReadAsStringAsync();
                var constants = JsonConvert.DeserializeObject<List<Constants>>(responseString);

                if (constants == null)
                {
                    return new Constants();
                }

                return constants.First();
            }
        }
    }
}
