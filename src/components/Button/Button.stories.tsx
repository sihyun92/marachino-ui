import { Meta, StoryObj } from "@storybook/react";
import Button from "@components/Button/Button";
import colorPresets from "@components/Button/ColorPreset.json";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Button 컴포넌트는 <code>button</code>태그 기반으로 만들어진 컴포넌트로 버튼을 제공하는 컴포넌트입니다. <br /> Maraschino-UI에서 제공하는 다양한 테마와 컨텍스트에 맞게 스타일링할 수 있습니다.",
      },
    },
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "Button의 내용이 들어가는 영역입니다.",
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      description:
        "Button의 크기를 정하는 영역입니다. <br /> small, medium, large 등 총 3가지의 사이즈가 있습니다. ",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    background: {
      description:
        "Button의 색상을 변경하는 영역입니다. <br /> 총 132개의 색상 프리셋을 제공하고 있어서 보다 편하게 색상을 지정할 수 있습니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    color: {
      description:
        "Button의 글자 색상을 변경하는 영역입니다. <br /> 총 132개의 색상 프리셋을 제공하고 있어서 보다 편하게 색상을 지정할 수 있습니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    shape: {
      description:
        "Button의 모서리를 변경하는 영역입니다. <br /> box, rounded 2가지를 선택할 수 있습니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    shadow: {
      description:
        "Button의 그림자 효과를 지정하는 영역입니다. <br /> light, heavy 2가지를 선택할 수 있습니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    border: {
      description:
        "Button의 테두리선의 굵기를 지정하는 영역입니다. <br /> thin, thick 2가지를 선택할 수 있습니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    borderColor: {
      description:
        "테두리선의 색상을 지정할 수 있습니다. <br /> 132개의 색상 프리셋을 제공하며, 기본값은 background 색상과 동일합니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "기본 Button 컴포넌트",
  args: {
    children: "Button",
    background: "black",
    color: "white",
    size: "small",
  },
};

const colorMap: Record<string, string> = {
  // Default
  black: "#000000",
  white: "#ffffff",

  // Gray
  "gray-0": "#f8f9fa",
  "gray-1": "#f1f3f5",
  "gray-2": "#e9ecef",
  "gray-3": "#dee2e6",
  "gray-4": "#ced4da",
  "gray-5": "#adb5bd",
  "gray-6": "#868e96",
  "gray-7": "#495057",
  "gray-8": "#343a40",
  "gray-9": "#212529",

  // Red
  "red-0": "#fff5f5",
  "red-1": "#ffe3e3",
  "red-2": "#ffc9c9",
  "red-3": "#ffa8a8",
  "red-4": "#ff8787",
  "red-5": "#ff6b6b",
  "red-6": "#fa5252",
  "red-7": "#f03e3e",
  "red-8": "#e03131",
  "red-9": "#c92a2a",

  // Pink
  "pink-0": "#fff0f6",
  "pink-1": "#ffdeeb",
  "pink-2": "#fcc2d7",
  "pink-3": "#faa2c1",
  "pink-4": "#f783ac",
  "pink-5": "#f06595",
  "pink-6": "#e64980",
  "pink-7": "#d6336c",
  "pink-8": "#c2255c",
  "pink-9": "#a61e4d",

  // Grape
  "grape-0": "#f8f0fc",
  "grape-1": "#f3d9fa",
  "grape-2": "#eebefa",
  "grape-3": "#e599f7",
  "grape-4": "#da77f2",
  "grape-5": "#cc5de8",
  "grape-6": "#be4bdb",
  "grape-7": "#ae3ec9",
  "grape-8": "#9c36b5",
  "grape-9": "#862e9c",

  // Violet
  "violet-0": "#f3f0ff",
  "violet-1": "#e5dbff",
  "violet-2": "#d0bfff",
  "violet-3": "#b197fc",
  "violet-4": "#9775fa",
  "violet-5": "#845ef7",
  "violet-6": "#7950f2",
  "violet-7": "#7048e8",
  "violet-8": "#6741d9",
  "violet-9": "#5f3dc4",

  // Indigo
  "indigo-0": "#edf2ff",
  "indigo-1": "#dbe4ff",
  "indigo-2": "#bac8ff",
  "indigo-3": "#91a7ff",
  "indigo-4": "#748ffc",
  "indigo-5": "#5c7cfa",
  "indigo-6": "#4c6ef5",
  "indigo-7": "#4263eb",
  "indigo-8": "#3b5bdb",
  "indigo-9": "#364fc7",

  // Blue
  "blue-0": "#e7f5ff",
  "blue-1": "#d0ebff",
  "blue-2": "#a5d8ff",
  "blue-3": "#74c0fc",
  "blue-4": "#4dabf7",
  "blue-5": "#339af0",
  "blue-6": "#228be6",
  "blue-7": "#1c7ed6",
  "blue-8": "#1971c2",
  "blue-9": "#1864ab",

  // Cyan
  "cyan-0": "#e3fafc",
  "cyan-1": "#c5f6fa",
  "cyan-2": "#99e9f2",
  "cyan-3": "#66d9e8",
  "cyan-4": "#3bc9db",
  "cyan-5": "#22b8cf",
  "cyan-6": "#15aabf",
  "cyan-7": "#1098ad",
  "cyan-8": "#0c8599",
  "cyan-9": "#0b7285",

  // Teal
  "teal-0": "#e6fcf5",
  "teal-1": "#c3fae8",
  "teal-2": "#96f2d7",
  "teal-3": "#63e6be",
  "teal-4": "#38d9a9",
  "teal-5": "#20c997",
  "teal-6": "#12b886",
  "teal-7": "#0ca678",
  "teal-8": "#099268",
  "teal-9": "#087f5b",

  // Green
  "green-0": "#ebfbee",
  "green-1": "#d3f9d8",
  "green-2": "#b2f2bb",
  "green-3": "#8ce99a",
  "green-4": "#69db7c",
  "green-5": "#51cf66",
  "green-6": "#40c057",
  "green-7": "#37b24d",
  "green-8": "#2f9e44",
  "green-9": "#2b8a3e",

  // Lime
  "lime-0": "#f4fce3",
  "lime-1": "#e9fac8",
  "lime-2": "#d8f5a2",
  "lime-3": "#c0eb75",
  "lime-4": "#a9e34b",
  "lime-5": "#94d82d",
  "lime-6": "#82c91e",
  "lime-7": "#74b816",
  "lime-8": "#66a80f",
  "lime-9": "#5c940d",

  // Yellow
  "yellow-0": "#fff9db",
  "yellow-1": "#fff3bf",
  "yellow-2": "#ffec99",
  "yellow-3": "#ffe066",
  "yellow-4": "#ffd43b",
  "yellow-5": "#fcc419",
  "yellow-6": "#fab005",
  "yellow-7": "#f59f00",
  "yellow-8": "#f08c00",
  "yellow-9": "#e67700",

  // Orange
  "orange-0": "#fff4e6",
  "orange-1": "#ffe8cc",
  "orange-2": "#ffd8a8",
  "orange-3": "#ffc078",
  "orange-4": "#ffa94d",
  "orange-5": "#ff922b",
  "orange-6": "#fd7e14",
  "orange-7": "#f76707",
  "orange-8": "#e8590c",
  "orange-9": "#d9480f",
};

export const ColorPresets = () => (
  <div style={{ padding: "16px" }}>
    {Object.entries(colorPresets).map(([category, colors]) => (
      <div key={category} style={{ marginBottom: "16px" }}>
        <h3 style={{ margin: "8px 0" }}>{category}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {colors.map((color) => {
            const resolvedColor = colorMap[color] || color;
            return (
              <div key={color} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: resolvedColor,
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                  title={color}
                />
                <span style={{ fontSize: "12px" }}>{color}</span>
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
);

ColorPresets.parameters = {
  docs: {
    description: {
      story:
        "아래는 Button 컴포넌트에서 사용할 수 있는 색상 프리셋의 목록과 미리 보기입니다.",
    },
  },
};
