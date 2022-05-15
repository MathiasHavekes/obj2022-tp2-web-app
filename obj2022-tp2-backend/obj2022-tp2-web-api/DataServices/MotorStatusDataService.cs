using Newtonsoft.Json;
using obj2022_tp2_web_api.Models;

namespace obj2022_tp2_web_api.DataServices
{
    public class MotorStatusDataService
    {
        public async Task<MotorStatus> GetLastMotorStatusEntryAsync()
        {
            var path = "https://obj2022-iot-http-trigger20220511163325.azurewebsites.net/api/GetLastMotorEntry?code=1REt7jjy5yXBFueiq6TM9nc57gNLXMdCdPglekXwi5WgAzFuxVer2g==";
            using (HttpClient httpClient = new HttpClient())
            {
                var response = await httpClient.GetAsync(path);
                if(! response.IsSuccessStatusCode)
                {
                    return new MotorStatus();
                }
                var responseString = await response.Content.ReadAsStringAsync();
                var motorStatuses = JsonConvert.DeserializeObject<List<MotorStatus>>(responseString);

                if(motorStatuses == null)
                {
                    return new MotorStatus();
                }

                return motorStatuses.First();
            }
        }
    }
}
