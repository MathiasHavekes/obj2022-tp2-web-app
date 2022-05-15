using Newtonsoft.Json;

namespace obj2022_tp2_web_api.Models
{
    public class DistanceTemperature
    {
        public double Temperature { get; set; }
        public double Distance { get; set; }
        [JsonProperty("eventProcessedUtcTime")]
        public DateTime EventDate { get; set; }
    }
}
