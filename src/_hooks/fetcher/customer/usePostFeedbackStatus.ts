import { useToast } from "@/_hooks/useToast";
import postFeedbackStatus from "@/services/customer/postFeedbackStatus";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface usePostFeedbackStatus {
  id: number;
}

const usePostFeedbackStatus = ({id}: usePostFeedbackStatus) => {
  const toast = useToast();

  return useMutation({
    mutationFn: () => postFeedbackStatus({id}),
    retry: 1,
    onSuccess: () => {
      toast.success("개선요청 상태가 수정되었습니다.", "");
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage =
          error.response.data.message || "알 수 없는 오류가 발생했습니다.";
        toast.error("개선요청 상태 수정 실패", errorMessage);
      } else {
        toast.error("개선요청 상태 수정 실패", "개선요청 상태 수정 중 오류가 발생했습니다.");
      }
    },
  });
};

export default usePostFeedbackStatus;