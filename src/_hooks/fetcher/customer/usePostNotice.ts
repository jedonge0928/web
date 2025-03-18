import { useToast } from "@/_hooks/useToast";
import postNotice from "@/services/customer/postNotice";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface usePostNoticeData {
  title: string;
  content: string;
  imgUrl: string;
}

const usePostNotice = ({ title, content, imgUrl }: usePostNoticeData) => {
  const toast = useToast();

  return useMutation({
    mutationFn: () => postNotice({ title, content, imgUrl }),
    retry: 1,
    onSuccess: () => {
      toast.success("공지사항 생성이 완료되었습니다.", "");
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage =
          error.response.data.message || "알 수 없는 오류가 발생했습니다.";
        toast.error("공지사항 생성 실패", errorMessage);
      } else {
        toast.error("공지사항 생성 실패", "공지사항 생성 중 오류가 발생했습니다.");
      }
    },
  });
};

export default usePostNotice;