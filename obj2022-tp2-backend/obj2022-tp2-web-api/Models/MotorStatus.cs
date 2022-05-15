using obj2022_tp2_web_api.Enums;

namespace obj2022_tp2_web_api.Models
{
    public class MotorStatus
    {
        public ControlState State { get; set; }
        public double Target { get; set; }
        public Direction Direction { get; set; }
        public double Speed { get; set; }
        public DateTime EventDate { get; set; }
    }
}
