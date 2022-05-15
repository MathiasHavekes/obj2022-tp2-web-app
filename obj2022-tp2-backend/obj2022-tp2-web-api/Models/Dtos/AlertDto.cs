namespace obj2022_tp2_web_api.Models.Dtos
{
    public class AlertDto
    {
        public double Temperature { get; set; }
        public double ExpectedPercentage { get; set; }
        public double ActualPercentage { get; set; }
        public DateTime EventDate { get; set; }
    }
}
