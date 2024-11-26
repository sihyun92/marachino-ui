import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Text 컴포넌트는 <code>p</code>태그 기반으로 만들어진 컴포넌트로 짧은 글이나 문단을 제공하는 컴포넌트입니다. <br /> Maraschino-UI에서 제공하는 다양한 테마와 컨텍스트에 맞게 스타일링할 수 있습니다.",
      },
    },
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "Text의 내용이 들어가는 영역입니다.",
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      description:
        "Text의 사이즈가 들어가는 영역입니다. <br /> small, medium, large, larger, largest 등의 지정된 값이나 임의의 값을 넣을 수 있습니다. <br /> 단, 임의의 값을 넣을 때는 <code>px</code>, <code>em</code>, <code>rem</code>, <code>pt</code>의 단위만 사용 가능합니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    fontUrl: {
      description:
        "외부 Font가 들어가는 영역입니다. <br /> URL을 입력하거나 Local 경로를 입력하면 됩니다. <br /> (Text 컴포넌트에서 제거하고 Layout 컴포넌트에 추가 예정)",
      table: {
        type: { summary: "string" },
      },
    },
    fontFamily: {
      description:
        "font-family 값이 들어가는 영역입니다. <br /> Font를 지정할 수 있습니다. <br /> (Text 컴포넌트에서 제거하고 Layout 컴포넌트에 추가 예정)",
      table: {
        type: { summary: "string" },
      },
    },
    wordBreak: {
      description:
        "줄바꿈 속성이 들어가는 영역입니다. <br /> <code>normal</code>, <code>keep-all</code>, <code>break-all</code>, <code>break-word</code> 등 총 4가지의 속성을 넣을 수 있습니다.",
      table: {
        type: { summary: "string" },
      },
    },
    color: {
      description: "Font 색상이 들어가는 영역입니다.",
      table: {
        type: { summary: "string" },
      },
    },
    fontWeight: {
      description: "Font 굵기가 들어가는 영역입니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  storyName: "기본 Text 컴포넌트",
  args: {
    children: "Text",
  },
};

export const TextWithColor: Story = {
  storyName: "Color 적용",
  args: {
    children: "Text with color",
    color: "coral",
    size: "largest",
  },
};

export const TextWithBold: Story = {
  storyName: "FontWeight 적용",
  args: {
    children: "Text",
    size: "largest",
    fontWeight: "bold",
  },
};

export const TextWithBreakKeepAll: Story = {
  storyName: "WordBreak 적용",
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi lacus, mollis a velit vitae, lobortis sodales ligula. Nullam id dui ut eros imperdiet semper mollis at velit.",
    size: "large",
    wordBreak: "keep-all",
  },
};

export const TextWithFontFamily: Story = {
  storyName: "URL과 font-family로 외부 폰트 적용",
  args: {
    children: "Text",
    size: "largest",
    fontUrl:
      "https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&display=swap",
    fontFamily: `Doto, sans-serif`,
  },
};
