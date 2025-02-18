import { subCategories } from "@/app/_constants/categories";
import { CommunityToolbar } from "../../_components/CommunityToolbar";
import PostItem from "../../_components/PostItem";

// 페이지 컴포넌트
export default function EsportsPage({
  params,
}: {
  params: { subcategory: keyof typeof subCategories };
}) {
  // 현재 어떤 서브카테고리인지 알 수 있음

  return (
    <div className="flex justify-center bg-[#FAFAFA] mt-3.5">
      <div className="max-w-[720px] min-h-[120px] rounded-[5px] border-b bg-[#FFFFFF] mx-auto">
        <CommunityToolbar />
        <PostItem />
      </div>
    </div>
  );
}
