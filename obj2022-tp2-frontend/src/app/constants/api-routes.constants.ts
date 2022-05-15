import { environment } from "src/environments/environment";

export const apiRoutes = {
  chart: `${environment.apiUrl}/tomato/chart/details`,
  controls: `${environment.apiUrl}/tomato/controls`,
  info: `${environment.apiUrl}/tomato/info/details`,
  alert: `${environment.apiUrl}/tomato/alert/details`,
}