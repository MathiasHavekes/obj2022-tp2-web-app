using obj2022_tp2_web_api.Enums;

namespace obj2022_tp2_web_api.Models.Dtos
{
    public class ControlDto
    {
        public ControlState State { get; set; }
        public double? target { get; set; }
    }
}
