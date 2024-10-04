import SignUpModule from "@/components/modules/Authencation/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phòng khảo thí | Đăng ký",
};

function SignUpPage() {
  return <SignUpModule />;
}

export default SignUpPage;
