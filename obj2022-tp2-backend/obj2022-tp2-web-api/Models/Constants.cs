using Newtonsoft.Json;

namespace obj2022_tp2_web_api.Models
{
    public class Constants
    {
        [JsonProperty("min_temperature")]
        public double MinTemperature { get; set; }
        [JsonProperty("max_temperature")]
        public double MaxTemperature { get; set; }
        [JsonProperty("min_distance")]
        public double MinDistance { get; set; }
        [JsonProperty("max_distance")]
        public double MaxDistance { get; set; }
        [JsonProperty("eventProcessedUtcTime")]
        public DateTime EventDate { get; set; }
    }
}
