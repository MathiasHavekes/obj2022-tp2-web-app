using obj2022_tp2_web_api.Enums;

namespace obj2022_tp2_web_api.Models.Dtos
{
    public class InfoDto
    {
        public double Temperature { get; set; }
        public double Distance { get; set; }
        public ControlState State { get; set; }
        public double Speed { get; set; }
        public Direction Direction { get; set; }
        public double Percentage { get; set; }
        public DateTime EventDate { get; set; }
    }
}
