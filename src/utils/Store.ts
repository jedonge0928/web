import { create } from "zustand";
import { persist } from "zustand/middleware";

type SocialState = "google" | "naver" | "kakao" | "discord" | "";

interface SocialStateStore {
  social: SocialState;
  setSocial: (social: SocialState) => void;
  resetSocial: () => void;
}

export const useSocialStore = create<SocialStateStore>()(
  persist(
    (set) => ({
      social: "",
      setSocial: (social) => set({ social }),
      resetSocial: () => set({ social: "" }),
    }),
    {
      name: "social-storage",
    }
  )
);

type SignState = "login" | "signup" | "";

interface SignupStateStore {
  signStateStore: SignState;
  setSignupStore: () => void;
  setClearSignupStore: () => void;
}

export const useSignupStore = create<SignupStateStore>((set) => ({
  signStateStore: "",
  setSignupStore: () => set({ signStateStore: "signup" }),
  setClearSignupStore: () => set({ signStateStore: "" }),
}));

interface EditableBoardData {
  categoryType: string;
  content?: string;
  title: string;
  link?: string;
  thumbnail?: string;
}

interface EditState {
  isEditMode: boolean;
  boardId: string | null;
  boardData: EditableBoardData | null;
  setEditMode: (isEdit: boolean) => void;
  setBoardId: (id: string | null) => void;
  setBoardData: (data: EditableBoardData | null) => void;
  resetEditState: () => void;
}

export const useEditStore = create<EditState>((set) => ({
  isEditMode: false,
  boardId: null,
  boardData: null,
  setEditMode: (isEdit) => set({ isEditMode: isEdit }),
  setBoardId: (id) => set({ boardId: id }),
  setBoardData: (data) => set({ boardData: data }),
  resetEditState: () =>
    set({ isEditMode: false, boardId: null, boardData: null }),
}));

type ToastType = "success" | "info" | "warning" | "error";
type ToastSize = "PC" | "MOBILE";

interface Toast {
  visible: boolean;
  type: ToastType;
  size: ToastSize;
  title: string;
  message: string;
}

interface ToastStore {
  toast: Toast;
  showToast: (
    type: ToastType,
    title: string,
    message: string,
    size?: ToastSize
  ) => void;
  hideToast: () => void;
}

const initialState: Toast = {
  visible: false,
  type: "success",
  size: "PC",
  title: "",
  message: "",
};

export const useToastStore = create<ToastStore>((set) => ({
  toast: initialState,

  showToast: (type, title, message, size = "PC") => {
    set({
      toast: {
        visible: true,
        type,
        size,
        title,
        message,
      },
    });

    setTimeout(() => {
      set((state) => ({
        toast: {
          ...state.toast,
          visible: false,
        },
      }));
    }, 3000);
  },

  hideToast: () => {
    set((state) => ({
      toast: {
        ...state.toast,
        visible: false,
      },
    }));
  },
}));
