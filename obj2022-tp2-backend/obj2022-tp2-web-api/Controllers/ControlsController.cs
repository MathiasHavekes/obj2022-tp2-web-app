using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Devices;
using Newtonsoft.Json;
using obj2022_tp2_web_api.Models.Dtos;
using System.Text;

namespace obj2022_tp2_web_api.Controllers
{
    [ApiController]
    [Route("tomato")]
    public class ControlsController : ControllerBase
    {
        private const string IotHubUri = "iotObjectHub.azure-devices.net";
        private const string DeviceKey = "KyNxXceKfSnO/wiQM9hG8mzEjikB4Ytb3/MvvGhxn6Q=";
        private const string ConnectionString = "HostName=iotObjectHub.azure-devices.net;SharedAccessKeyName=service;SharedAccessKey=nECnOMEb2L1BDBN4owfKN3Y/NXG9VbJrxtHVho4bz7Y=";
        private const string DeviceId = "tempsensor";

        [HttpPost("controls")]
        public async Task<bool> PostControlState(
            [FromBody] ControlDto newControls
        )
        {

            using (var client = ServiceClient.CreateFromConnectionString(ConnectionString))
            {
                var control = new
                {
                    deviceId = DeviceId,
                    state = newControls.State.ToString(),
                    target = newControls.target
                };
                var messageString = JsonConvert.SerializeObject(control);
                var message = new Message(Encoding.ASCII.GetBytes(messageString));
                message.Properties.Add("Topic", "WaterUsage");

                await client.SendAsync(DeviceId, message);
            }
            return true;
        }
    }
}
