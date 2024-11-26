import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "이 버튼 컴포넌트를 사용하여 클릭 이벤트를 처리하고, 폼을 제출하거나 애플리케이션 내의 사용자 이동을 구현할 수 있습니다. 컴포넌트는 다양한 테마와 컨텍스트에 맞게 스타일링할 수 있습니다.",
      },
    },
    defaultViewport: "responsive",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {};
