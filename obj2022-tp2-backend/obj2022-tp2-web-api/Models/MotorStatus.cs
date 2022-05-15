﻿using Newtonsoft.Json;
using obj2022_tp2_web_api.Enums;

namespace obj2022_tp2_web_api.Models
{
    public class MotorStatus
    {
        public ControlState State { get; set; }
        [JsonProperty("motor_target")]
        public double Target { get; set; }
        public Direction Direction { get; set; }
        public double Speed { get; set; }
        [JsonProperty("eventProcessedUtcTime")]
        public DateTime EventDate { get; set; }
    }
}
