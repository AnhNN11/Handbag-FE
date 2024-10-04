import { Metadata } from "next";

import ResetPasswordModule from "@/components/modules/Authencation/ResetPassword";

export const metadata: Metadata = {
  title: "Phòng khảo thí | Đổi mật khẩu",
};

function ResetPassPage() {
  return <ResetPasswordModule />;
}

export default ResetPassPage;
