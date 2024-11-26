import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
  args: { onClick: fn() },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "이 버튼 컴포넌트를 사용하여 클릭 이벤트를 처리하고, 폼을 제출하거나 애플리케이션 내의 사용자 이동을 구현할 수 있습니다. 컴포넌트는 다양한 테마와 컨텍스트에 맞게 스타일링할 수 있습니다.",
      },
    },
    layout: "centered",
  },
  argTypes: {
    onClick: {
      description:
        "onClick 이벤트 핸들러는 사용자가 컴포넌트를 클릭할 때 호출됩니다. 이 핸들러는 애플리케이션 내에서 행동을 트리거하거나 상태를 변경하는 데 사용됩니다. 핸들러는 함수 형태여야 합니다.",
      table: {
        type: { summary: "() => void" },
      },
    },
    color: {
      description:
        "버튼의 색상을 정하는 영역입니다. primary, secondary, accept, cancel 등 4가지의 값으로 스타일을 변경할 수 있습니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      required: true,
    },
    children: {
      description:
        "컴포넌트 내에서 컨텐츠를 넣는 영역입니다. 주로 string이나 컴포넌트를 넣을 수 있습니다.",
      table: {
        type: { summary: "string | ReactNode" },
      },
      required: true,
    },
    disabled: {
      description:
        "disabled를 제어하는 영역입니다. 각 스타일에 맞는 disabled 버튼 스타일을 제공합니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    outline: {
      description:
        "버튼 스타일에 border를 추가하고 배경 색상을 흰색으로 변경하는 영역입니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
      required: true,
    },
    shadow: {
      description: "버튼에 그림자 적용을 할 수 있는 영역입니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
      required: true,
    },
    size: {
      description:
        "버튼의 크기를 정할 수 있는 영역입니다. small, medium, large 이 세가지 값을 입력해서 크기를 조절합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      required: true,
    },
    shape: {
      description:
        "버튼의 모양을 정하는 영역입니다. box, rounded 이 두가지 값을 입력해서 라운드 처리 여부를 결정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      required: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    outline: false,
    disabled: false,
    shadow: false,
    color: "primary",
    size: "small",
    shape: "box",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    outline: false,
    disabled: false,
    shadow: false,
    color: "secondary",
    size: "small",
    shape: "box",
  },
};

export const Accept: Story = {
  args: {
    children: "Button",
    outline: false,
    disabled: false,
    shadow: false,
    color: "accept",
    size: "small",
    shape: "box",
  },
};

export const Cancel: Story = {
  args: {
    children: "Button",
    outline: false,
    disabled: false,
    shadow: false,
    color: "cancel",
    size: "small",
    shape: "box",
  },
};
