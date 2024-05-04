import axios from "axios";

const apiURL: string = "https://mail-service-api.onrender.com/mail";

export const sendMailToExcelAPI = async (data: any) => {
  try {
    return await axios.post(`${apiURL}/mail`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.error(error);
  }
};
