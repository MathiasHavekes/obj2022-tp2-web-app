namespace obj2022_tp2_web_api
{
    public static class Utils
    {
        /// <summary>
        /// Fonction de type : y = ax + b
        /// On trouve a avec les points extremes :
        /// a = (y_b - y_a) / (x_b - x_a)
        /// b = -(ax - y)
        /// </summary>
        public static int CastValue(int x, int y_a, int y_b, int x_a, int x_b)
        {
            var gradient = (double) (y_b - y_a) / (double) (x_b - x_a);

            var intercept = -(gradient * x_b - y_b);

            return (int) (gradient * x + intercept);
        }
    }
}
