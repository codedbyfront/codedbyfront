import { AxiosError } from "axios";
export const axiosErrorHandler = (err: AxiosError) => {
  switch (err.code) {
    case "ERR_BAD_REQUEST":
      return "درخواست اشتباه است";
    case "ERR_NETWORK":
      return "اتصال به اینترنت برقرار نیست";
    case "ERR_TIMEOUT":
      return "درخواست به سرور زمان‌بر شده و قطع شد";
    case "ERR_UNAUTHORIZED":
      return "عدم دسترسی، لطفاً وارد شوید";
    case "ERR_FORBIDDEN":
      return "دسترسی غیرمجاز است";
    case "ERR_NOT_FOUND":
      return "مورد درخواست شده یافت نشد";
    case "ERR_INTERNAL_SERVER":
      return "خطای سرور رخ داده است";
    default:
      return "خطای ناشناخته";
  }
};
